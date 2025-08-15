import type { Instance } from "../instance.ts";
import User from "./user.ts";
import { promises as fs } from "fs";
import path from "path";
import { YourDashInstanceEvents } from "../event.ts";
import * as bun from "bun";

export default class UserManager {
  instance: Instance;

  constructor(instance: Instance) {
    this.instance = instance;

    return this;
  }

  async getUser(username: string) {
    const user = new User(username);

    if (await user.doesExist()) {
      return user;
    }

    return undefined;
  }

  async createUser(username: string) {
    this.instance.log.info("user", `Creating user ${username}`);
    const user = new User(username);

    const userPath =
      this.instance.filesystem.commonPaths.HomeDirectory(username);

    try {
      await fs.mkdir(userPath, { recursive: true });
    } catch (e) {
      this.instance.log.error(
        "user",
        `Unable to create user directory for ${username}!`,
      );
    }

    await this.instance.database`INSERT INTO users ${bun.sql({ username, forename:"New", surname: "User", bio: "Hello, I am using YourDash! 👋" })};`

    await this.instance.database`INSERT INTO panel_configuration (username) VALUES (${username})`

    try {
      await this.repairUser(username);
    } catch (e) {
      this.instance.log.error("user", `Failed to repair user ${username}!`);
    }

    return user;
  }

  async repairUser(username: string) {
    this.instance.log.info(
      "user",
      `Repairing user ${this.instance.log.addEmphasisToString(username)}`,
    );

    const userPath =
      this.instance.filesystem.commonPaths.HomeDirectory(username);

    if (!(await this.instance.filesystem.doesPathExist(userPath))) {
      try {
        await fs.mkdir(userPath, { recursive: true });
      } catch (e) {
        this.instance.log.error(
          `user`,
          `Unable to create directory ${this.instance.log.addEmphasisToString(userPath)}`,
        );
      }
    }

    const userDocumentsPath =
      this.instance.filesystem.commonPaths.UserDocumentsDirectory(username);

    if (!(await this.instance.filesystem.doesPathExist(userDocumentsPath))) {
      try {
        await fs.mkdir(userDocumentsPath, { recursive: true });
      } catch (e) {
        this.instance.log.error(
          `user`,
          `Unable to create directory ${this.instance.log.addEmphasisToString(userDocumentsPath)}`,
        );
      }
    }

    const userDownloadsPath =
      this.instance.filesystem.commonPaths.UserDownloadsDirectory(username);

    if (!(await this.instance.filesystem.doesPathExist(userDownloadsPath))) {
      try {
        await fs.mkdir(userDownloadsPath, { recursive: true });
      } catch (e) {
        this.instance.log.error(
          `user`,
          `Unable to create directory ${this.instance.log.addEmphasisToString(userDownloadsPath)}`,
        );
      }
    }

    const userPicturesPath =
      this.instance.filesystem.commonPaths.UserPicturesDirectory(username);

    if (!(await this.instance.filesystem.doesPathExist(userPicturesPath))) {
      try {
        await fs.mkdir(userPicturesPath, { recursive: true });
      } catch (e) {
        this.instance.log.error(
          `user`,
          `Unable to create directory ${this.instance.log.addEmphasisToString(userPicturesPath)}`,
        );
      }
    }

    const userVideosPath =
      this.instance.filesystem.commonPaths.UserVideosDirectory(username);

    if (!(await this.instance.filesystem.doesPathExist(userVideosPath))) {
      try {
        await fs.mkdir(userVideosPath, { recursive: true });
      } catch (e) {
        this.instance.log.error(
          `user`,
          `Unable to create directory ${this.instance.log.addEmphasisToString(userVideosPath)}`,
        );
      }
    }

    const userSystemPath =
      this.instance.filesystem.commonPaths.UserSystemDirectory(username);

    if (!(await this.instance.filesystem.doesPathExist(userSystemPath))) {
      try {
        await fs.mkdir(userSystemPath, { recursive: true });
      } catch (e) {
        this.instance.log.error(
          `user`,
          `Unable to create directory ${this.instance.log.addEmphasisToString(userSystemPath)}`,
        );
      }
    }

    const userAvatarPath = path.join(userSystemPath, `avatar.png`);

    if (!(await this.instance.filesystem.doesPathExist(userAvatarPath))) {
      try {
        await fs.cp(
          path.join(
            this.instance.filesystem.commonPaths.DefaultsDirectory(),
            "userAvatar.png",
          ),
          userAvatarPath,
        );
        const user = new User(username);
        try {
          await user.__internal_generateAvatars();
        } catch (e) {
          this.instance.log.error(
            `user`,
            `Failed to generate user avatars for ${this.instance.log.addEmphasisToString(username)}`,
          );
        }
      } catch (e) {
        this.instance.log.error(
          `user`,
          `Unable to copy default user avatar ${path.join(this.instance.filesystem.commonPaths.DefaultsDirectory(), "userAvatar.png")} to ${userAvatarPath}`,
        );
      }
    }

    this.instance.events.triggerEvent(
      YourDashInstanceEvents.VerifyUser,
      username,
    );
  }

  async removeUser(username: string) {
    let userHomeDirectory =
      this.instance.filesystem.commonPaths.HomeDirectory(username);

    await fs.rm(userHomeDirectory, { recursive: true, force: true });

    await this.instance.database`DELETE FROM public.users WHERE username = ${username}`
    await this.instance.database`DELETE FROM public.panel_configuration WHERE username = ${username}`

    this.instance.events.triggerEvent("yourdash_user_remove", username);
    return this;
  }
}
