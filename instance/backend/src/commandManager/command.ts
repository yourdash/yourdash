import type { Instance } from "../instance";

export type CommandFlags = { [key: string]: "string" | "boolean" };
export type CommandArguments = {
  argumentId: string;
  allowedValues?: string[];
}[];

export interface ICommandParameters {
  flags: Command["flags"];
  arguments: Command["arguments"];
}

export interface ICommandRuntimeParameters {
  flags: { [key: string]: string | boolean };
  arguments: { [key: string]: string };
  rawArgv: string;
}

export default abstract class Command {
  instance: Instance;
  abstract flags: CommandFlags;
  abstract arguments: CommandArguments;
  abstract commandId: string;
  shortDescription: string = "short description was undefined";
  makeDevModeOnly: boolean = false;

  constructor(instance: Instance) {
    this.instance = instance;
    return this;
  }

  abstract run(
    parameters: ICommandRuntimeParameters,
  ): Promise<
    ReturnType<Command["finishRun"]> | ReturnType<Command["continueRun"]>
  >;

  finishRun() {
    this.instance.commandManager.currentCommandInterface.active = false;

    return {
      runCompleted: true,
      sig: "this is a random string to ensure that the command's run() ended with this function." as const,
    };
  }

  continueRun() {
    return {
      runCompleted: false,
      sig: "this is a random string to ensure that the command's run() ended with this function." as const,
    };
  }
}
