/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import toAuthImgUrl from "@yourdash/tunnel-embedded/src/getAuthImage.js";
import tun from "@yourdash/tunnel-embedded/src/index.js";
import UKCard from "@yourdash/uikit-embedded/src/components/card/UKCard.js";
import UKContextMenu from "@yourdash/uikit-embedded/src/components/contextMenu/UKContextMenu.js";
import useToast from "@yourdash/uikit-embedded/src/core/toasts/useToast.js";
import React from "react";
import styles from "./LargeApplicationGrid.module.scss";
import { z } from "zod";
import { UKImage, UKLink } from "@yourdash/uikit";

interface IPanelApplicationsLauncherFrontendModule {
  id: string;
  displayName: string;
  icon: string;
  description: string;
  endpoint?: string;
  url?: string;
  type: "frontend" | "externalFrontend";
}

const LargeApplicationGrid: React.FC<{
  modules: IPanelApplicationsLauncherFrontendModule[];
}> = ({ modules }) => {
  const toast = useToast();

  return (
    <section className={styles.grid}>
      {modules.map((module) => {
        return (
          <UKContextMenu
            items={[
              {
                label: "Pin To Panel",
                async onClick() {
                  let success = await tun.post(
                    "/core/panel/quick-shortcuts/create",
                    { id: module.id },
                    "json",
                    z.object({
                      success: z.boolean(),
                    }),
                  );

                  if (success.data.success) {
                    // @ts-ignore
                    window.__yourdashCorePanelQuickShortcutsReload?.();
                    toast.create({
                      type: "success",
                      content: {
                        title: "Application pinned successfully",
                        body: "",
                      },
                    });
                  } else {
                    toast.create({
                      type: "error",
                      content: {
                        body: "An application must only be pinned once to the panel.",
                        title: "Failed to pin application",
                      },
                    });
                  }

                  return 0;
                },
              },
              {
                label: "Open In New Tab",
                onClick() {
                  if (module.type === "frontend") {
                    window.open(
                      `${window.location.origin}${module.endpoint}`,
                      "_blank",
                    );
                  } else {
                    window.open(`${module.url}`, "_blank");
                  }
                  return 0;
                },
              },
            ]}
            className={styles.item}
            key={module.id}
          >
            <UKLink
              className={styles.itemLink}
              to={
                module.type === "frontend"
                  ? `${module.endpoint}`
                  : `${module.url}`
              }
            >
              <UKCard className={styles.itemContent}>
                <UKImage
                  className={styles.itemIcon}
                  src={toAuthImgUrl(
                    `/core/panel/applications/app/largeGrid/${module.id}`,
                  )}
                  accessibleLabel=""
                />
                <span className={styles.itemLabel}>{module.displayName}</span>
              </UKCard>
            </UKLink>
          </UKContextMenu>
        );
      })}
    </section>
  );
};

export default LargeApplicationGrid;
