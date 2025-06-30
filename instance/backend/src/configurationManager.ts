import type { Instance } from "./instance.ts";
import path from "path";
import { promises as fs } from "node:fs";
import {
  YourDashFeatureFlags,
  type YourDashInstanceConfiguration,
} from "./types/configuration.ts";

export default class ConfigurationManager {
  instance: Instance;
  config: YourDashInstanceConfiguration;

  constructor(instance: Instance) {
    this.instance = instance;

    this.config = {
      logOptionsRequests: false,
      logQueryParameters: false,
      isDevMode: true, // TODO: change this to false when v1.0.0 is reached
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
      featureFlags: [],
    };

    return this;
  }

  async readFromDisk() {
    const configurationFilePath = path.join(
      this.instance.filesystem.commonPaths.SystemDirectory(),
      "config.json",
    );

    if (
      !(await this.instance.filesystem.doesPathExist(configurationFilePath))
    ) {
      // the configuration file does not exist, generate one
      await fs.writeFile(configurationFilePath, JSON.stringify(this.config));

      // return as there is no point reading a file which was just written
      return this;
    }

    const configurationFile = JSON.parse(
      (await fs.readFile(configurationFilePath)).toString(),
    );

    // replace the configuration keys with those which are in the file
    for (const [property, value] of Object.entries(configurationFile)) {
      // @ts-ignore
      this.config[property] = value;
    }

    return this;
  }

  setValue(propertyId: keyof YourDashInstanceConfiguration, value: any) {
    // @ts-ignore
    this.config[propertyId] = value;
    return this;
  }

  hasFeature(featureFlag: YourDashFeatureFlags) {
    return this.config.featureFlags.includes(featureFlag);
  }

  _internal_announceFeatures() {
    if (this.config.featureFlags.length === 0) {
      this.instance.log.info(
        "configuration_manager",
        "No feature flags are enabled",
        this.config.featureFlags.join(", "),
      );
    } else {
      this.instance.log.info(
        "configuration_manager",
        "The following feature flags are enabled: ",
        this.config.featureFlags
          .map((flag) => this.instance.log.addEmphasisToString(flag))
          .join(", "),
      );
    }
  }
}
