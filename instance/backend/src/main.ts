/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import dotenv from "dotenv";
import pg from "pg";
import Applications from "./applications.js";
import Authorization from "./authorization.js";
import Events from "./event.js";
import Filesystem from "./filesystem.js";
import { resizeImage } from "./image.js";
import Log from "./log.js";
import RequestManager from "./requestManager.js";
import ResourceManager from "./resourceManager.js";
import { InstanceStatus } from "./types/instanceStatus.js";
import User, { createUser, repairUser } from "./user.js";
import path from "path";
import timeTaken from "./timer.js";
import minimist from "minimist";

dotenv.config();

class Instance {
  flags!: {
    logQueryParameters: boolean;
    logOptionsRequests: boolean;
    isDevMode: boolean;
    port: number;
    postgresPassword: string;
    postgresHostname: string;
    postgresPort: number;
    postgresUser: string;
    postgresDatabase: string;
    cookieSecret: string;
    loadDevelopmentApplications: string[];
    linkDevelopmentApplications: boolean;
    isDocker: boolean;
  };
  arguments: minimist.ParsedArgs;
  log!: Log;
  resourceManager!: ResourceManager;
  requestManager!: RequestManager;
  request!: RequestManager["app"];
  authorization!: Authorization;
  database!: pg.Client;
  filesystem!: Filesystem;
  events!: Events;
  applications!: Applications;
  private status: InstanceStatus = InstanceStatus.UNKNOWN;

  constructor() {
    this.arguments = minimist(process.argv.slice(2));
    this.__internal_init().then(() => {
      return 0;
    });
    return this;
  }

