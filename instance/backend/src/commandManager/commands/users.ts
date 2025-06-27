import Command, { type ICommandParameters } from "../command";

export default class UsersCommand extends Command<unknown, unknown> {
  commandId = "users";

  run(parameters: ICommandParameters): this {
    return this;
  }
}
