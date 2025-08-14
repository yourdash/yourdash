/*
 * Copyright ©2025 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import React from "react";
import styles from "./Widget.module.scss";
import clippy from "../../../../lib/clippy.js";
import { UKText } from "@yourdash/uikit";

const LocalhostIndicator: React.FC<{
  side: "top" | "right" | "bottom" | "left";
}> = ({ side }) => {
  if (
    window.location.hostname !== "localhost" &&
    window.location.hostname !== "127.0.0.1"
  ) {
    return null;
  }

  return (
    <div
      className={clippy(
        styles.component,
        side === "top" && styles.top,
        side === "bottom" && styles.bottom,
        side === "left" && styles.left,
        side === "right" && styles.right,
      )}
    >
      <UKText
        style={{
          textAlign: "center",
          color: "rgb(249 168 212)",
          lineHeight: 1,
          paddingBottom: "1rem",
        }}
        text={"Ewsgit ©2025 Pre Alpha"}
      />
    </div>
  );
};

export default LocalhostIndicator;
