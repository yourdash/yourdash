/*
 * Copyright ©2024 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import YourDashUser from "@yourdash/backend/src/core/user/index.js";
import { YOURDASH_USER_PERMISSIONS } from "@yourdash/backend/src/core/user/userPermissions.js";
import path from "path";
import BackendModule, { YourDashModuleArguments } from "@yourdash/backend/src/core/moduleManager/backendModule.js";
import coreApi from "@yourdash/backend/src/core/coreApi.js";

export default class GlobalDbModule extends BackendModule {
  constructor(args: YourDashModuleArguments) {
    super(args);
    this.API.request.get("/app/global_db/db", async (req, res) => {
      const { username } = req.headers as {
        username: string;
      };

      const user = new YourDashUser(username);

      if (await user.hasPermission(YOURDASH_USER_PERMISSIONS.Administrator)) {
        return res.json({
          db: coreApi.globalDb.keys,
        });
      }

      return res.json({
        error: true,
      });
    });

    this.API.request.post("/app/global_db/db", async (req, res) => {
      const { username } = req.headers as {
        username: string;
      };

      const keys = req.body;

      const user = new YourDashUser(username);

      if (await user.hasPermission(YOURDASH_USER_PERMISSIONS.Administrator)) {
        coreApi.globalDb.merge(keys);

        return res.json({
          success: true,
        });
      }

      return res.json({ error: true });
    });

    this.API.request.post("/app/global_db/db/force-write", async (req, res) => {
      const { username } = req.headers as {
        username: string;
      };

      const keys = req.body;

      const user = new YourDashUser(username);

      if (await user.hasPermission(YOURDASH_USER_PERMISSIONS.Administrator)) {
        coreApi.globalDb.merge(keys);
        await coreApi.globalDb.writeToDisk(path.resolve(process.cwd(), "./fs/globalDatabase.json"));

        return res.json({
          success: true,
        });
      }

      return res.json({ error: true });
    });
  }
}
