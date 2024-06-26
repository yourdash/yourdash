/*
 * Copyright ©2024 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import * as React from "react";
import { Routes, Route } from "react-router";
import StoreApplication from "./views/home/HomeView";
import ComingSoon from "@yourdash/chiplet/views/ComingSoon";
import CategoryView from "./views/category/CategoryView";
import StoreApplicationPage from "./views/application/StoreApplicationPage";

const StoreRouter: React.FC = () => (
  <Routes>
    <Route index element={<StoreApplication />} />
    <Route path={"cat"}>
      <Route index element={<ComingSoon />} />
      <Route path={":id"} element={<CategoryView />} />
    </Route>
    <Route path={"category"}>
      <Route index element={<StoreApplication />} />
      <Route path={":id"} element={<CategoryView />} />
    </Route>
    <Route path={"app"}>
      <Route index element={<ComingSoon />} />
      <Route path={":id"} element={<StoreApplicationPage />} />
    </Route>
  </Routes>
);

export default StoreRouter;
