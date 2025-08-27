import Command, { type ICommandRuntimeParameters } from "../command.js";
import chalk from "chalk";

export default class HelpCommand extends Command {
  commandId = "help";
  flags = {};
  shortDescription = "Display this help information";

  async run(parameters: ICommandRuntimeParameters) {
    const log = (...message: string[]) =>
      this.instance.log.info("command_help", ...message);

    const HELP_BANNER_TITLE = " YourDash Help ";
    const LOG_WIDTH =
      process.stdout.getWindowSize()[0] - (this.instance.log.metaLength + 6);

    log(
      "-".repeat((LOG_WIDTH - HELP_BANNER_TITLE.length) / 2) +
        HELP_BANNER_TITLE +
        "-".repeat((LOG_WIDTH - HELP_BANNER_TITLE.length) / 2),
    );

    for (const command of this.instance.commandManager.commands) {
      log(
        `${this.instance.log.addEmphasisToString(command.commandId)} - ${command.shortDescription}`,
      );
      if (Object.keys(command.flags).length > 0) {
        log(`  ${chalk.bold("flags")}:`);
        log(`    ${JSON.stringify(command.flags)}`);
      }
    }

    return this.finishRun();
  }
}
