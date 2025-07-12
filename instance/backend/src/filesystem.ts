/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import { promises as fs, constants } from "fs";
import path from "path";
import { type Instance } from "./instance.js";

class Filesystem {
  instance: Instance;
  FS_ROOT: string;
  SRC_ROOT: string;
  commonPaths = {
    RootDirectory: () => `${this.FS_ROOT}/`,
    DefaultsDirectory: () => `${this.FS_ROOT}/Defaults/`,
    SystemDirectory: () => `${this.FS_ROOT}/System/`,
    UsersDirectory: () => `${this.FS_ROOT}/Users/`,
    GlobalCacheDirectory: () => `${this.FS_ROOT}/Cache/`,
    TeamsDirectory: () => `${this.FS_ROOT}/Teams/`,
    ApplicationsDirectory: () => `${this.FS_ROOT}/../src/applications/`,
    ApplicationDirectory: (applicationId: string) =>
      `${this.commonPaths.ApplicationsDirectory()}/${applicationId}/`,
    HomeDirectory: (username: string) => `${this.FS_ROOT}/Users/${username}/`,
    UserDocumentsDirectory: (username: string) =>
      `${this.commonPaths.HomeDirectory(username)}/Documents/`,
    UserDownloadsDirectory: (username: string) =>
      `${this.commonPaths.HomeDirectory(username)}/Downloads/`,
    UserPicturesDirectory: (username: string) =>
      `${this.commonPaths.HomeDirectory(username)}/Pictures/`,
    UserVideosDirectory: (username: string) =>
      `${this.commonPaths.HomeDirectory(username)}/Videos/`,
    UserSystemDirectory: (username: string) =>
      `${this.commonPaths.HomeDirectory(username)}/System/`,
  };

  constructor(instance: Instance) {
    this.instance = instance;

    this.FS_ROOT = path.resolve(
      path.join(
        process.cwd(),
        // FIXME: add logic for Docker's different FS layout
        "./fs",
      ),
    );

    this.SRC_ROOT = path.resolve(
      path.join(process.cwd(), "instance/backend/src"),
    );

    this.instance.log.info(
      "filesystem",
      `filesystem root is set to ${instance.log.addEmphasisToString(this.FS_ROOT)}`,
    );

    return this;
  }

