/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import clippy from "../../core/clippy.ts";
import UKIcon from "../icon/UKIcon.tsx";
import { UKIcons } from "../../core/iconDictionary.ts";
import styles from "./link.module.scss";
import React, { FC } from "react";
import { NavLink } from "react-router";

const UKLink: FC<React.PropsWithChildren<{
  text?: string;
  to: string;
  className?: string;
  hideLinkIcon?: boolean
}>> = (props) => {
  return (<NavLink
      to={props.to}
      viewTransition={true}
      className={clippy(styles.component, props.className)}
    >
      {props.children ? props.children : <>
        {props.text}
        {!props.hideLinkIcon && (<UKIcon
            icon={UKIcons.Link}
            className={styles.icon}
          />)}
      </>}
    </NavLink>);
};

export default UKLink;
