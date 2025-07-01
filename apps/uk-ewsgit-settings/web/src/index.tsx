/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import SETTINGS_ICON from "../../assets/icon.png";
import ApplicationPanelContext from "@yourdash/web/src/lib/panelContext.ts";
import IndexPage from "./root/index/Index.tsx";
import HomePage from "./root/home/Home.tsx";

const DashRouter: React.FC = () => {
  const applicationPanelContext = React.useContext(ApplicationPanelContext);

  useEffect(() => {
    applicationPanelContext.setApplicationDisplayName("Settings");
    applicationPanelContext.setApplicationIcon(SETTINGS_ICON);
    applicationPanelContext.setOnBackButton(() => {});
    applicationPanelContext.setShowBackButton(false);
  }, []);

  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path={"home"} element={<HomePage />} />
    </Routes>
  );
};

export default DashRouter;
