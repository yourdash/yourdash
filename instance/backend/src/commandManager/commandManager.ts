import path from "path";
import type { Instance } from "../main";
import type { ICommandParameters } from "./command";
import type Command from "./command";
import { promises as fs } from "fs";

class CommandManager {
  private instance: Instance;
  commands: Command<any, any>[];

  constructor(instance: Instance) {
    this.instance = instance;
    this.commands = [];

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

    return this;
  }

  executeCommand(commandId: string, parameters: ICommandParameters<any, any>) {
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
