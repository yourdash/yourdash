/*
 * Copyright ©2025 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { Outlet } from "react-router";
import PanelLayout from "./panel/PanelLayout.jsx";
import { FC, useState } from "react";
import styles from "./AppLayout.module.scss";
import ApplicationPanelContext from "@yourdash/web/src/lib/panelContext.js";

const AppLayout: FC = () => {
  const isStandalone = new URLSearchParams(window.location.search).has("standalone");

  const [applicationDisplayName, setApplicationDisplayName] = useState<string>("");
  const [applicationIcon, setApplicationIcon] = useState<string | undefined>(undefined);
  const [controls, setControls] = useState<React.ReactNode>(<></>);
  const [onBackButton, setOnBackButton] = useState<() => void>(() => {});
  const [showBackButton, setShowBackButton] = useState<boolean>(false);

  // Standalone mode displays only the application and not the Panel
  if (isStandalone) {
    return (
      <div className={styles.applicationFrame}>
        {/* @ts-ignore */}
        <Outlet />
      </div>
    );
  }

  return (
    <ApplicationPanelContext.Provider
      value={{
        setApplicationDisplayName: (displayName) => {
          setApplicationDisplayName(displayName);
        },
        setApplicationIcon: (applicationIcon) => {
          setApplicationIcon(applicationIcon);
        },
        setControls: (controls) => {
          setControls(controls);
        },
        setOnBackButton: (cb) => {
          setOnBackButton(cb);
        },
        setShowBackButton: (showBackButton) => {
          setShowBackButton(showBackButton);
        },
      }}
    >
      <PanelLayout
        applicationDisplayName={applicationDisplayName}
        applicationIcon={applicationIcon}
        controls={controls}
        onBackButton={onBackButton}
        showBackButton={showBackButton}
      />
    </ApplicationPanelContext.Provider>
  );
};

export default AppLayout;
