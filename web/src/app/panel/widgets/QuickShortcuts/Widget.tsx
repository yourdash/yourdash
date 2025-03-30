/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import useResource from "@yourdash/tunnel-embedded/src/useResource.ts";
import tun from "@yourdash/tunnel-embedded/src/index.js";
import UKImage from "@yourdash/uikit-embedded/src/components/image/UKImage.js";
import IncrementLevel from "@yourdash/uikit-embedded/src/core/incrementLevel.js";
import { useLevelClass } from "@yourdash/uikit-embedded/src/core/level.js";
import { To, useNavigate } from "react-router-dom";
import clippy from "../../../../lib/clippy.js";
import styles from "./Widget.module.scss";
import React from "react";
import z from "zod";

const QuickShortcuts: React.FC<{ side: "top" | "right" | "bottom" | "left" }> = ({ side }) => {
  const navigate = useNavigate();

  const [num, setNum] = React.useState<number>(0);
  const quickShortcutApplications = useResource(
    () =>
      tun.get(
        "/core/panel/quick-shortcuts",
        "json",
        z.object({ displayName: z.string(), id: z.string(), endpoint: z.string().optional(), url: z.string().optional() }).array(),
      ),
    { dependencies: [num], return: "data" },
  );

  // @ts-ignore
  window.__yourdashCorePanelQuickShortcutsReload = () => {
    setNum(num + 1);
  };

  return (
    <>
      {quickShortcutApplications?.map(
        // @ts-ignore
        (application: { id: React.Key | null | undefined; endpoint: To; url: string; displayName: string }) => {
          if (!application) return <>Invalid Module</>;

          return (
            <IncrementLevel key={application.id}>
              <div
                key={application.id}
                onClick={() => {
                  if (application?.endpoint) {
                    navigate(application.endpoint);
                  } else if (application?.url) {
                    window.location.href = application.url;
                  }
                }}
                className={clippy(
                  styles.application,
                  side === "top" && styles.top,
                  side === "right" && styles.right,
                  side === "bottom" && styles.bottom,
                  side === "left" && styles.left,
                  useLevelClass(1),
                )}
              >
                <UKImage
                  className={styles.applicationIcon}
                  src={tun.baseUrl + `/core/panel/quick-shortcut/icon/${application.id}`}
                  accessibleLabel={application.displayName}
                />
                <span className={styles.applicationLabel}>{application.displayName}</span>
              </div>
            </IncrementLevel>
          );
        },
      )}
    </>
  );
};

export default QuickShortcuts;
