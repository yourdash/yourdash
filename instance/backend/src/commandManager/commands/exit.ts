import Command, { type ICommandRuntimeParameters } from "../command";

export default class ExitCommand extends Command {
  commandId = "exit";
  flags = {};
  arguments = [];
  shortDescription = "Terminate the YourDash instance";

  async run(parameters: ICommandRuntimeParameters) {
    process.exit(0);

    // Note: do not remove this line of code or Typescript will complain
    return this.finishRun();
  }
}
