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
      // FIXME: actually use a secure string not an amalgamation of a number
      cookieSecret: crypto.getRandomValues(new Uint32Array(128)).join(""),
      loadDevelopmentApplications: [],
      featureFlags: [...process.env.IS_DOCKER !== "true" ? [YourDashFeatureFlags.SlashCommands] : []],
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

  async writeToDisk() {
    const configurationFilePath = path.join(
      this.instance.filesystem.commonPaths.SystemDirectory(),
      "config.json",
    );

    // the configuration file does not exist, generate one
    await fs.writeFile(configurationFilePath, JSON.stringify(this.config));
    return this;
  }

  async setValue(propertyId: keyof YourDashInstanceConfiguration, value: any) {
    // @ts-ignore
    this.config[propertyId] = value;

    await this.writeToDisk();

    return this;
  }

  hasFeature(featureFlag: YourDashFeatureFlags) {
    return this.config.featureFlags.includes(featureFlag);
  }

  getAllEnabledFeatures() {
    return this.config.featureFlags;
  }

  getAllFeatures() {
    return YourDashFeatureFlags;
  }

  async enableFeature(feature: YourDashFeatureFlags) {
    if (!this.config.featureFlags.includes(feature)) {
      this.config.featureFlags.push(feature);
      this.instance.log.info("feature_flags", `Enabled feature '${feature}'`);
    } else {
      this.instance.log.info(
        "feature_flags",
        `Cannot enable feature '${feature}' as it was already enabled`,
      );
    }

    await this.writeToDisk();

    return this;
  }

  async disableFeature(feature: YourDashFeatureFlags) {
    if (this.config.featureFlags.includes(feature)) {
      this.config.featureFlags = this.config.featureFlags.filter(
        (flag) => flag !== feature,
      );
      this.instance.log.info("feature_flags", `Disabled feature '${feature}'`);
    } else {
      this.instance.log.info(
        "feature_flags",
        `Cannot disable feature '${feature}' as it was not already enabled`,
      );
    }

    await this.writeToDisk();

    return this;
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
        "The following feature flags are enabled:",
        this.config.featureFlags
          .map((flag) => this.instance.log.addEmphasisToString(flag))
          .join(", "),
      );
    }
  }
}
