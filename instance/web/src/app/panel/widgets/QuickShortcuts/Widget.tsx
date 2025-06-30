/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { To, useNavigate } from "react-router-dom";
import styles from "./Widget.module.scss";
import React from "react";
import z from "zod";
import { clippy, UKImage, UKIncrementLevel, utils } from "@yourdash/uikit";
import { useResource, tun } from "@yourdash/tunnel";

const QuickShortcuts: React.FC<{
  side: "top" | "right" | "bottom" | "left";
}> = ({ side }) => {
  const navigate = useNavigate();

  const [num, setNum] = React.useState<number>(0);
  const quickShortcutApplications = useResource(
    () =>
      tun.get(
        "/core/panel/quick-shortcuts",
        "json",
        z
          .object({
            displayName: z.string(),
            id: z.string(),
            endpoint: z.string().optional(),
            url: z.string().optional(),
          })
          .array(),
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
        (application: {
          id: React.Key | null | undefined;
          endpoint: To;
          url: string;
          displayName: string;
        }) => {
          if (!application) return <>Invalid Module</>;

          return (
            <UKIncrementLevel key={application.id}>
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
                  utils.useLevelClass(1),
                )}
              >
                <UKImage
                  noRounding={true}
                  className={styles.applicationIcon}
                  src={
                    tun.baseUrl +
                    `/core/panel/quick-shortcut/icon/${application.id}`
                  }
                  accessibleLabel={application.displayName}
                />
                <span className={styles.applicationLabel}>
                  {application.displayName}
                </span>
              </div>
            </UKIncrementLevel>
          );
        },
      )}
    </>
  );
};

export default QuickShortcuts;
