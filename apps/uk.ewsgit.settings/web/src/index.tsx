/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import React, { useEffect } from "react";
import { Routes, Route, Outlet } from "react-router";
import SETTINGS_ICON from "../../assets/icon.png";
import ApplicationPanelContext from "@yourdash/web/src/lib/panelContext.ts";
import IndexPage from "./root/index/Index.tsx";
import HomePage from "./root/home/Home.tsx";
import AppsLayout from "./root/apps/Layout.tsx";

// @ts-ignore
import ApplicationsRouter from "virtual:uk.ewsgit.settings/external-applications/file";
import Sidebar from "./root/components/Sidebar/Sidebar.tsx";
import { UKFlex, UKLayout } from "@yourdash/uikit";

const SettingsRouter: React.FC = () => {
  const applicationPanelContext = React.useContext(ApplicationPanelContext);

  useEffect(() => {
    applicationPanelContext.setApplicationDisplayName("Settings");
    applicationPanelContext.setApplicationIcon(SETTINGS_ICON);
    applicationPanelContext.setOnBackButton(() => {});
    applicationPanelContext.setShowBackButton(false);
    applicationPanelContext.setControls(<></>);
  }, []);

  return (
    <Routes>
      <Route
        element={
          <UKLayout fillHeight={true} primarySidebar={<Sidebar />}>
            <Outlet />
          </UKLayout>
        }
      >
        <Route index element={<IndexPage />} />
        <Route path={"home"} element={<HomePage />} />
        <Route path={"apps"} element={<AppsLayout />}>
          <Route
            index
            element={
              <UKFlex
                direction={"column"}
                centerHorizontally={true}
                centerVertically={false}
                padding={true}
              >
                Please select an application from the side to continue.
              </UKFlex>
            }
          />
          {/*@ts-ignore*/}
          {...ApplicationsRouter}
        </Route>
      </Route>
    </Routes>
  );
};

export default SettingsRouter;
