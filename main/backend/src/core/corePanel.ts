/*
 * Copyright ©2024 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import path from "path";
import YourDashApplication from "../lib/applications.js";
import { AUTHENTICATED_IMAGE_TYPE } from "./coreImage.js";
import YourDashPanel from "./helpers/panel.js";
import { Core } from "./core.js";

export default class CorePanel {
  private core: Core;

  constructor(core: Core) {
    this.core = core;
  }

  __internal__loadEndpoints() {
    this.core.request.get("/core/panel/applications", async (req, res) => {
      res.set("Cache-Control", "no-store");
      const { username, sessionid } = req.headers;

      return res.json(
        (
          await Promise.all(
            (this.core.globalDb.get<string[]>("core:installedApplications") || []).map(
              async (applicationName: string) => {
                const unreadApplication = new YourDashApplication(applicationName);

                if (!(await unreadApplication.exists())) return undefined;

                const application = await unreadApplication.read();

                const RESIZED_ICON_PATH = path.join("cache/applications/icons", `${application.getName()}`, "128.png");

                if (!(await this.core.fs.doesExist(RESIZED_ICON_PATH))) {
                  this.core.log.info("core:panel", `Generating 128x128 icon for ${application.getName()}`);

                  await this.core.fs.createDirectory(path.dirname(RESIZED_ICON_PATH));

                  const resizedIconPath = await this.core.image.resizeTo(
                    (await this.core.fs.getFile(await application.getIconPath())).path,
                    128,
                    128,
                    "webp",
                    true,
                  );

                  await this.core.fs.copy(resizedIconPath, RESIZED_ICON_PATH);
                }

                return {
                  name: application.getName(),
                  displayName: application.getDisplayName(),
                  description: application.getDescription(),
                  icon: this.core.image.createAuthenticatedImage(
                    username,
                    sessionid,
                    AUTHENTICATED_IMAGE_TYPE.FILE,
                    RESIZED_ICON_PATH,
                  ),
                };
              },
            ),
          )
        ).filter((x) => {
          return x !== undefined;
        }),
      );
    });

    this.core.request.get("/core/panel/quick-shortcuts", async (req, res) => {
      res.set("Cache-Control", "no-store");

      const { username, sessionid } = req.headers;

      const panel = new YourDashPanel(username);

      return res.json(
        await Promise.all(
          (await panel.getQuickShortcuts()).map(async (shortcut) => {
            const application = await new YourDashApplication(shortcut).read();

            const RESIZED_ICON_PATH = path.join("cache/applications/icons", `${application.getName()}`, "64.png");

            if (!(await this.core.fs.doesExist(RESIZED_ICON_PATH))) {
              this.core.log.info("core:panel", `Generating 64x64 icon for ${application.getName()}`);

              await this.core.fs.createDirectory(path.dirname(RESIZED_ICON_PATH));

              const resizedIconPath = await this.core.image.resizeTo(
                (await this.core.fs.getFile(await application.getIconPath())).path,
                64,
                64,
                "webp",
                true,
              );

              await this.core.fs.copy(resizedIconPath, RESIZED_ICON_PATH);
            }

            return {
              name: shortcut,
              icon: this.core.image.createAuthenticatedImage(
                username,
                sessionid,
                AUTHENTICATED_IMAGE_TYPE.FILE,
                RESIZED_ICON_PATH,
              ),
            };
          }),
        ),
      );
    });

    this.core.request.delete("/core/panel/quick-shortcuts/:ind", async (req, res) => {
      res.set("Cache-Control", "");

      const { ind } = req.params;
      const { username } = req.headers;

      const panel = new YourDashPanel(username);
      try {
        await panel.removeQuickShortcut(parseInt(ind, 10));
      } catch (e) {
        return res.json({ success: false, error: "Unable to remove shortcut" });
      }

      return res.json({ success: true });
    });

    this.core.request.post("/core/panel/quick-shortcuts/create", async (req, res) => {
      res.set("Cache-Control", "no-store");

      const { username } = req.headers;
      const { name } = req.body as { name: string };

      const panel = new YourDashPanel(username);

      await panel.createQuickShortcut(name);

      return res.json({ success: true });
    });

    this.core.request.get("/core/panel/position", async (req, res) => {
      res.set("Cache-Control", "no-store");

      const { username } = req.headers as {
        username: string;
      };

      const panel = new YourDashPanel(username);

      return res.json({ position: await panel.getPanelPosition() });
    });

    this.core.request.get("/core/panel/launcher-type", async (req, res) => {
      res.set("Cache-Control", "no-store");
      const { username } = req.headers;

      const panel = new YourDashPanel(username);

      return res.json({ launcher: await panel.getLauncherType() });
    });

    this.core.request.get("/core/panel/logo", async (req, res) => {
      const { username, sessionid } = req.headers;

      return res.json({
        small: this.core.image.createAuthenticatedImage(
          username,
          sessionid,
          AUTHENTICATED_IMAGE_TYPE.FILE,
          path.join("./logo_panel_small.avif"),
        ),
        medium: this.core.image.createAuthenticatedImage(
          username,
          sessionid,
          AUTHENTICATED_IMAGE_TYPE.FILE,
          path.join("./logo_panel_medium.avif"),
        ),
        large: this.core.image.createAuthenticatedImage(
          username,
          sessionid,
          AUTHENTICATED_IMAGE_TYPE.FILE,
          path.join("./logo_panel_large.avif"),
        ),
      });
    });

    this.core.request.get("/core/panel/logo", async (req, res) => {
      const { username, sessionid } = req.headers;

      return res.json({
        small: this.core.image.createAuthenticatedImage(
          username,
          sessionid,
          AUTHENTICATED_IMAGE_TYPE.FILE,
          path.join(this.core.fs.ROOT_PATH, "./logo_panel_small.avif"),
        ),
        medium: this.core.image.createAuthenticatedImage(
          username,
          sessionid,
          AUTHENTICATED_IMAGE_TYPE.FILE,
          path.join(this.core.fs.ROOT_PATH, "./logo_panel_medium.avif"),
        ),
        large: this.core.image.createAuthenticatedImage(
          username,
          sessionid,
          AUTHENTICATED_IMAGE_TYPE.FILE,
          path.join(this.core.fs.ROOT_PATH, "./logo_panel_large.avif"),
        ),
      });
    });
  }
}
