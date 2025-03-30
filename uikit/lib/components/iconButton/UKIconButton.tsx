/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import clippy from "../../core/clippy.ts";
import UKIcon from "../icon/UKIcon.tsx";
import { UKIcons } from "../../core/iconDictionary.ts";
import styles from "./iconButton.module.scss";
import React, { FC } from "react";

const UKIconButton: FC<{
  icon: (typeof UKIcons)[keyof typeof UKIcons];
  accessibleLabel: string;
  onClick: () => void;
  style?: React.CSSProperties;
  className?: string;
  preserveColor?: boolean;
}> = (props) => {
  return (
    <button
      style={props.style}
      onClick={props.onClick}
      aria-label={props.accessibleLabel}
      className={clippy(styles.component, props.className)}
    >
      <UKIcon
        size={"1.25rem"}
        preserveColor={props.preserveColor}
        icon={props.icon}
      />
    </button>
  );
};

export default UKIconButton;
