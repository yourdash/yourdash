import type { Instance } from "../main";

type CommandFlags = { [key: string]: "string" | "boolean" };
type CommandArguments = { argumentId: string; allowedValues?: string[] }[];

export interface ICommandParameters {
  flags: Command["flags"];
  arguments: Command["arguments"];
}

export interface ICommandRuntimeParameters {
  flags: { [key: string]: string | boolean };
  arguments: { [key: string]: string };
}

export default abstract class Command {
  instance: Instance;
  abstract flags: CommandFlags;
  abstract arguments: CommandArguments;
  abstract commandId: string;

  constructor(instance: Instance) {
    this.instance = instance;
    return this;
  }

  abstract run(parameters: ICommandRuntimeParameters): this;
}
