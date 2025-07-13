import path from "path";
import type { Instance } from "../instance.ts";
import type { ICommandRuntimeParameters } from "./command";
import type Command from "./command";
import { promises as fs } from "fs";
import { YourDashFeatureFlags } from "../types/configuration.ts";
import readline from "readline";

export default class CommandManager {
  private readonly instance: Instance;
  rlInterface!: readline.Interface;
  commands: Command[];
  currentCommandInterface!: { active: boolean; cb: (data: string) => void };

  constructor(instance: Instance) {
    this.instance = instance;
    this.commands = [];

    if (
      !instance.configurationManager.hasFeature(
        YourDashFeatureFlags.SlashCommands,
      )
    )
      return this;

    fs.readdir(
      path.join(this.instance.filesystem.SRC_ROOT, "/commandManager/commands/"),
    ).then((commands) => {
      for (const cmd of commands) {
        import(
          path.join(
            this.instance.filesystem.SRC_ROOT,
            "/commandManager/commands/",
            cmd,
          )
        ).then((cmd) => {
          this.commands.push(new cmd.default(this.instance));
        });
      }
    });

    const self = this;
    this.currentCommandInterface = {
      active: false,
      cb: () => {},
    };

    (async function () {
      self.rlInterface = readline.createInterface({
        input: process.stdin,
        tabSize: 2,
      });

      self.currentCommandInterface.active = false;

      for await (let line of self.rlInterface) {
        if (self.currentCommandInterface.active) {
          self.currentCommandInterface.cb(line);
          continue;
        }

        line = line.trim();
        let segments = line.split(" ");
        let cmdId = segments.shift();
        self.instance.log.info("invoked_command", `> ${line}`);

        if (!cmdId) {
          console.log("Invalid CommandId");
          continue;
        }

        let command = self.commands.find((cmd) => cmd.commandId === cmdId);

        if (!command) {
          self.instance.log.info(
            "command_manager",
            `Unable to find the command with id '${cmdId}'`,
          );
          continue;
        }

        if (
          command.makeDevModeOnly &&
          !self.instance.configurationManager.config.isDevMode
        ) {
          self.instance.log.info(
            "command_manager",
            `You are unable to execute the command '${command.commandId}' as this instance is not running in developer mode`,
          );
          continue;
        }

        self.currentCommandInterface.active = true;
        await self.executeCommand(cmdId, {
          arguments: segments,
          flags: {},
          rawArgv: line.slice(cmdId.length + 1),
        });
      }
    })();

    return this;
  }

  close() {
    this.rlInterface.close();

    return this;
  }

  async executeCommand(
    commandId: string,
    parameters: ICommandRuntimeParameters,
  ) {
    let com = this.commands.find((com) => com.commandId === commandId);

    if (!com) {
      this.instance.log.error(
        "command_manager",
        `Unable to execute command "${commandId}" as no such command exists.`,
      );

      return this;
    }

    await com.run(parameters);

    return this;
  }
}
