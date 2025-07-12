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
import User from "./userManager/user.js";
import path from "path";
import minimist from "minimist";
import ConfigurationManager from "./configurationManager.ts";
import CommandManager from "./commandManager/commandManager.ts";
import UserManager from "./userManager/userManager.ts";

dotenv.config();

class Instance {
  flags!: {
    isDocker: boolean;
  };
  commandManager!: CommandManager;
  configurationManager!: ConfigurationManager;
  arguments: minimist.ParsedArgs;
  log!: Log;
  resourceManager!: ResourceManager;
  requestManager!: RequestManager;
  authorization!: Authorization;
  database!: pg.Client;
  filesystem!: Filesystem;
  events!: Events;
  applications!: Applications;
  userManager!: UserManager;
  private status: InstanceStatus = InstanceStatus.UNKNOWN;

  constructor() {
    this.arguments = minimist(process.argv.slice(2));

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

    // TODO: work through errors caused by the above

    this.flags = {
      isDocker: process.env.IS_DOCKER === "true",
    };

    this.log = new Log(this);
    this.filesystem = new Filesystem(this);
    await this.filesystem.__internal_startup();
    this.configurationManager = new ConfigurationManager(this);
    await this.configurationManager.readFromDisk();
    this.configurationManager._internal_announceFeatures();
    this.commandManager = new CommandManager(this);

    if (this.configurationManager.config.isDevMode) {
      this.log.info(
        "startup",
        `The server is running in ${this.log.addEmphasisToString("DEVELOPER MODE")}! Hiya Ewsgit 👋 !` /*
         Note: don't remove the space after the emoji,
         for some unknown reason the exclamation mark
         will not be printed without the space's presence.
         */,
      );
    } else {
      this.log.info("startup", "Checking for updates...");
      let proc = Bun.spawnSync(["git", "pull"], {
        cwd: process.cwd(),
        stdout: "pipe",
        stderr: "pipe",
      });

      // Note: here we have to remove the last two characters from the strings as they are newlines and break formatting

      this.log.info(
        "startup_automatic_updater",
        proc.stdout.toString().slice(0, -2),
      );

      if (proc.stdout.toString().slice(0, -2) !== "Already up to date") {
        // The YourDash instance process should be automatically restarted by systemd or another service manager.
        // This will only occur if the instance is set up correctly, in case of an issue with this intended behaviour not
        // occurring please assume that the user has not followed the setup instructions
        process.exit(0);
      }

      if (proc.stderr.toString())
        this.log.error(
          "startup_automatic_updater",
          proc.stderr.toString().slice(0, -2),
        );
    }

    // if (this.arguments["load-app"]) {
    //   const applicationPaths = this.arguments["load-app"];
    //   let appPaths: string[];
    //
    //   if (typeof applicationPaths === "string") {
    //     appPaths = [applicationPaths];
    //   } else {
    //     appPaths = applicationPaths;
    //   }
    //
    //   appPaths = appPaths.map((p) => path.join("../../../", p));
    //
    //   this.flags.loadDevelopmentApplications = appPaths;
    //   this.log.info(
    //     "startup",
    //     `Starting instance with development application(s): ${this.log.addEmphasisToString(
    //       `'${appPaths.join("','")}'`,
    //     )}`,
    //   );
    // }
    //
    // if (this.arguments["link-apps"]) {
    //   this.flags.linkDevelopmentApplications = true;
    // }

    const self = this;

    async function prepareDatabase() {
      self.log.info("database", "Attempting to connect to PostgreSQL.");
      try {
        let tempDatabaseClient: pg.Client = new pg.Client({
          password: self.configurationManager.config.postgresPassword,
          user: self.configurationManager.config.postgresUser,
          database: "postgres",
          host: self.configurationManager.config.postgresHostname,
        });

        await tempDatabaseClient.connect();
        self.log.success("database", `Connected to database "postgres"`);

        self.log.info(
          "database",
          `Preparing database "${self.configurationManager.config.postgresDatabase}"`,
        );

        // create the required database if it doesn't already exist (by default this is 'yourdash')
        try {
          // FIXME: this is a possible vulnerability! - @Ewsgit
          await tempDatabaseClient.query(
            `CREATE DATABASE "${self.configurationManager.config.postgresDatabase}"`,
          );
        } catch (e) {}
      } catch (e) {
        self.log.error(
          "database",
          `Failed to setup pre-startup connection to PostgreSQL Database, please ensure that you have PostgreSQL installed, and the default 'postgres' database exists. (${self.log.addEmphasisToString("Will retry in 10s")})`,
        );

        await new Promise((resolve) => setTimeout(resolve, 10_000));

        await prepareDatabase();
      }
    }

    await prepareDatabase();

    try {
      this.log.info(
        "database",
        `Using ${this.log.addEmphasisToString(`'${this.configurationManager.config.postgresDatabase}'`)} database`,
      );
      this.database = new pg.Client({
        password: this.configurationManager.config.postgresPassword,
        port: this.configurationManager.config.postgresPort,
        user: this.configurationManager.config.postgresUser,
        database: this.configurationManager.config.postgresDatabase,
        host: this.configurationManager.config.postgresHostname,
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
      this.log.success(
        "startup",
        `Connected to PostgreSQL Database "${this.configurationManager.config.postgresDatabase}"`,
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
          SELECT *
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
                                       default_pinned_applications text[] DEFAULT '{ "uk.ewsgit.dash", "uk.ewsgit.files", "uk.ewsgit.store", "uk.ewsgit.weather" }'
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
    this.events.createEvent("yourdash_user_repair");
    this.userManager = new UserManager(this);
    this.authorization = new Authorization(this);
    this.resourceManager = new ResourceManager(this);
    this.requestManager = new RequestManager(this);
    this.applications = new Applications(this);

    await this.requestManager.__internal_startup();
    await this.resourceManager.__internal_startup();

    try {
      await this.database
        .query(`CREATE TABLE IF NOT EXISTS public.panel_configuration
                                 (
                                     config_version      serial primary key,
                                     username            text NOT NULL,
                                     pinned_applications text[] DEFAULT '{ "uk.ewsgit.dash", "uk.ewsgit.files", "uk.ewsgit.store", "uk.ewsgit.weather" }',
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

    this.log.info("application_manager", "Loading applications...");

    const applications = await this.applications.getInstalledApplications();
    if (applications.length !== 0) {
      this.log.info(
        "application_manager",
        `loading applications: '${applications.map((a) => this.log.addEmphasisToString(a)).join("', '")}'`,
      );

      let loadedApplications = [];

      for (const app of applications) {
        loadedApplications.push(await this.applications.loadApplication(app));
        this.log.success(
          "application_manager",
          `Application ${this.log.addEmphasisToString(app)} loaded successfully!`,
        );
      }

      if (!loadedApplications.find((a) => a === null)) {
        this.log.success(
          "application_manager",
          `All applications have loaded!`,
        );
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
      const adminUser = await this.userManager.createUser("admin");
      await adminUser.setForename("Admin");
      await adminUser.setSurname("Istrator");
      await this.authorization.setUserPassword("admin", "password");
    }

    const users = await this.database.query(
      "SELECT username FROM public.users",
    );

    for (const user of users.rows) {
      await this.userManager.repairUser(user.username);
    }

    await this.requestManager.__internal_beginListening();
    this.log.info("startup", "YourDash Instance Startup Complete");
    this.setStatus(InstanceStatus.OK);

    return this;
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
