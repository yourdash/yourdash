import type YourDashInstanceConfiguration from "./types/configuration.ts";
import type { Instance } from "@yourdash/backend";
import path from "path";
import * as fs from "node:fs";

export default class ConfigurationManager {
  instance: Instance;
  config: YourDashInstanceConfiguration;

  constructor(instance: Instance) {
    this.instance = instance;

    this.config = {
      logOptionsRequests: false,
      logQueryParameters: false,
      isDevMode: false,
      port: 3563,
      postgresHostname:
        process.env.IS_DOCKER === "true"
          ? "yourdash_postgres.localhost"
          : "localhost",
      postgresPassword: "postgres",
      postgresPort: 5432,
      postgresUser: "postgres",
      postgresDatabase: "yourdash",
      // FIXME: actually use a secure string
      cookieSecret:
        "this should be a random and unknown string to ensure security",
      loadDevelopmentApplications: [],
    };

    return this;
  }

  async readFromDisk() {
    const configurationFilePath = path.join(
      this.instance.filesystem.commonPaths.SystemDirectory(),
      "config.json",
    );

    const configurationFile = JSON.parse(
      (await fs.promises.readFile(configurationFilePath)).toString(),
    );

    for (const [property, value] of Object.entries(configurationFile)) {
      // @ts-ignore
      this.config[property] = value;
    }

    return this;
  }

  setValue(propertyId: string, value: any) {
    return this;
  }
}
