/*
 * Copyright ©2024 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import Card from "@yourdash/uikit/depChiplet/components/card/Card";
import Icon from "@yourdash/uikit/depChiplet/components/icon/Icon";
import { YourDashIcon } from "@yourdash/uikit/depChiplet/components/icon/iconDictionary";
import React from "react";
import styles from "./UserPreview.module.scss";

export interface IUserPreview {
  name: {
    first: string;
    last: string;
  };
  username: string;
  avatar: string;
  bio?: string;
  links?: { url: string; label: string }[];
}

const UserPreview: React.FC<IUserPreview> = ({ name, username, avatar, bio, links }) => {
  return (
    <Card className={styles.component}>
      <img src={avatar} alt="" className={styles.avatar} />
      <section className={styles.content}>
        <section className={styles.name}>
          <div className={styles.fullName}>
            {name.first} {name.last}
          </div>
          <div className={styles.username}>@{username}</div>
        </section>
        <p className={styles.bio}>{bio}</p>
        {!!links &&
          links.map((link) => (
            <a href={link.url} className={styles.link} key={link.label + link.url}>
              <Icon className={styles.icon} icon={YourDashIcon.Link} />
              {link.label}
            </a>
          ))}
      </section>
    </Card>
  );
};

export default UserPreview;
