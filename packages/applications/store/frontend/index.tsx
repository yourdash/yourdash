import * as React from "react";
import { Routes, Route } from "react-router";
import StoreApplication from "./storeApplication";
import ComingSoon from "web-client/src/ComingSoon";
import StoreCategoryPage from "./category/StoreCategoryPage";
import StoreApplicationPage from "./application/StoreApplicationPage";

const StoreRouter: React.FC = () => (
  <Routes>
    <Route index element={<StoreApplication/>}/>
    <Route path={"cat"}>
      <Route index element={<ComingSoon/>}/>
      <Route path={":id"} element={<StoreCategoryPage/>}/>
    </Route>
    <Route path={"category"}>
      <Route index element={<StoreApplication/>}/>
      <Route path={":id"} element={<StoreCategoryPage/>}/>
    </Route>
    <Route path={"app"}>
      <Route index element={<ComingSoon/>}/>
      <Route path={":id"} element={<StoreApplicationPage/>}/>
    </Route>
  </Routes>
);

export default StoreRouter;