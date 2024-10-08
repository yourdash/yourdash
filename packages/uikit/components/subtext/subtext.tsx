/*
 * Copyright ©2024 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import clippy from "@yourdash/shared/web/helpers/clippy.ts";
import styles from "./subtext.module.scss";
import { FC } from "react";

const Subtext: FC<{ text: string; className?: string }> = (props) => {
  return <div className={clippy(styles.component, props.className)}>{props.text}</div>;
};

export default Subtext;
