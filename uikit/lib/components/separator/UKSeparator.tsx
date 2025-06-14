/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import clippy from "../../core/clippy.js";
import styles from "./separator.module.scss";
import React, { FC } from "react";

const UKSeparator: FC<{ direction: "column" | "row"; disableMargin?: boolean, className?: string, style?: React.CSSProperties }> = (props) => {
  return <div className={clippy(styles.component, styles[props.direction], props.disableMargin && styles.disableMargin, props.className)} style={props.style} />;
};

export default UKSeparator;
