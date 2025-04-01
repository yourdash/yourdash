/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import React from "react";
import clippy from "../../core/clippy.js";
import styles from "./buttonCombo.module.scss";

const UKButtonCombo: React.FC<{ children: React.ReactNode[]; className?: string }> = ({ children, className }) => {
  return <div className={clippy(styles.component, className)}>{children}</div>;
};

export default UKButtonCombo;