  async __internal_init() {
    // FLAGS FOR DEVELOPMENT FEATURES
    // this.flags = {
    //   logOptionsRequests: process.env.LOG_OPTIONS_REQUESTS === "true" || false,
    //   logQueryParameters: process.env.LOG_QUERY_PARAMETERS === "true" || false,
    //   isDevMode: process.env.YOURDASH_DEVELOPMENT_MODE === "true" || false,
    //   port: Number(process.env.PORT) || 3563,
    //   postgresPassword: process.env.POSTGRES_PASSWORD || "postgres",
    //   postgresPort: Number(process.env.POSTGRES_PORT) || 5432,
    //   postgresUser: process.env.POSTGRES_USER || "postgres",
    //   postgresDatabase: process.env.POSTGRES_DATABASE || process.env.YOURDASH_DEVELOPMENT_MODE ? "yourdash-dev" : "yourdash",
    //   cookieSecret: "this should be a random and unknown string to ensure security",
    // };

    this.flags = {
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
      linkDevelopmentApplications: false,
      isDocker: process.env.IS_DOCKER === "true",
    };

    this.log = new Log(this);

    if (
      this.arguments["dev"] ||
      process.env["YOURDASH_DEVELOPMENT_MODE"] === "true"
    ) {
      this.flags.isDevMode = true;
      this.flags.postgresDatabase = "yourdash_dev";
      this.log.info(
        "startup",
        `Starting instance in ${this.log.addEmphasisToString("DEVELOPER")} mode`,
      );
    } else {
      this.log.info("startup", "Checking for updates...");
      Bun.spawnSync(["git", "pull"], {
        cwd: process.cwd(),
        stdout: "inherit",
        stderr: "inherit",
      });
    }

    if (this.arguments["load-app"]) {
      const applicationPaths = this.arguments["load-app"];
      let appPaths: string[];

      if (typeof applicationPaths === "string") {
        appPaths = [applicationPaths];
      } else {
        appPaths = applicationPaths;
      }

      appPaths = appPaths.map((p) => path.join("../../../", p));

      this.flags.loadDevelopmentApplications = appPaths;
      this.log.info(
        "startup",
        `Starting instance with development application(s): ${this.log.addEmphasisToString(
          `'${appPaths.join("','")}'`,
        )}`,
      );
    }

    if (this.arguments["link-apps"]) {
      this.flags.linkDevelopmentApplications = true;
    }

    const self = this;

    async function prepareDatabase() {
      self.log.info("database", "Attempting to connect to PostgreSQL.");
      try {
        let tempDatabaseClient: pg.Client = new pg.Client({
          password: self.flags.postgresPassword,
          user: self.flags.postgresUser,
          database: "postgres",
          host: self.flags.postgresHostname,
        });

        await tempDatabaseClient.connect();
        self.log.success("database", `Connected to database "postgres"`);

        self.log.info(
          "database",
          `Preparing database "${self.flags.postgresDatabase}"`,
        );

        // create the required database if it doesn't already exist (by default this is 'yourdash')
        try {
          // FIXME: this is very dangerous, but this should be safe as the value can only be 'yourdash' or 'yourdash_dev'
          await tempDatabaseClient.query(
            `CREATE DATABASE "${self.flags.postgresDatabase}"`,
          );
        } catch (e) {}
      } catch (e) {
        self.log.error(
          "database",
          `Failed to setup pre-startup connection to PostgreSQL Database,\nplease ensure that you have PostgreSQL installed, and the default 'postgres' database exists. (${self.log.addEmphasisToString("Will retry in 10s")})`,
        );

        await new Promise((resolve) => setTimeout(resolve, 10_000));

        await prepareDatabase();
      }
    }

    await prepareDatabase();

    try {
      this.log.info(
        "database",
        `Using ${this.log.addEmphasisToString(`'${this.flags.postgresDatabase}'`)} database`,
      );
      this.database = new pg.Client({
        password: this.flags.postgresPassword,
        port: this.flags.postgresPort,
        user: this.flags.postgresUser,
        database: this.flags.postgresDatabase,
        host: this.flags.postgresHostname,
      });
    } catch (e) {
      this.log.error(
        "database",
        "Failed to setup connection to PostgreSQL Database",
      );
    }

    this.log.info("startup", "Connecting to PostgreSQL Database");
    try {
      await this.database.connect();
      this.log.info(
        "startup",
        `Connected to PostgreSQL Database "${this.flags.postgresDatabase}"`,
      );
    } catch (e) {
      this.log.error("database", "Failed to connect to PostgreSQL Database");
      this.log.error(
        "instance",
        "Instance will now quit due to startup failure",
      );
      this.log.error(
        "instance",
        "Please ensure that Postgresql is installed, has the default \"postgres\" database and the values for 'postgresPassword', 'postgresPort' & 'postgresUser' are correct.",
      );
      return false;
    }

    try {
      await this.database.query(`CREATE TABLE IF NOT EXISTS public.users
                                 (
                                     user_id                  serial primary key,
                                     username                 text,
                                     forename                 text,
                                     surname                  text,
                                     bio                      text DEFAULT 'I''m new here, say hello!.',
                                     storage_quota            bigint,
                                     permissions              text[],
                                     session_tokens           text[],
                                     nextcloud_session_tokens text[],
                                     password_hash            text
                                 )`);
      this.log.info(
        "database",
        `Table ${this.log.addEmphasisToString("users")} has been created if it did not already exist.`,
      );
    } catch (e) {
      console.error(e);
      this.log.error(
        "database",
        `Failed to create table ${this.log.addEmphasisToString("users")}!`,
      );
    }

    try {
      await this.database.query(`CREATE TABLE IF NOT EXISTS teams
                                 (
                                     team_id        serial primary key,
                                     teamname       text,
                                     owner_username text,
                                     members        text[],
                                     bio            text
                                 )`);
      this.log.info(
        "database",
        `Table ${this.log.addEmphasisToString("teams")} has been created if it did not already exist.`,
      );
    } catch (e) {
      console.error(e);
      this.log.error(
        "database",
        `Failed to create table ${this.log.addEmphasisToString("teams")}!`,
      );
    }

    try {
      const doesConfigurationExist = await this.database.query(`SELECT EXISTS (
          SELECT
          FROM pg_tables
          WHERE schemaname = 'public' AND tablename = 'configuration'
        );`);

      if (!doesConfigurationExist.rows[0].exists) {
        this.log.info(
          "database",
          `Table ${this.log.addEmphasisToString("configuration")} will be created.`,
        );
        await this.database.query(`CREATE TABLE IF NOT EXISTS configuration
                                   (
                                       config_version              serial primary key,
                                       creation_date               bigint,
                                       administrator_username      text   DEFAULT 'admin',
                                       display_name                text   DEFAULT 'YourDash Instance',
                                       external_url                text   DEFAULT 'http://localhost:3563',
                                       description                 text   DEFAULT 'This is the default instance description. Hey Admin, this can be changed in the system settings!.',
                                       administrator_contact_email text,
                                       default_pinned_applications text[] DEFAULT '{ "uk-ewsgit-dash", "uk-ewsgit-files", "uk-ewsgit-store", "uk-ewsgit-weather" }'
                                   )`);
        this.log.info(
          "database",
          `Table ${this.log.addEmphasisToString(
            "configuration",
          )} has been created as it did not already exist.`,
        );

        await this.database.query(
          "INSERT INTO public.configuration(creation_date) VALUES ($1);",
          [Date.now()],
        );
      }
    } catch (e) {
      console.error(e);
      this.log.error(
        "database",
        `Failed to create table ${this.log.addEmphasisToString("config")}!`,
      );
    }

    this.events = new Events(this);
    instance.events.createEvent("yourdash_user_repair");

    this.authorization = new Authorization(this);
    this.filesystem = new Filesystem(this);
    this.resourceManager = new ResourceManager(this);
    this.requestManager = new RequestManager(this);
    this.request = this.requestManager.app;
    this.applications = new Applications(this);

    this.startup()
      .then((status: boolean) => {
        if (status) {
          this.setStatus(InstanceStatus.OK);
        } else {
          process.exit(1);
        }

        return 0;
      })
      .catch((err) => {
        this.log.error("startup", err);
        this.setStatus(InstanceStatus.NON_FUNCTIONAL);
      });

    return this;
  }

