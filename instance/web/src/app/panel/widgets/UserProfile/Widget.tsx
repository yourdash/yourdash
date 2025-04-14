/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import React from "react";
import styles from "./Widget.module.scss";
import { UKImage, UKText } from "@yourdash/uikit";

const UserProfileWidget: React.FC = () => {
  return (
    <div className={styles.component}>
      <UKImage src={"/favicon.png"} accessibleLabel={"User profile"} />
      <span className={styles.label}>
        <UKText text={"User profile"} />
      </span>
    </div>
  );
};

export default UserProfileWidget;
