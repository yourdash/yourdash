/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import clippy from "../../core/clippy.ts";
import styles from "./text.module.scss";
import React, { FC } from "react";

const UKText: FC<{ text: string; className?: string, style?: React.CSSProperties }> = (props) => {
  return <div className={clippy(styles.component, props.className)} style={props.style}>{props.text}</div>;
};

export default UKText;
