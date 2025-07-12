/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import chalk from "chalk";
import { type Instance } from "./instance.js";
import { YourDashFeatureFlags } from "./types/configuration.ts";

export enum LogType {
  INFO,
  WARNING,
  ERROR,
  SUCCESS,
  DEBUG,
}

export default class Log {
  instance: Instance;
  logHistory: {
    type: LogType;
    level: string;
    message: (string | Uint8Array<ArrayBufferLike>)[];
  }[] = [];
  metaLength = 28;

  constructor(instance: Instance) {
    this.instance = instance;

    // const getCursorPosition = () =>
    //   new Promise<{ rows: number; columns: number }>((resolve) => {
    //     const termcodes = { CURSOR_GET_POSITION: "\u001b[6n" };
    //
    //     process.stdin.setEncoding("utf8");
    //     process.stdin.setRawMode(true);
    //
    //     const readfx = () => {
    //       const buf = process.stdin.read();
    //       const str = JSON.stringify(buf); // "\u001b[9;1R"
    //       const regex = /\[(.*)/g;
    //       const xy = regex.exec(str)?.[0].replace(/\[|R"/g, "").split(";");
    //       const position = {
    //         rows: Number(xy?.[0] ?? -1),
    //         columns: Number(xy?.[1] ?? -1),
    //       };
    //       process.stdin.setRawMode(false);
    //       resolve(position);
    //     };
    //
    //     process.stdin.once("readable", readfx);
    //     process.stdout.write(termcodes.CURSOR_GET_POSITION);
    //   });

    // @ts-ignore
    globalThis._internal_console = {
      log: console.log,
    };

    console.log = (...data: any[]) => this.info("unknown", ...data);

    let stdoutWidth = process.stdout.getWindowSize?.()[0] || 80;
    let titleString = " YourDash Instance Pre-Alpha ";

    process.stdout.write(
      `${"-".repeat((stdoutWidth - titleString.length) / 2)}${titleString}${"-".repeat((stdoutWidth - titleString.length) / 2)}\n`,
    );

    return this;
  }

  _internal_writePrompt() {
    // move cursor to the last row, 1st column
    process.stdout.cursorTo(0, process.stdout.getWindowSize()[1], () => {
      // scroll view down 1 row
      process.stdout.write("\n", () => {
        // move the cursor to the 3rd last row, 1st column
        process.stdout.cursorTo(
          0,
          process.stdout.getWindowSize()[1] - 3,
          () => {
            // write the separator line to the stdout
            process.stdout.write(
              "-".repeat(process.stdout.getWindowSize()[0]),
              () => {
                // move the cursor to the 2nd last row, 1st column
                process.stdout.cursorTo(
                  0,
                  process.stdout.getWindowSize()[1] - 2,
                  () => {
                    // write the branding to the stdout
                    process.stdout.write(
                      `   YourDash Pre-Alpha ${this.instance.configurationManager?.config.isDevMode ? `[${this.addEmphasisToString("DEV Mode")}] ` : ""}`,
                      () => {
                        // move the cursor to the metaLen+6th column of the 2nd from the bottom row
                        process.stdout.cursorTo(
                          this.instance.log.metaLength + 6,
                          process.stdout.getWindowSize()[1] - 2,
                          () => {
                            if (
                              this.instance.configurationManager?.hasFeature(
                                YourDashFeatureFlags.SlashCommands,
                              )
                            ) {
                              // write the prompt indicator to the stdout
                              process.stdout.write("> ");
                            } else {
                              process.stdout.write("  ");
                            }
                          },
                        );
                      },
                    );
                  },
                );
              },
            );
          },
        );
      });
    });
  }

  info(level: string, ...message: (string | Uint8Array)[]) {
    if (level.length === 0) {
      throw new Error("log level is empty");
    }

    if (message.length === 0) {
      throw new Error("log message is empty");
    }

    return this.log(LogType.INFO, level, ...message);
  }

  success(level: string, ...message: (string | Uint8Array)[]) {
    if (level.length === 0) {
      throw new Error("log level is empty");
    }

    if (message.length === 0) {
      throw new Error("log message is empty");
    }

    return this.log(LogType.SUCCESS, level, ...message);
  }

  warning(level: string, ...message: (string | Uint8Array)[]) {
    if (level.length === 0) {
      throw new Error("log level is empty");
    }

    if (message.length === 0) {
      throw new Error("log message is empty");
    }

    return this.log(LogType.WARNING, level, ...message);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error(level: string, ...message: any[]) {
    if (message.length === 0) {
      this.log(LogType.ERROR, "log", new Error("log message is empty").stack);
    }

    this.log(LogType.ERROR, level, ...message);

    return this;
  }

  debug(level: string, ...message: (string | Uint8Array)[]) {
    if (!this.instance.configurationManager.config.isDevMode) {
      return this;
    }

    if (level.length === 0) {
      throw new Error("log level is empty");
    }

    if (message.length === 0) {
      throw new Error("log message is empty");
    }

    return this.log(LogType.DEBUG, level, ...message);
  }

  addEmphasisToString(string: string): string {
    return chalk.bold.magenta(string);
  }

  createBanner(bannerText: string): string {
    const LOG_WIDTH =
      process.stdout.getWindowSize()[0] - (this.instance.log.metaLength + 6);
    return (
      "-".repeat((LOG_WIDTH - bannerText.length) / 2) +
      bannerText +
      "-".repeat((LOG_WIDTH - bannerText.length) / 2)
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private writeMessage(typeString: string, level: string, ...message: any[]) {
    process.stdout.cursorTo(0, process.stdout.getWindowSize()[1] - 3, () => {
      process.stdout.clearLine(1, () => {
        // @ts-ignore
        globalThis._internal_console.log(
          typeString,
          chalk.bold(
            `${chalk.yellow(level.toUpperCase().slice(0, this.metaLength).padEnd(this.metaLength))} `,
          ),
          ...message.map((msg) =>
            msg.split("\n").join("\n" + " ".repeat(this.metaLength + 6)),
          ),
        );

        this._internal_writePrompt();
      });
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private log(type: LogType, level: string, ...message: any[]): this {
    this.logHistory.push({ type: type, level: level, message: message });

    let typeString = "";

    switch (type) {
      case LogType.INFO:
        typeString = chalk.bold(
          `${chalk.white("[")}${chalk.blue("INF")}${chalk.white("]")}`,
        );
        break;
      case LogType.WARNING:
        typeString = chalk.bold(
          `${chalk.white("[")}${chalk.yellow("WAR")}${chalk.white("]")}`,
        );
        break;
      case LogType.ERROR:
        typeString = chalk.bold(
          `${chalk.white("[")}${chalk.red("ERR")}${chalk.white("]")}`,
        );
        break;
      case LogType.SUCCESS:
        typeString = chalk.bold(
          `${chalk.white("[")}${chalk.green("SUC")}${chalk.white("]")}`,
        );
        break;
      case LogType.DEBUG:
        typeString = chalk.bold(
          `${chalk.white("[")}${chalk.magenta("DBG")}${chalk.white("]")}`,
        );
        break;
    }

    this.writeMessage(typeString, level, ...message);

    return this;
  }
}
