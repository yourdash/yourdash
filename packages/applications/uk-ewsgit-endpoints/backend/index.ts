import { YourDashApplication } from "@yourdash/backend/src/applications.js";
import instance from "@yourdash/backend/src/main.js";
/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

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
      displayName: "Endpoints",
      description: "The YourDash Endpoints devtool.",
      id: "uk-ewsgit-endpoints",
    });

    return this;
  }

  onLoad(): this {
    instance.request.get("/uk-ewsgit-endpoints/endpoints", async (req, res) => {
      return instance.requestManager.app.printRoutes();
    });

    return this;
  }
}
