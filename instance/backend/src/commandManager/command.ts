import type { Instance } from "../main";

export interface ICommandParameters<
  Flags extends CommandFlags,
  Arguments extends CommandArguments,
> {
  flags: Flags;
  arguments: Arguments;
}

type CommandFlags = { [key: string]: string | boolean };
type CommandArguments = { argumentId: string }[];

export default abstract class Command<
  Flags extends CommandFlags,
  Arguments extends CommandArguments,
> {
  instance: Instance;
  abstract flags: Flags;
  abstract arguments: Arguments;
  abstract commandId: string;

  constructor(instance: Instance) {
    this.instance = instance;
    return this;
  }

  abstract run(parameters: ICommandParameters<Flags, Arguments>): this;
}
