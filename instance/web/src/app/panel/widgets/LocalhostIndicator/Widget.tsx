/*
 * Copyright ©2025 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import UKText from "@yourdash/uikit-embedded/src/components/text/UKText.js";
import React from "react";
import styles from "./Widget.module.scss";
import clippy from "../../../../lib/clippy.js";

const LocalhostIndicator: React.FC<{
  side: "top" | "right" | "bottom" | "left";
}> = ({ side }) => {
  if (window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
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
        text={"</>"}
        className={"text-pink-300"}
      />
    </div>
  );
};

export default LocalhostIndicator;
