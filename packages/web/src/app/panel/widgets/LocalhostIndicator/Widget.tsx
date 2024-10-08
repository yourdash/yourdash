/*
 * Copyright ©2024 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import clippy from "@yourdash/shared/web/helpers/clippy.ts";
import React from "react";
import Text from "@yourdash/uikit/components/text/text.tsx";

const LocalhostIndicator: React.FC<{
  side: "top" | "right" | "bottom" | "left";
}> = ({ side }) => {
  if (window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
    return null;
  }

  return (
    <div
      className={clippy(
        "flex items-center justify-center h-[var(--app-panel-size)] w-[var(--app-panel-size)] -m-[var(--app-panel-padding)]",
        side === "top" && "ml-auto",
        side === "bottom" && "ml-auto",
        side === "left" && "mt-auto",
        side === "right" && "mt-auto",
      )}
    >
      <Text
        text={"Localhost"}
        className={clippy(
          "!text-xs",
          side === "top" && "rotate-45",
          side === "bottom" && "-rotate-45",
          side === "left" && "-rotate-45",
          side === "right" && "rotate-45",
        )}
      />
    </div>
  );
};

export default LocalhostIndicator;
