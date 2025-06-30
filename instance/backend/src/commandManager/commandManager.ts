import path from "path";
import type { Instance } from "../instance.ts";
import type { ICommandParameters, ICommandRuntimeParameters } from "./command";
import type Command from "./command";
import { promises as fs } from "fs";
import { YourDashFeatureFlags } from "../types/configuration.ts";

class CommandManager {
  private instance: Instance;
  commands: Command[];

  constructor(instance: Instance) {
    this.instance = instance;
    this.commands = [];

    if (
      !instance.configurationManager.hasFeature(
        YourDashFeatureFlags.SlashCommands,
      )
    )
      return this;

    fs.readdir(path.join(process.cwd(), "src/commandManager/commands/")).then(
      (commands) => {
        for (const cmd of commands) {
          import(
            path.join(process.cwd(), "src/commandManager/commands/", cmd)
          ).then((cmd) => {
            this.commands.push(new cmd.default(this.instance));
          });
        }
      },
    );

    // TODO: here we must take control of stdin to register input & execute commands

    // [DO SOMETHING HERE]

    return this;
  }

  executeCommand(commandId: string, parameters: ICommandRuntimeParameters) {
    let com = this.commands.find((com) => com.commandId === commandId);

    if (!com) {
      this.instance.log.error(
        "command_manager",
        `Unable to execute command "${commandId}" as no such command exists.`,
      );

      return this;
    }

    com.run(parameters);

    return this;
  }
}
