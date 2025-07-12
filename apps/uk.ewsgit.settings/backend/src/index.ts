/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { YourDashApplication } from "@yourdash/backend/src/applications.js";
import { Instance } from "@yourdash/backend/src/instance.js";
import { z } from "zod";

export default class Application extends YourDashApplication {
  settings: {
    category: string;
    defaultValue: string | number | boolean | string[];
    key: string;
  }[] = [];

  constructor(instance: Instance) {
    super(
      {
        version: {
          major: 1,
          minor: 0,
        },
        configVersion: 1,
        credits: {
          authors: [{ name: "Ewsgit", site: "https://ewsgit.uk" }],
        },
        frontend: true,
        displayName: "Settings",
        description: "The YourDash settings application.",
        id: "uk.ewsgit.settings",
      },
      instance,
    );

    instance.database
      .query(`CREATE TABLE IF NOT EXISTS uk_ewsgit_settings_user (
        setting_key text,
        username    text default '',
        value       text default ''
      );`);

    return this;
  }

  public async onLoad(): Promise<this> {
    await super.onLoad();

    return this;
  }
}
