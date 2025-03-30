/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import chalk from "chalk";
import { type Instance } from "./main.js";

export enum LogType {
  INFO,
  WARNING,
  ERROR,
  SUCCESS,
  DEBUG,
}

const LOG_META_MAX_LENGTH = 28;

export default class Log {
  instance: Instance;
  logHistory: {
    type: LogType;
    level: string;
    message: (string | Uint8Array<ArrayBufferLike>)[];
  }[] = [];

  constructor(instance: Instance) {
    this.instance = instance;
    let stdoutWidth = process.stdout.getWindowSize?.()[0] || 80;
    let titleString = " YourDash Instance Pre-Alpha ";

    process.stdout.cursorTo?.(0, 0);
    process.stdout.clearScreenDown?.();
    process.stdout.write(
      `${"-".repeat((stdoutWidth - titleString.length) / 2)}${titleString}${"-".repeat((stdoutWidth - titleString.length) / 2)}\n\n`,
    );
    process.stdout.cursorTo?.(0, 1);

    const getCursorPosition = () =>
      new Promise<{ rows: number; columns: number }>((resolve) => {
        const termcodes = { CURSOR_GET_POSITION: "\u001b[6n" };

        process.stdin.setEncoding("utf8");
        process.stdin.setRawMode(true);

        const readfx = () => {
          const buf = process.stdin.read();
          const str = JSON.stringify(buf); // "\u001b[9;1R"
          const regex = /\[(.*)/g;
          const xy = regex.exec(str)?.[0].replace(/\[|R"/g, "").split(";");
          const position = { rows: Number(xy?.[0] ?? -1), columns: Number(xy?.[1] ?? -1) };
          process.stdin.setRawMode(false);
          resolve(position);
        };

        process.stdin.once("readable", readfx);
        process.stdout.write(termcodes.CURSOR_GET_POSITION);
      });

    return this;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private writeMessage(typeString: string, level: string, ...message: any[]) {
    console.log(
      typeString,
      chalk.bold(`${chalk.yellow(level.toUpperCase().slice(0, LOG_META_MAX_LENGTH).padEnd(LOG_META_MAX_LENGTH))} `),
      ...message,
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private log(type: LogType, level: string, ...message: any[]): this {
    this.logHistory.push({ type: type, level: level, message: message });

    let typeString = "";

    switch (type) {
      case LogType.INFO:
        typeString = chalk.bold(`${chalk.white("[")}${chalk.blue("INF")}${chalk.white("]")}`);
        break;
      case LogType.WARNING:
        typeString = chalk.bold(`${chalk.white("[")}${chalk.yellow("WAR")}${chalk.white("]")}`);
        break;
      case LogType.ERROR:
        typeString = chalk.bold(`${chalk.white("[")}${chalk.red("ERR")}${chalk.white("]")}`);
        break;
      case LogType.SUCCESS:
        typeString = chalk.bold(`${chalk.white("[")}${chalk.green("SUC")}${chalk.white("]")}`);
        break;
      case LogType.DEBUG:
        typeString = chalk.bold(`${chalk.white("[")}${chalk.magenta("DBG")}${chalk.white("]")}`);
        break;
    }

    this.writeMessage(typeString, level, ...message);

    return this;
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
    if (!this.instance.flags.isDevMode) {
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
}
