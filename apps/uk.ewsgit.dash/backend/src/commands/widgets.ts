import Command, {
  CommandArguments,
  CommandFlags,
  ICommandRuntimeParameters,
} from "@yourdash/backend/src/commandManager/command.js";

class WidgetsCommand extends Command {
  commandId = "dash.widgets";
  flags: CommandFlags = {};
  arguments: CommandArguments = [];
  shortDescription = "Manage uk.ewsgit.dash's widgets for a user";

  async run(parameters: ICommandRuntimeParameters) {
    return this.finishRun();
  }
}
