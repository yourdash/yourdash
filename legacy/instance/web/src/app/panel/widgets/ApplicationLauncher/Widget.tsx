/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import React, { useEffect } from "react";
import styles from "./Widget.module.scss";
import ApplicationLauncher from "./launcher/Launcher.tsx";
import { useLocation } from "react-router";
import { UKDecrementLevel, UKIcon, UKIcons } from "@yourdash/uikit";

const ApplicationLauncherWidget: React.FC<{ side: "top" | "right" | "bottom" | "left" }> = ({ side }) => {
  const [launcherVisible, setLauncherVisible] = React.useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setLauncherVisible(false);
  }, [location]);

  return (
    <UKDecrementLevel>
      <div className={styles.widgetContainer}>
        <button
          aria-label={"Application Launcher"}
          className={styles.launcherButton}
          onClick={() => setLauncherVisible(!launcherVisible)}
        >
          <UKIcon
            icon={UKIcons.AppLauncher}
            className={styles.launcherButtonIcon}
          />
        </button>
        <ApplicationLauncher
          side={side}
          visible={launcherVisible}
        />
      </div>
    </UKDecrementLevel>
  );
};

export default ApplicationLauncherWidget;
