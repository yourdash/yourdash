/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import instance from "@yourdash/backend";
import { YourDashApplication } from "@yourdash/backend/src/applications.js";

export default class Application extends YourDashApplication {
  settings: { category: string, defaultValue: string | number | boolean | string[], key: string }[] = [];

  constructor() {
    super({
            version: {
              major: 1, minor: 0
            },
            configVersion: 1,
            credits: {
              authors: [ { name: "Ewsgit", site: "https://ewsgit.uk" } ]
            },
            frontend: true,
            displayName: "Settings",
            description: "The YourDash settings application.",
            id: "uk-ewsgit-settings"
          });


    instance.database.query(`CREATE TABLE IF NOT EXISTS uk_ewsgit_settings_user
                             (
                                 setting_key text,
                                 username    text default '',
                                 value       text default ''
                             );`);

    return this;
  }

  public onLoad(): this {
    return super.onLoad();
  }
}
