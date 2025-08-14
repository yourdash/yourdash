/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import TemplateApplication from "./templateApplication.tsx";
import DASH_ICON from "../../assets/icon.png";
import ApplicationPanelContext from "@yourdash/web/src/lib/panelContext.ts";

const TemplateRouter: React.FC = () => {
  const applicationPanelContext = React.useContext(ApplicationPanelContext);

  useEffect(() => {
    applicationPanelContext.setApplicationDisplayName("Template");
    applicationPanelContext.setApplicationIcon(DASH_ICON);
    applicationPanelContext.setOnBackButton(() => {});
    applicationPanelContext.setShowBackButton(false);
  }, []);

  return (
    <Routes>
      <Route index element={<TemplateApplication />} />
    </Routes>
  );
};

export default TemplateRouter;
