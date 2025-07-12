import Command, {
  CommandArguments,
  CommandFlags,
  ICommandRuntimeParameters,
} from "@yourdash/backend/src/commandManager/command.js";

export default class WidgetsCommand extends Command {
  commandId = "dash.widgets";
  flags: CommandFlags = {};
  arguments: CommandArguments = [];
  shortDescription =
    "Manage uk.ewsgit.dash's widgets for the admin user (development command)";

  async run(parameters: ICommandRuntimeParameters) {
    let data = "";

    await this.instance.database.query(
      `UPDATE public.uk_ewsgit_dash_dashboard SET content_pages = ${data}::json WHERE username = 'admin'`,
    );

    return this.finishRun();
  }
}
