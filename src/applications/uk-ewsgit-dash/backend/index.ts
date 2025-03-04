/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { YourDashApplication } from "@yourdash/backend/src/applications.js";

export default class Application extends YourDashApplication {
  constructor() {
    super({
      version: {
        major: 1,
        minor: 0,
      },
      configVersion: 1,
      credits: {
        authors: [{ name: "Ewsgit", site: "https://ewsgit.uk" }],
      },
      frontend: {
        entryPoint: "../web/index.tsx",
      },
      displayName: "Dash",
      description: "The YourDash dashboard application.",
      id: "uk-ewsgit-dash",
    });

    return this;
  }

  public onLoad(): this {
    return super.onLoad();
  }
}
