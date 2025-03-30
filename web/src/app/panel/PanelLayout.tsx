/*
 * Copyright ©2025 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import UKImage from "@yourdash/uikit-embedded/src/components/image/UKImage.js";
import UKText from "@yourdash/uikit-embedded/src/components/text/UKText.js";
import { UKIcons } from "@yourdash/uikit-embedded/src/core/iconDictionary.js";
import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Panel from "./Panel.tsx";
import styles from "./PanelLayout.module.scss";
import UKIconButton from "@yourdash/uikit-embedded/src/components/iconButton/UKIconButton.js";
import clippy from "../../lib/clippy.ts";

const PanelLayout: React.FC<{
  showBackButton: boolean;
  onBackButton: () => void;
  controls: React.ReactNode;
  applicationDisplayName: string;
  applicationIcon?: string;
}> = ({ showBackButton, onBackButton, controls, applicationDisplayName, applicationIcon }) => {
  const [panelSide, setPanelSide] = React.useState<"top" | "right" | "bottom" | "left">(getPanelSize);

  function getPanelSize() {
    if (window.innerWidth < 768) {
      return "bottom";
    } else {
      return "left";
    }
  }

  function updatePanelSide() {
    setPanelSide(getPanelSize());
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      updatePanelSide();
    });

    return () => {
      window.removeEventListener("resize", () => {
        updatePanelSide();
      });
    };
  }, []);

  if (panelSide === undefined) {
    return <>Undefined panel side</>;
  }

  switch (panelSide) {
    case "top":
      return (
        <div className={clippy(styles.layout, styles.top)}>
          <Panel
            side={"top"}
            setLayoutReloadNumber={() => updatePanelSide()}
          />
          <div className={styles.applicationPanelFrame}>
            <div className={styles.applicationPanel}>
              {showBackButton && (
                <UKIconButton
                  icon={UKIcons.ChevronLeft}
                  accessibleLabel={"Go Back"}
                  onClick={onBackButton}
                />
              )}
              <UKImage
                className={styles.applicationIcon}
                src={applicationIcon ?? "/favicon.svg"}
                accessibleLabel={""}
              />
              <UKText
                text={applicationDisplayName}
                className={styles.applicationDisplayName}
              />
              <div key={"controls"}>{controls}</div>
            </div>
            <div
              key={1}
              className={styles.applicationFrame}
            >
              <Outlet key={1} />
            </div>
          </div>
        </div>
      );
    case "left":
      return (
        <div className={clippy(styles.layout, styles.left)}>
          <Panel
            side={"left"}
            setLayoutReloadNumber={() => updatePanelSide()}
          />
          <div className={styles.applicationPanelFrame}>
            <div className={styles.applicationPanel}>
              {showBackButton && (
                <UKIconButton
                  icon={UKIcons.ChevronLeft}
                  accessibleLabel={"Go Back"}
                  onClick={onBackButton}
                />
              )}
              <UKImage
                className={styles.applicationIcon}
                src={applicationIcon ?? "/favicon.svg"}
                accessibleLabel={""}
              />
              <UKText
                text={applicationDisplayName}
                className={styles.applicationDisplayName}
              />
              <React.Fragment>{controls}</React.Fragment>
            </div>
            <div
              key={1}
              className={styles.applicationFrame}
            >
              <Outlet key={1} />
            </div>
          </div>
        </div>
      );
    case "bottom":
      return (
        <div className={clippy(styles.layout, styles.bottom)}>
          <div className={styles.applicationPanelFrame}>
            <div className={styles.applicationPanel}>
              {showBackButton && (
                <UKIconButton
                  icon={UKIcons.ChevronLeft}
                  accessibleLabel={"Go Back"}
                  onClick={onBackButton}
                />
              )}
              <UKImage
                className={styles.applicationIcon}
                src={applicationIcon ?? "/favicon.svg"}
                accessibleLabel={""}
              />
              <UKText
                text={applicationDisplayName}
                className={styles.applicationDisplayName}
              />
              <React.Fragment>{controls}</React.Fragment>
            </div>
            <div
              key={1}
              className={styles.applicationFrame}
            >
              <Outlet key={1} />
            </div>
          </div>
          <Panel
            side={"bottom"}
            setLayoutReloadNumber={() => updatePanelSide()}
          />
        </div>
      );
    case "right":
      return (
        <div className={clippy(styles.layout, styles.right)}>
          <div className={styles.applicationPanelFrame}>
            <div className={styles.applicationPanel}>
              {showBackButton && (
                <UKIconButton
                  icon={UKIcons.ChevronLeft}
                  accessibleLabel={"Go Back"}
                  onClick={onBackButton}
                />
              )}
              <UKImage
                className={styles.applicationIcon}
                src={applicationIcon ?? "/favicon.svg"}
                accessibleLabel={""}
              />
              <UKText
                text={applicationDisplayName}
                className={styles.applicationDisplayName}
              />
              <React.Fragment>{controls}</React.Fragment>
            </div>
            <div
              key={1}
              className={styles.applicationFrame}
            >
              <Outlet key={1} />
            </div>
          </div>
          <Panel
            side={"right"}
            setLayoutReloadNumber={() => updatePanelSide()}
          />
        </div>
      );
    default:
      return <>An Unexpected Error Occurred</>;
  }
};

export default PanelLayout;
