import Command, { type ICommandRuntimeParameters } from "../command.js";

export default class RestartCommand extends Command {
  commandId = "rs";
  flags = {};
  shortDescription = "Restart the YourDash instance";

  async run(parameters: ICommandRuntimeParameters) {
    // this.instance.log.info(
    //   "command_restart",
    //   "Restarting YourDash instance...",
    // );

    this.instance.log.error(
      "command_restart",
      "This command does not work as instance shutdown is unimplemented...",
    );

    // TODO: implement a shutdown sequence
    // this.instance.shutdown()
    // this.instance.requestManager.app.server.close();
    // this.instance.commandManager.close();

    return this.finishRun();
  }
}
