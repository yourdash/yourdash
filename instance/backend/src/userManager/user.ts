/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import path from "path";
import { resizeImage } from "../image.js";
import { instance } from "../main";

class User {
  readonly username: string;

  constructor(username: string) {
    this.username = username;
    return this;
  }

  async doesExist() {
    const usersWithUsername = await instance.database.query(
      "SELECT username FROM users WHERE username = $1;",
      [this.username],
    );

    return (
      (usersWithUsername.rows[0] as unknown as { username: string })
        ?.username === this.username
    );
  }

  async getForename() {
    const forename = await instance.database.query(
      "SELECT forename FROM users WHERE username = $1;",
      [this.username],
    );

    return forename.rows[0].forename || "MISSING FORENAME";
  }

  async getSurname() {
    const surname = await instance.database.query(
      "SELECT surname FROM users WHERE username = $1;",
      [this.username],
    );

    return surname.rows[0].surname || "MISSING SURNAME";
  }

  async setForename(forename: string) {
    instance.log.info(
      "user",
      `Set user ${this.username}'s forename to "${forename}"`,
    );

    await instance.database.query(
      "UPDATE users SET forename = $2 WHERE username = $1;",
      [this.username, forename],
    );

    return this;
  }

  async setSurname(surname: string) {
    instance.log.info(
      "user",
      `Set user ${this.username}'s surname to "${surname}"`,
    );

    await instance.database.query(
      "UPDATE users SET surname = $2 WHERE username = $1;",
      [this.username, surname],
    );

    return this;
  }

  async getFullName() {
    const surname = await this.getSurname();
    const forename = await this.getForename();

    return `${forename} ${surname}`;
  }

  async __internal_generateAvatars() {
    const userSystemPath = instance.filesystem.commonPaths.UserSystemDirectory(
      this.username,
    );

    await resizeImage(
      path.join(userSystemPath, `avatar.png`),
      1024,
      1024,
      path.join(path.join(userSystemPath, "avatar1024.webp")),
      "webp",
    );
    instance.log.info(
      "user",
      `Generated user avatar @ 1024 for user ${this.username}.`,
    );

    await resizeImage(
      path.join(userSystemPath, `avatar.png`),
      768,
      768,
      path.join(path.join(userSystemPath, "avatar768.webp")),
      "webp",
    );
    instance.log.info(
      "user",
      `Generated user avatar @ 768 for user ${this.username}.`,
    );

    await resizeImage(
      path.join(userSystemPath, `avatar.png`),
      512,
      512,
      path.join(path.join(userSystemPath, "avatar512.webp")),
      "webp",
    );
    instance.log.info(
      "user",
      `Generated user avatar @ 512 for user ${this.username}.`,
    );

    await resizeImage(
      path.join(userSystemPath, `avatar.png`),
      256,
      256,
      path.join(path.join(userSystemPath, "avatar256.webp")),
      "webp",
    );
    instance.log.info(
      "user",
      `Generated user avatar @ 256 for user ${this.username}.`,
    );

    await resizeImage(
      path.join(userSystemPath, `avatar.png`),
      128,
      128,
      path.join(path.join(userSystemPath, "avatar128.webp")),
      "webp",
    );
    instance.log.info(
      "user",
      `Generated user avatar @ 128 for user ${this.username}.`,
    );

    await resizeImage(
      path.join(userSystemPath, `avatar.png`),
      64,
      64,
      path.join(path.join(userSystemPath, "avatar64.webp")),
      "webp",
    );
    instance.log.info(
      "user",
      `Generated user avatar @ 64 for user ${this.username}.`,
    );

    return this;
  }
}

export default User;
