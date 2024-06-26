/*
 * Copyright ©2024 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import clippy from "@yourdash/shared/web/helpers/clippy";
import { UKIcon } from "@yourdash/uikit/components/icon/iconDictionary.js";
import IconButton from "@yourdash/uikit/components/iconButton/iconButton";
import Box from "@yourdash/uikit/components/box/box.js";
import { useNavigate } from "react-router-dom";
import styles from "./Launcher.module.scss";
import React, { memo, useEffect, useState } from "react";
import ApplicationsLauncherApplications from "./Applications/Applications";
import IPanelApplicationsLauncherApplication from "@yourdash/shared/core/panel/applicationsLauncher/application";
import csi from "@yourdash/csi/csi";

const ApplicationLauncher: React.FC<{
  side: "top" | "right" | "bottom" | "left";
  visible: boolean;
}> = ({ side, visible }) => {
  const navigate = useNavigate();
  const [apps, setApps] = useState<IPanelApplicationsLauncherApplication[]>([]);
  const [layout, setLayout] = React.useState<"large-grid" | "small-grid" | "list">("large-grid");

  useEffect(() => {
    csi.syncGetJson("/core/panel/applications", (data) => {
      setApps(data);
    });
  }, []);

  return (
    <div
      className={clippy(
        styles.applicationLauncher,
        side === "top" && `${styles.sideTop} animate__slideInLeft`,
        side === "right" && `${styles.sideRight} animate__slideInDown`,
        side === "bottom" && `${styles.sideBottom} animate__slideInLeft`,
        side === "left" && `${styles.sideLeft} animate__slideInDown`,
        "animate__animated animate__duration_500ms",
        !visible && styles.invisible,
      )}
    >
      <Box className={styles.content}>
        <ApplicationsLauncherApplications
          apps={apps}
          layout={layout}
        />
      </Box>
      <Box className={styles.footer}>
        <IconButton
          accessibleLabel={"Logout"}
          className={styles.logoutButton}
          icon={UKIcon.Logout}
          onClick={() => {
            csi.logout();
            navigate("/login");
          }}
        />
        <div>
          <img
            src={""}
            alt={""}
          />
          <IconButton
            accessibleLabel={"Profile"}
            icon={UKIcon.Person}
            aria-label={"User Profile Settings"}
            onClick={() => {
              navigate("/app/a/settings/profile");
            }}
          />
        </div>
        <span>{csi.userDB.get<{ first: string; last: string }>("user:name")?.first || "Unknown First Name"}</span>
        <IconButton
          accessibleLabel={"Filter small grid"}
          className={"ml-auto"}
          icon={UKIcon.Filter}
          onClick={() => {
            setLayout("small-grid");
          }}
        />
        <IconButton
          accessibleLabel={"Filter large grid"}
          icon={UKIcon.Filter}
          onClick={() => {
            setLayout("large-grid");
          }}
        />
        <IconButton
          accessibleLabel={"Filter list"}
          icon={UKIcon.Filter}
          onClick={() => {
            setLayout("list");
          }}
        />
      </Box>
    </div>
  );
};

export default memo(ApplicationLauncher);
