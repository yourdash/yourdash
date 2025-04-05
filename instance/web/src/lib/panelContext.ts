/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import React from "react";

const ApplicationPanelContext = React.createContext({
  setApplicationDisplayName: () => {
    console.warn("PanelContext does not exist!");
  },
  setOnBackButton: () => {
    console.warn("PanelContext does not exist!");
  },
  setControls: () => {
    console.warn("PanelContext does not exist!");
  },
  setApplicationIcon: () => {
    console.warn("PanelContext does not exist!");
  },
  setShowBackButton: () => {
    console.warn("PanelContext does not exist!");
  },
} as {
  setShowBackButton: (value: boolean) => void;
  setOnBackButton: (cb: () => void) => void;
  setControls: (controls: React.ReactNode) => void;
  setApplicationDisplayName: (displayName: string) => void;
  setApplicationIcon: (displayName: string) => void;
});

export default ApplicationPanelContext;
