import Command, { type ICommandRuntimeParameters } from "../command.js";
import User from "../../userManager/user.ts";

export default class ConfigCommand extends Command {
  commandId = "config";
  flags = {};
  shortDescription = "Manage the YourDash instance's configuration";

  async run(parameters: ICommandRuntimeParameters) {
    if (!parameters.arguments[0]) {
      this.instance.log.error("command_config", "Please provide a subcommand");

      return this.finishRun();
    }

    switch (parameters.arguments[0]) {
      case "echo":
        if (!parameters.arguments[0]) {
          this.instance.log.info(
            "command_config",
            JSON.stringify(this.instance.configurationManager.config, null, 2),
          );
          return this.finishRun();
        }

        return this.finishRun();
      case "set":
        this.instance.log.error(
          "command_config",
          "Please provide a subcommand",
        );

        console.log("work in progress");

        return this.finishRun();
      default:
        this.instance.log.error(
          "command_config",
          `Invalid subcommand '${parameters.arguments[0]}'. Allowed values: 'set', 'delete', 'echo'`,
        );
        return this.finishRun();
    }
  }
}