  async __internal_startup() {
    if (!(await this.doesPathExist(this.commonPaths.RootDirectory()))) {
      try {
        await fs.mkdir(this.commonPaths.RootDirectory());
        this.instance.log.info(
          "filesystem",
          `Created ${this.instance.log.addEmphasisToString(this.commonPaths.RootDirectory())} directory.`,
        );
      } catch (e) {
        console.error(e);
        this.instance.log.error(
          "filesystem",
          `Failed to create ${this.instance.log.addEmphasisToString(this.commonPaths.RootDirectory())} directory.`,
        );
      }
    } else {
      this.instance.log.info(
        "filesystem",
        `Verified ${this.instance.log.addEmphasisToString(this.commonPaths.RootDirectory())} directory.`,
      );
    }

    if (!(await this.doesPathExist(this.commonPaths.GlobalCacheDirectory()))) {
      try {
        await fs.mkdir(this.commonPaths.GlobalCacheDirectory());
        this.instance.log.info(
          "filesystem",
          `Created ${this.instance.log.addEmphasisToString(this.commonPaths.GlobalCacheDirectory())} directory.`,
        );
      } catch (e) {
        console.error(e);
        this.instance.log.error(
          "filesystem",
          `Failed to create ${this.instance.log.addEmphasisToString(this.commonPaths.GlobalCacheDirectory())} directory.`,
        );
      }
    } else {
      this.instance.log.info(
        "filesystem",
        `Verified ${this.instance.log.addEmphasisToString(this.commonPaths.GlobalCacheDirectory())} directory.`,
      );
    }

    if (!(await this.doesPathExist(this.commonPaths.TeamsDirectory()))) {
      try {
        await fs.mkdir(this.commonPaths.TeamsDirectory());
        this.instance.log.info(
          "filesystem",
          `Created ${this.instance.log.addEmphasisToString(this.commonPaths.TeamsDirectory())} directory.`,
        );
      } catch (e) {
        console.error(e);
        this.instance.log.error(
          "filesystem",
          `Failed to create ${this.instance.log.addEmphasisToString(this.commonPaths.TeamsDirectory())} directory.`,
        );
      }
    } else {
      this.instance.log.info(
        "filesystem",
        `Verified ${this.instance.log.addEmphasisToString(this.commonPaths.TeamsDirectory())} directory.`,
      );
    }

    if (!(await this.doesPathExist(this.commonPaths.UsersDirectory()))) {
      try {
        await fs.mkdir(this.commonPaths.UsersDirectory());
        this.instance.log.info(
          "filesystem",
          `Created ${this.instance.log.addEmphasisToString(this.commonPaths.UsersDirectory())} directory.`,
        );
      } catch (e) {
        console.error(e);
        this.instance.log.error(
          "filesystem",
          `Failed to create ${this.instance.log.addEmphasisToString(this.commonPaths.UsersDirectory())} directory.`,
        );
      }
    } else {
      this.instance.log.info(
        "filesystem",
        `Verified ${this.instance.log.addEmphasisToString(this.commonPaths.UsersDirectory())} directory.`,
      );
    }

    if (!(await this.doesPathExist(this.commonPaths.DefaultsDirectory()))) {
      try {
        await fs.mkdir(this.commonPaths.DefaultsDirectory());
        this.instance.log.info(
          "filesystem",
          `Created ${this.instance.log.addEmphasisToString(this.commonPaths.DefaultsDirectory())} directory.`,
        );
      } catch (e) {
        console.error(e);
        this.instance.log.error(
          "filesystem",
          `Failed to create ${this.instance.log.addEmphasisToString(this.commonPaths.DefaultsDirectory())} directory.`,
        );
      }
    } else {
      this.instance.log.info(
        "filesystem",
        `Verified ${this.instance.log.addEmphasisToString(this.commonPaths.DefaultsDirectory())} directory.`,
      );
    }

    if (!(await this.doesPathExist(this.commonPaths.SystemDirectory()))) {
      try {
        await fs.mkdir(this.commonPaths.SystemDirectory());
        this.instance.log.info(
          "filesystem",
          `Created ${this.instance.log.addEmphasisToString(this.commonPaths.SystemDirectory())} directory.`,
        );
      } catch (e) {
        console.error(e);
        this.instance.log.error(
          "filesystem",
          `Failed to create ${this.instance.log.addEmphasisToString(this.commonPaths.SystemDirectory())} directory.`,
        );
      }
    } else {
      this.instance.log.info(
        "filesystem",
        `Verified ${this.instance.log.addEmphasisToString(this.commonPaths.SystemDirectory())} directory.`,
      );
    }

    if (
      !(await this.doesPathExist(
        path.join(this.commonPaths.DefaultsDirectory(), "userAvatar.png"),
      ))
    ) {
      try {
        await fs.cp(
          path.join(this.SRC_ROOT, "assets/userAvatar.png"),
          path.join(this.commonPaths.DefaultsDirectory(), "userAvatar.png"),
        );
        this.instance.log.info(
          "filesystem",
          `Copied default asset ${this.instance.log.addEmphasisToString("userAvatar.png")}.`,
        );
      } catch (e) {
        console.error(e);
        this.instance.log.error(
          "filesystem",
          `Failed to copy default asset ${this.instance.log.addEmphasisToString("userAvatar.png")}.`,
        );
      }
    } else {
      this.instance.log.info(
        "filesystem",
        `Verified ${this.instance.log.addEmphasisToString(path.join(this.commonPaths.DefaultsDirectory(), "userAvatar.png"))} exists.`,
      );
    }

    if (
      !(await this.doesPathExist(
        path.join(this.commonPaths.SystemDirectory(), "loginBackground.avif"),
      ))
    ) {
      try {
        await fs.cp(
          path.join(this.SRC_ROOT, "assets/default_login_background.avif"),
          path.join(this.commonPaths.SystemDirectory(), "loginBackground.avif"),
        );
        this.instance.log.info(
          "filesystem",
          `Copied system asset ${this.instance.log.addEmphasisToString("loginBackground.avif")}.`,
        );
      } catch (e) {
        console.error(e);
        this.instance.log.error(
          "filesystem",
          `Failed to copy system asset ${this.instance.log.addEmphasisToString("loginBackground.avif")}.`,
        );
      }
    } else {
      this.instance.log.info(
        "filesystem",
        `Verified ${this.instance.log.addEmphasisToString(path.join(this.commonPaths.SystemDirectory(), "loginBackground.avif"))} exists.`,
      );
    }

    if (
      !(await this.doesPathExist(
        path.join(this.commonPaths.SystemDirectory(), "instanceLogo.png"),
      ))
    ) {
      try {
        await fs.cp(
          path.join(this.SRC_ROOT, "assets/yourdash.png"),
          path.join(this.commonPaths.SystemDirectory(), "instanceLogo.png"),
        );
        this.instance.log.info(
          "filesystem",
          `Copied system asset ${this.instance.log.addEmphasisToString("instanceLogo.png")}.`,
        );
      } catch (e) {
        console.error(e);
        this.instance.log.error(
          "filesystem",
          `Failed to copy system asset ${this.instance.log.addEmphasisToString("instanceLogo.png")}.`,
        );
      }
    } else {
      this.instance.log.info(
        "filesystem",
        `Verified ${this.instance.log.addEmphasisToString(path.join(this.commonPaths.SystemDirectory(), "instanceLogo.png"))} exists.`,
      );
    }

    if (
      !(await this.doesPathExist(
        path.join(
          this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
          "panel/applications",
        ),
      ))
    ) {
      try {
        await fs.mkdir(
          path.join(
            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
            "panel/applications",
          ),
          { recursive: true },
        );
        this.instance.log.info(
          "filesystem",
          `Created ${this.instance.log.addEmphasisToString(path.join(this.instance.filesystem.commonPaths.GlobalCacheDirectory(), "panel/applications"))} directory.`,
        );
      } catch (e) {
        console.error(e);
        this.instance.log.error(
          "filesystem",
          `Failed to create ${this.instance.log.addEmphasisToString(path.join(this.instance.filesystem.commonPaths.GlobalCacheDirectory(), "panel/applications"))} directory.`,
        );
      }
    } else {
      this.instance.log.info(
        "filesystem",
        `Verified ${this.instance.log.addEmphasisToString(path.join(this.instance.filesystem.commonPaths.GlobalCacheDirectory(), "panel/applications"))} directory.`,
      );
    }

    if (
      !(await this.doesPathExist(
        path.join(
          this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
          "panel",
          "invalidIcon.webp",
        ),
      ))
    ) {
      try {
        await fs.cp(
          path.join(this.SRC_ROOT, "assets/yourdash.png"),
          path.join(
            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
            "panel",
            "invalidIcon.webp",
          ),
        );
        this.instance.log.info(
          "filesystem",
          `Copied system asset ${this.instance.log.addEmphasisToString("invalidIcon.webp")}.`,
        );
      } catch (e) {
        console.error(e);
        this.instance.log.error(
          "filesystem",
          `Failed to copy system asset ${this.instance.log.addEmphasisToString("invalidIcon.webp")}.`,
        );
      }
    } else {
      this.instance.log.info(
        "filesystem",
        `Verified ${this.instance.log.addEmphasisToString(path.join(this.instance.filesystem.commonPaths.GlobalCacheDirectory(), "panel", "invalidIcon.webp"))} exists.`,
      );
    }

    this.instance.log.success("filesystem", "Verified filesystem structure!");

    return;
  }

  async doesPathExist(path: string): Promise<boolean> {
    try {
      await fs.access(path, constants.F_OK);
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default Filesystem;
