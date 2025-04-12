/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import path from "path";
import type { Instance } from "./main.js";
import * as fs from "node:fs";

interface IYourDashApplicationConfigV1 {
  id: string;
  displayName: string;
  description: string;
  version: {
    minor: number; major: number;
  };
  credits: {
    authors?: { name: string; site: string }[];
    contributors?: { name: string; site: string }[];
    translators?: { name: string; site: string }[];
    other?: { name: string; site: string }[];
  };
  configVersion: number;
  frontend?: boolean;
  externalFrontend?: {
    url: string;
  };
}

class YourDashApplication {
  id: string;
  __internal_params: IYourDashApplicationConfigV1;
  __internal_initializedPath!: string;

  constructor(applicationParams: IYourDashApplicationConfigV1) {
    this.__internal_params = applicationParams;
    this.id = this.__internal_params.id;
    this.__internal_initializedPath = "NOT YET LOADED!!!!";

    return this;
  }

  onLoad() {
    return this;
  }

  onAfterInstall() {
    return this;
  }

  onBeforeUninstall() {
    return this;
  }
}

class Applications {
  instance: Instance;
  loadedApplications: YourDashApplication[];

  constructor(instance: Instance) {
    this.instance = instance;
    this.loadedApplications = [];

    return this;
  }

  async getInstalledApplications(): Promise<string[]> {
    let installedApplications = await fs.promises.readdir(path.join(process.cwd(), this.instance.flags.isDocker ? "src/apps" : "../../apps"))

    installedApplications = installedApplications.filter(a => !a.endsWith(".txt"))

    return [ ...installedApplications, ...this.instance.flags.loadDevelopmentApplications ]
  }

  getApplicationAbsolutePath(applicationPath: string) {
    return path.resolve(path.join(process.cwd(), this.instance.flags.isDocker ? "src/apps" : "../../apps", applicationPath))
  }

  async loadApplication(applicationPath: string): Promise<YourDashApplication | null> {
    try {
      if (!await this.verifyApplication(applicationPath)) {
        return null;
      }

      this.instance.log.info("application", `Loading application @ ${this.instance.log.addEmphasisToString(this.getApplicationAbsolutePath(applicationPath))}.`);
      console.log(path.posix.join(this.getApplicationAbsolutePath(applicationPath), "/backend/src/index.ts"))
      // import index.ts at applicationPath
      let applicationImport = await import(path.posix.join(this.getApplicationAbsolutePath(applicationPath), "/backend/src/index.ts"));
      let application = new applicationImport.default();
      application.__internal_initializedPath = path.resolve(this.getApplicationAbsolutePath(applicationPath))
      this.loadedApplications.push(application);
      await application?.onLoad?.();
      return application;
    } catch (e) {
      console.error(e);
      this.instance.log.info("application", `Failed to load application @ ${applicationPath}.`);
      return null;
    }
  }

  async verifyApplication(applicationPath: string): Promise<boolean> {
    // is the path a directory
    const absoluteApplicationPath = this.getApplicationAbsolutePath(applicationPath)
    const stat = await fs.promises.lstat(absoluteApplicationPath)

    if (!stat.isDirectory()) {
      return false
    }

    if (this.instance.flags.linkDevelopmentApplications) {
      Bun.spawnSync([ "yarn", "add", path.relative(path.join(absoluteApplicationPath, "backend"), process.cwd()) ], {
        cwd: path.join(absoluteApplicationPath, "backend"),
        stdout: "inherit",
        stderr: "inherit"
      })
      Bun.spawnSync([ "yarn", "add", path.relative(path.join(absoluteApplicationPath, "web"), path.join(process.cwd(), "../web")) ], {
        cwd: path.join(absoluteApplicationPath, "web"),
        stdout: "inherit",
        stderr: "inherit"
      })
    }

    return true;
  }

  async uninstallApplication(applicationId: string) {
    return this;
  }
}

export default Applications;
export { YourDashApplication, type IYourDashApplicationConfigV1 };
