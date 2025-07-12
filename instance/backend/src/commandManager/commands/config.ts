import Command, { type ICommandRuntimeParameters } from "../command";
import User from "../../userManager/user.ts";

export default class ConfigCommand extends Command {
  commandId = "config";
  flags = {};
  arguments = [
    { argumentId: "action", allowedValues: ["set", "delete", "echo"] },
    { argumentId: "configKey" },
  ];
  shortDescription = "Manage the YourDash instance's configuration";

  async run(parameters: ICommandRuntimeParameters) {
    if (!parameters.arguments["action"]) {
      this.instance.log.error("command_config", "Please provide a subcommand");

      return this.finishRun();
    }

    switch (parameters.arguments["action"]) {
      case "echo":
        if (!parameters.arguments["configKey"]) {
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

        return this.finishRun();
      default:
        this.instance.log.error(
          "command_config",
          `Invalid subcommand '${parameters.arguments["action"]}'. Allowed values: '${this.arguments.find((arg) => arg.argumentId === "action")?.allowedValues?.join("', '")}'`,
        );
        return this.finishRun();
    }
  }
}
