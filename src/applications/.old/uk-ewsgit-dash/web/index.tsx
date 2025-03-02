/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import DashApplication from "./dashApplication";
import DASH_ICON from "../icon.avif";
import ApplicationPanelContext from "@yourdash/panel-context/src/index.js";

const DashRouter: React.FC = () => {
  const applicationPanelContext = React.useContext(ApplicationPanelContext);

  useEffect(() => {
    applicationPanelContext.setApplicationDisplayName("Dash");
    applicationPanelContext.setApplicationIcon(DASH_ICON);
    applicationPanelContext.setOnBackButton(() => {});
    applicationPanelContext.setShowBackButton(false);
  }, []);

  return (
    <Routes>
      <Route
        index
        element={<DashApplication />}
      />
      <Route
        path="settings"
        element={<div>Settings Page</div>}
      />
    </Routes>
  );
};

export default DashRouter;
