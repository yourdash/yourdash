/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import path from "path";
import type { Instance } from "./instance.js";
import { promises as fs } from "node:fs";

interface IYourDashApplicationConfigV1 {
  id: string;
  displayName: string;
  description: string;
  version: {
    minor: number;
    major: number;
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
  _applicationParameters: IYourDashApplicationConfigV1;
  _applicationSourcePath!: string;
  instance: Instance;

  constructor(
    applicationParams: IYourDashApplicationConfigV1,
    instance: Instance,
  ) {
    this._applicationParameters = applicationParams;
    this.id = this._applicationParameters.id;
    this._applicationSourcePath = "NOT YET LOADED!!!!";
    this.instance = instance;

    return this;
  }

  async loadEndpoints() {
    const ENDPOINTS_DIRECTORY = path.join(
      this._applicationSourcePath,
      "backend/src/endpoints",
    );

    let endpoints: string[] = [];

    async function scanDirectory(dir: string) {
      for (const item of await fs.readdir(dir)) {
        if ((await fs.stat(path.join(dir, item))).isDirectory()) {
          await scanDirectory(path.join(dir, item));
          continue;
        }

        if (item.endsWith(".ts")) {
          if (item.endsWith(".schema.ts")) {
            continue;
          }

          endpoints.push(path.join(dir, item));
        }
      }
    }

    if (await fs.exists(ENDPOINTS_DIRECTORY))
      await scanDirectory(ENDPOINTS_DIRECTORY);

    for (const endpointPath of endpoints) {
      this.instance.log.info(
        this.id,
        "loading endpoint",
        path.relative(this.instance.filesystem.SRC_ROOT, endpointPath),
      );

      let endpoint = (await import(endpointPath)).default;

      endpoint(this);
    }

    return this;
  }

  async onLoad() {
    await this.loadEndpoints();

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
    let installedApplications = await fs.readdir(
      path.join(
        this.instance.filesystem.SRC_ROOT,
        this.instance.flags.isDocker ? "src/apps" : "../../../apps",
      ),
    );

    installedApplications = installedApplications.filter(
      (a) => !a.endsWith(".txt"),
    );

    return [
      ...installedApplications,
      ...this.instance.configurationManager.config.loadDevelopmentApplications,
    ];
  }

  getApplicationAbsolutePath(applicationPath: string) {
    return path.resolve(
      path.join(
        this.instance.filesystem.SRC_ROOT,
        this.instance.flags.isDocker ? "src/apps" : "../../../apps",
        applicationPath,
      ),
    );
  }

  async loadApplication(
    applicationPath: string,
  ): Promise<YourDashApplication | null> {
    try {
      if (!(await this.verifyApplication(applicationPath))) {
        return null;
      }

      this.instance.log.info(
        "application",
        `Loading application @ ${this.instance.log.addEmphasisToString(this.getApplicationAbsolutePath(applicationPath))}.`,
      );
      // import index.ts at applicationPath
      let applicationImport = await import(
        path.posix.join(
          this.getApplicationAbsolutePath(applicationPath),
          "/backend/src/index.ts",
        )
      );
      let application: YourDashApplication = new applicationImport.default(
        this.instance,
      );
      application._applicationSourcePath = path.resolve(
        this.getApplicationAbsolutePath(applicationPath),
      );
      this.loadedApplications.push(application);
      await application?.onLoad?.();
      return application;
    } catch (e) {
      console.error(e);
      this.instance.log.info(
        "application",
        `Failed to load application @ ${applicationPath}.`,
      );
      return null;
    }
  }

  async verifyApplication(applicationPath: string): Promise<boolean> {
    // is the path a directory
    const absoluteApplicationPath =
      this.getApplicationAbsolutePath(applicationPath);
    const stat = await fs.lstat(absoluteApplicationPath);

    if (!stat.isDirectory()) {
      return false;
    }

    // FIXME: replace this with logic to check whether the application is not linked
    //        (include web and backend)
    const backendPath = path.join(absoluteApplicationPath, "backend");

    // read the package.json file
    const packageJsonPath = path.join(backendPath, "package.json");
    const packageJson = JSON.parse(
      (await fs.readFile(packageJsonPath)).toString(),
    );

    if (typeof packageJson?.dependencies?.["@yourdash/backend"] === "string") {
      this.instance.log.info(
        "application_verification",
        `Application '${this.instance.log.addEmphasisToString(path.basename(applicationPath))}' was already linked`,
      );
    } else {
      this.instance.log.info(
        "application_verification",
        `Linking application '${this.instance.log.addEmphasisToString(path.basename(applicationPath))}'`,
      );
      // manually add the dependencies required for a YourDash application

      const backendPath = path.join(absoluteApplicationPath, "backend");
      const webPath = path.join(absoluteApplicationPath, "web");

      const backendPackageJsonPath = path.join(backendPath, "package.json");
      let backendPackageJson = JSON.parse(
        (await fs.readFile(backendPackageJsonPath)).toString(),
      );

      backendPackageJson.dependencies["@yourdash/backend"] =
        "workspace:instance/backend";
      // `file:${path.relative(backendPath, process.cwd()).replaceAll(path.win32.sep, path.posix.sep)}`;

      await fs.writeFile(
        backendPackageJsonPath,
        JSON.stringify(backendPackageJson, null, 2),
      );

      const webPackageJsonPath = path.join(webPath, "package.json");
      let webPackageJson = JSON.parse(
        (await fs.readFile(webPackageJsonPath)).toString(),
      );

      webPackageJson.dependencies["@yourdash/web"] = "workspace:instance/web";
      // `file:${path.relative(webPath, path.join(process.cwd(), "../web")).replaceAll(path.win32.sep, path.posix.sep)}`;

      await fs.writeFile(
        webPackageJsonPath,
        JSON.stringify(webPackageJson, null, 2),
      );

      // Run yarn to link them
      Bun.spawnSync(["yarn"], {
        cwd: absoluteApplicationPath,
        stdout: "inherit",
        stderr: "inherit",
      });
    }

    return true;
  }

  async uninstallApplication(applicationId: string) {
    return this;
  }
}

export default Applications;
export { YourDashApplication, type IYourDashApplicationConfigV1 };
