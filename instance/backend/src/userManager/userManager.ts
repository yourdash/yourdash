import type { Instance } from "../instance.ts";
import User from "./user.ts";
import { instance } from "@yourdash/backend";
import { promises as fs } from "fs";
import path from "path";

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
    instance.log.info("user", `Creating user ${username}`);
    const user = new User(username);

    const userPath = instance.filesystem.commonPaths.HomeDirectory(username);

    try {
      await fs.mkdir(userPath, { recursive: true });
    } catch (e) {
      instance.log.error(
        "user",
        `Unable to create user directory for ${username}!`,
      );
    }

    await instance.database.query(
      "INSERT INTO users (username, forename, surname, bio) VALUES ($1, $2, $3, $4)",
      [username, "New", "User", "Hello, I am using YourDash! 👋"],
    );

    await instance.database.query(
      "INSERT INTO panel_configuration (username) VALUES ($1)",
      [username],
    );

    try {
      await this.repairUser(username);
    } catch (e) {
      instance.log.error("user", `Failed to repair user ${username}!`);
    }

    return user;
  }

  async repairUser(username: string) {
    instance.log.info(
      "user",
      `Repairing user ${instance.log.addEmphasisToString(username)}`,
    );

    const userPath = instance.filesystem.commonPaths.HomeDirectory(username);

    if (!(await instance.filesystem.doesPathExist(userPath))) {
      try {
        await fs.mkdir(userPath, { recursive: true });
      } catch (e) {
        instance.log.error(
          `user`,
          `Unable to create directory ${instance.log.addEmphasisToString(userPath)}`,
        );
      }
    }

    const userDocumentsPath =
      instance.filesystem.commonPaths.UserDocumentsDirectory(username);

    if (!(await instance.filesystem.doesPathExist(userDocumentsPath))) {
      try {
        await fs.mkdir(userDocumentsPath, { recursive: true });
      } catch (e) {
        instance.log.error(
          `user`,
          `Unable to create directory ${instance.log.addEmphasisToString(userDocumentsPath)}`,
        );
      }
    }

    const userDownloadsPath =
      instance.filesystem.commonPaths.UserDownloadsDirectory(username);

    if (!(await instance.filesystem.doesPathExist(userDownloadsPath))) {
      try {
        await fs.mkdir(userDownloadsPath, { recursive: true });
      } catch (e) {
        instance.log.error(
          `user`,
          `Unable to create directory ${instance.log.addEmphasisToString(userDownloadsPath)}`,
        );
      }
    }

    const userPicturesPath =
      instance.filesystem.commonPaths.UserPicturesDirectory(username);

    if (!(await instance.filesystem.doesPathExist(userPicturesPath))) {
      try {
        await fs.mkdir(userPicturesPath, { recursive: true });
      } catch (e) {
        instance.log.error(
          `user`,
          `Unable to create directory ${instance.log.addEmphasisToString(userPicturesPath)}`,
        );
      }
    }

    const userVideosPath =
      instance.filesystem.commonPaths.UserVideosDirectory(username);

    if (!(await instance.filesystem.doesPathExist(userVideosPath))) {
      try {
        await fs.mkdir(userVideosPath, { recursive: true });
      } catch (e) {
        instance.log.error(
          `user`,
          `Unable to create directory ${instance.log.addEmphasisToString(userVideosPath)}`,
        );
      }
    }

    const userSystemPath =
      instance.filesystem.commonPaths.UserSystemDirectory(username);

    if (!(await instance.filesystem.doesPathExist(userSystemPath))) {
      try {
        await fs.mkdir(userSystemPath, { recursive: true });
      } catch (e) {
        instance.log.error(
          `user`,
          `Unable to create directory ${instance.log.addEmphasisToString(userSystemPath)}`,
        );
      }
    }

    const userAvatarPath = path.join(userSystemPath, `avatar.png`);

    if (!(await instance.filesystem.doesPathExist(userAvatarPath))) {
      try {
        await fs.cp(
          path.join(
            instance.filesystem.commonPaths.DefaultsDirectory(),
            "userAvatar.png",
          ),
          userAvatarPath,
        );
        const user = new User(username);
        try {
          await user.__internal_generateAvatars();
        } catch (e) {
          instance.log.error(
            `user`,
            `Failed to generate user avatars for ${instance.log.addEmphasisToString(username)}`,
          );
        }
      } catch (e) {
        instance.log.error(
          `user`,
          `Unable to copy default user avatar ${path.join(instance.filesystem.commonPaths.DefaultsDirectory(), "userAvatar.png")} to ${userAvatarPath}`,
        );
      }
    }

    instance.events.triggerEvent("yourdash_user_repair", username);
  }
}
