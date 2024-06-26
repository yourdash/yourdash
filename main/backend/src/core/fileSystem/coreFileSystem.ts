/*
 * Copyright ©2024 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { promises as fs } from "fs";
import pth from "path";
import { Core } from "../core.js";
import coreVerifyFileSystem from "./coreVerifyFileSystem.js";
import FileSystemDirectory from "./fileSystemDirectory.js";
import FileSystemFile from "./fileSystemFile.js";
import FileSystemLock from "./fileSystemLock.js";
import FileSystemNull from "./fileSystemNull.js";

export default class coreFileSystem {
  ROOT_PATH: string;
  core: Core;
  readonly verifyFileSystem: coreVerifyFileSystem;
  __internal__fileSystemLocks: Map<string, FileSystemLock[]>;

  constructor(core: Core) {
    this.ROOT_PATH = pth.resolve(pth.join(process.cwd(), "./../../fs/"));
    this.core = core;
    this.verifyFileSystem = new coreVerifyFileSystem(this.core);
    this.__internal__fileSystemLocks = new Map<string, FileSystemLock[]>();

    return this;
  }

  async get(path: string) {
    try {
      if ((await this.getEntityType(path)) === "directory") {
        return new FileSystemDirectory(this.core, path);
      } else {
        return new FileSystemFile(this.core, path);
      }
    } catch (_err) {
      return new FileSystemNull(this.core);
    }
  }

  async getOrCreateFile(path: string) {
    if (!(await this.doesExist(path))) {
      await fs.mkdir(pth.dirname(path), { recursive: true });
    }

    return new FileSystemFile(this.core, path);
  }

  async getFile(path: string): Promise<FileSystemFile> | null {
    try {
      if ((await this.getEntityType(path)) === "file") {
        return new FileSystemFile(this.core, path);
      }
    } catch (err) {
      if (err.code === "ENOENT") {
        this.core.log.warning("filesystem", `unable to get file ${path}, creating it...`);
        return this.createFile(path);
      }

      this.core.log.error("filesystem", err);

      return null;
    }

    return this.createFile(path);
  }

  async getDirectory(path: string): Promise<FileSystemDirectory> | null {
    try {
      if ((await this.getEntityType(path)) === "directory") {
        return new FileSystemDirectory(this.core, path);
      }
    } catch (_err) {
      return null;
    }

    return null;
  }

  async getOrCreateDirectory(path: string) {
    const dir = new FileSystemDirectory(this.core, path);

    if (!(await dir.doesExist())) {
      await dir.create();
    }

    return dir;
  }

  async getEntityType(path: string): Promise<"file" | "directory"> {
    return (await fs.lstat(pth.join(this.ROOT_PATH, path))).isDirectory() ? "directory" : "file";
  }

  async doesExist(path: string, dontLimitToRootPath = false): Promise<boolean> {
    try {
      if (dontLimitToRootPath) {
        await fs.access(path);
      } else {
        await fs.access(pth.join(this.ROOT_PATH, path));
      }
      return true;
    } catch (_err) {
      return false;
    }
  }

  createFile(path: string) {
    return new FileSystemFile(this.core, path);
  }

  async createDirectory(path: string) {
    const dir = new FileSystemDirectory(this.core, path);
    await dir.create();
    return dir;
  }

  async removePath(path: string) {
    return await fs.rm(pth.join(this.ROOT_PATH, path), {
      recursive: true,
      maxRetries: 2,
      retryDelay: 500,
    });
  }

  async copy(source: string, destination: string) {
    try {
      await fs.cp(pth.join(this.ROOT_PATH, source), pth.join(this.ROOT_PATH, destination));
      return true;
    } catch (e) {
      this.core.log.error("filesystem", "Unable to copy file: " + source + " to " + destination);
      return false;
    }
  }
}
