/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import toAuthImgUrl from "@yourdash/tunnel-embedded/src/getAuthImage.js";
import tun from "@yourdash/tunnel-embedded/src/index.js";
import React from "react";
import { z } from "zod";
import styles from "./SmallApplicationGrid.module.scss";
import { useNavigate } from "react-router";
import UKContextMenu from "@yourdash/uikit-embedded/src/components/contextMenu/UKContextMenu";

interface IPanelApplicationsLauncherFrontendModule {
  id: string;
  displayName: string;
  icon: string;
  description: string;
  endpoint?: string;
  url?: string;
  type: "frontend" | "externalFrontend";
}

const SmallApplicationGrid: React.FC<{
  modules: IPanelApplicationsLauncherFrontendModule[];
}> = ({ modules }) => {
  const navigate = useNavigate();

  return (
    <section className={styles.grid}>
      {modules.map((module) => {
        return (
          <UKContextMenu
            items={[
              {
                label: "Pin To Panel",
                async onClick() {
                  await tun.post(
                    "/core/panel/quick-shortcuts/create",
                    { id: module.id, moduleType: module.type },
                    "json",
                    z.object({ success: z.boolean() }),
                  );
                  // @ts-ignore
                  window.__yourdashCorePanelQuickShortcutsReload?.();
                  return 0;
                },
              },
              {
                label: "Open In New Tab",
                onClick() {
                  window.open(`${window.location.origin}${window.location.pathname}/app/a/${module.id}`, "_blank");
                  return 0;
                },
              },
            ]}
            className={styles.item}
            key={module.id}
          >
            <div
              className={styles.itemContent}
              onClick={() => {
                if (module.type === "frontend") {
                  navigate(`${module.endpoint}`);
                } else {
                  navigate(`${module.url}`);
                }
              }}
            >
              <img
                loading={"lazy"}
                className={styles.itemIcon}
                src={toAuthImgUrl(`/core/panel/applications/app/smallGrid/${module.id}`)}
                draggable={false}
                alt=""
              />
              <span className={styles.itemLabel}>{module.displayName}</span>
            </div>
          </UKContextMenu>
        );
      })}
    </section>
  );
};

export default SmallApplicationGrid;
