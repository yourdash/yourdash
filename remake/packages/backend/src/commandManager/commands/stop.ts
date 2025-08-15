import Command, { type ICommandRuntimeParameters } from "../command";

export default class ExitCommand extends Command {
  commandId = "stop";
  flags = {};
  shortDescription = "Terminate the YourDash instance";

  async run(parameters: ICommandRuntimeParameters) {
    await this.instance.commandManager.executeCommand("exit", {
      arguments: [],
      flags: {},
      rawArgv: "",
    });

    // Note: do not remove this line of code or Typescript will complain
    return this.finishRun();
  }
}
