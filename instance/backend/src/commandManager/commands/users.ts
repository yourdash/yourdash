import Command, { type ICommandRuntimeParameters } from "../command";

export default class UsersCommand extends Command {
  commandId = "users";
  flags = {};
  arguments = [
    { argumentId: "subcommand", allowedValues: ["list", "remove", "create"] },
  ];

  run(parameters: ICommandRuntimeParameters): this {
    if (!parameters.arguments["subcommand"]) {
      this.instance.log.error("command_user", "Please provide a subcommand");

      return this;
    }

    switch (parameters.arguments["subcommand"]) {
      default:
        this.instance.log.error(
          "command_user",
          `Invalid subcommand '${parameters.arguments["subcommand"]}'`,
        );
        return this;
    }

    return this;
  }
}