  async startup(): Promise<boolean> {
    await timeTaken(
      "filesystem_startup",
      async () => await this.filesystem.__internal_startup(),
    );
    await timeTaken(
      "request_manager_startup",
      async () => await this.requestManager.__internal_startup(),
    );
    await timeTaken(
      "resource_manager_startup",
      async () => await this.resourceManager.__internal_startup(),
    );
    try {
      await this.database
        .query(`CREATE TABLE IF NOT EXISTS public.panel_configuration
                                 (
                                     config_version      serial primary key,
                                     username            text NOT NULL,
                                     pinned_applications text[] DEFAULT '{ "uk-ewsgit-dash", "uk-ewsgit-files", "uk-ewsgit-store", "uk-ewsgit-weather" }',
                                     widgets             text[] DEFAULT '{ "InstanceLogo", "ApplicationLauncher", "Separator", "QuickShortcuts", "LocalhostIndicator", "UserProfile" }',
                                     side                text   DEFAULT 'left',
                                     size                text   DEFAULT 'medium'
                                 )`);
      this.log.info(
        "database",
        `Table ${this.log.addEmphasisToString(
          "panel_configuration",
        )} has been created if it did not already exist.`,
      );
    } catch (e) {
      console.error(e);
      this.log.error(
        "database",
        `Failed to create table ${this.log.addEmphasisToString("panel_configuration")}!`,
      );
    }

    await this.__internal_generateInstanceLogos();
    this.log.info("startup", "YourDash RequestManager Startup Complete!");

    this.log.info("application_manager", "Loading applications...");

    const applications = await this.applications.getInstalledApplications();
    if (applications.length !== 0) {
      this.log.info(
        "application_manager",
        `loading applications: '${applications.join("', '")}'`,
      );

      let loadedApplications = [];

      for (const app of applications) {
        loadedApplications.push(await this.applications.loadApplication(app));
        this.log.info(
          "application_manager",
          `Application ${app} loaded successfully!`,
        );
      }

      if (!loadedApplications.find((a) => a === null)) {
        this.log.info("application_manager", `All applications have loaded!`);
      } else {
        this.log.error(
          "application_manager",
          `One or more applications failed to load!`,
        );
      }
    } else {
      this.log.warning("application_manager", `No applications are installed!`);
      this.log.warning(
        "application_manager",
        `No applications have been loaded, expect problems!`,
      );
    }

    const adminUser = new User("admin");

    if (!(await adminUser.doesExist())) {
      const adminUser = await createUser("admin");
      await adminUser.setForename("Admin");
      await adminUser.setSurname("Istrator");
      await this.authorization.setUserPassword("admin", "password");
    }

    const users = await this.database.query(
      "SELECT username FROM public.users",
    );

    for (const user of users.rows) {
      await repairUser(user.username);
    }

    await this.requestManager.__internal_beginListening();
    this.log.info("startup", "YourDash Instance Startup Complete");

    return true;
  }

  getStatus(): InstanceStatus {
    return this.status;
  }

  setStatus(status: InstanceStatus): this {
    this.status = status;
    this.log.info(
      "instance",
      `Instance status has been set to ${this.log.addEmphasisToString(
        `'INSTANCE_STATUS.${InstanceStatus[status]}'`,
      )}`,
    );

    return this;
  }

  async __internal_generateInstanceLogos() {
    this.log.info("instance", `Generating instanceLogos.`);
    let instanceLogoPath = path.join(
      this.filesystem.commonPaths.SystemDirectory(),
      "instanceLogo.png",
    );

    const requiredDimensions = [32, 40, 64, 128, 256, 512, 768, 1024];

    for (const dimension of requiredDimensions) {
      if (
        await this.filesystem.doesPathExist(
          path.join(
            path.join(
              this.filesystem.commonPaths.SystemDirectory(),
              `instanceLogo${dimension}.webp`,
            ),
          ),
        )
      ) {
        this.log.info(
          "instance",
          `${this.log.addEmphasisToString("instanceLogo")} @ ${this.log.addEmphasisToString(
            dimension.toString(),
          )} already exists. Not generating new logo`,
        );
        continue;
      }

      await resizeImage(
        instanceLogoPath,
        dimension,
        dimension,
        path.join(
          path.join(
            this.filesystem.commonPaths.SystemDirectory(),
            `instanceLogo${dimension}.webp`,
          ),
        ),
        "webp",
      );

      this.log.info(
        "instance",
        `Generated ${this.log.addEmphasisToString("instanceLogo")} @ ${this.log.addEmphasisToString(
          dimension.toString(),
        )}.`,
      );
    }
  }
}

export { Instance };

const instance = new Instance();

export default instance;
