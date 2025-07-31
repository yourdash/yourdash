/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import DashApplication from "./dashApplication";
import DASH_ICON from "../../assets/icon.png";
import ApplicationPanelContext from "@yourdash/web/src/lib/panelContext.ts";
import { AppRouter } from "@yourdash/backend/src/trpcRouter";
import { createTRPCClient, httpBatchLink } from '@trpc/client';

const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3563/trpc',
      async fetch(url, options) {
        let req = await fetch(url, {
          ...options,
          credentials: "include",
        });
        return req
      }
    }),
  ],
});

export {client}

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
