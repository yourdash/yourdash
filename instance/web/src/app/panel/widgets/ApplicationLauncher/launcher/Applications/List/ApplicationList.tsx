/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import toAuthImgUrl from "@yourdash/tunnel-embedded/src/getAuthImage.js";
import UKContextMenu from "@yourdash/uikit-embedded/src/components/contextMenu/UKContextMenu.js";
import React from "react";
import styles from "./ApplicationList.module.scss";
import { useNavigate } from "react-router";
import UKCard from "@yourdash/uikit-embedded/src/components/card/UKCard.js";
import tun from "@yourdash/tunnel-embedded/src";
import { z } from "zod";

interface IPanelApplicationsLauncherFrontendModule {
  id: string;
  displayName: string;
  icon: string;
  description: string;
  endpoint?: string;
  url?: string;
  type: "frontend" | "externalFrontend";
}

const ApplicationList: React.FC<{ modules: IPanelApplicationsLauncherFrontendModule[] }> = ({ modules }) => {
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
                  await tun.post("/core/panel/quick-shortcuts/create", { id: module.id, moduleType: module.type }, "json", z.object({}));
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
            <UKCard
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
                src={toAuthImgUrl(`/core/panel/applications/app/list/${module.id}`)}
                draggable={false}
                alt=""
              />
              <span className={styles.itemLabel}>{module.displayName}</span>
            </UKCard>
          </UKContextMenu>
        );
      })}
    </section>
  );
};

export default ApplicationList;
