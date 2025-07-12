import Command, { type ICommandRuntimeParameters } from "../command";

export default class EvalCommand extends Command {
  commandId = "eval";
  flags = {};
  arguments: [
    {
      argumentId: string;
      allowedValues?: string[] | undefined;
    },
  ] = [
    {
      argumentId: "eval string",
    },
  ];
  shortDescription = "Execute arbitrary code (for debugging purposes)";

  async run(parameters: ICommandRuntimeParameters) {
    if (!this.instance.configurationManager.config.isDevMode) {
      this.instance.log.error(
        "command_eval",
        "This command is only available on instances running in developer mode",
      );
      return this.finishRun();
    }

    try {
      // Helper definitions for using eval
      // noinspection JSUnusedLocalSymbols
      const instance = this.instance;
      console.log(eval(parameters.rawArgv));
      // @ts-ignore
    } catch (e) {
      let err = e as EvalError;
      this.instance.log.error(
        "caught_in_eval",
        err.stack?.replaceAll(
          "\n",
          "\n" + " ".repeat(this.instance.log.metaLength + 6),
        ),
      );
    }

    return this.finishRun();
  }
}
