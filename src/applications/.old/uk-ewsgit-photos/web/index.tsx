/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import ApplicationPanelContext from "@yourdash/web/src/app/panel/ApplicationPanelContext.tsx";
import { FC, useEffect } from "react";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import PHOTOS_ICON from "./../icon.avif";
import UKIconButton from "@yourdash/uikit/src/components/iconButton/UKIconButton.js";
import { UKIcons } from "@yourdash/uikit/src/core/iconDictionary.js";
import Layout from "./layout.js";
import AlbumPage from "./routes/album/AlbumPage.js";
import IndexPage from "./routes/index/IndexPage.js";
import MediaPage from "./routes/media/MediaPage.js";
import SearchPage from "./routes/search/SearchPage.js";

const ApplicationRoutes: FC = () => {
  const navigate = useNavigate();
  const applicationPanelContext = React.useContext(ApplicationPanelContext);

  useEffect(() => {
    applicationPanelContext.setApplicationDisplayName("YourDash Photos");
    applicationPanelContext.setApplicationIcon(PHOTOS_ICON);
    applicationPanelContext.setOnBackButton(() => {});
    applicationPanelContext.setShowBackButton(false);
    applicationPanelContext.setControls([
      <UKIconButton
        key={"home"}
        accessibleLabel={"Home"}
        icon={UKIcons.Home}
        onClick={() => {
          navigate(`/app/a/uk-ewsgit-photos/`);
        }}
      />,
      <UKIconButton
        key={"search"}
        accessibleLabel={"Search"}
        icon={UKIcons.Search}
        onClick={() => {
          navigate(`/app/a/uk-ewsgit-photos/search/`);
        }}
      />,
      <UKIconButton
        key={"profile"}
        accessibleLabel={"Profile"}
        icon={UKIcons.Person}
        onClick={() => {
          navigate(`/app/a/uk-ewsgit-photos/profile/`);
        }}
      />,
    ]);
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={<IndexPage />}
        />
        <Route
          path={"search"}
          element={<SearchPage />}
        />
        <Route path={"album"}>
          <Route
            path={":albumId"}
            element={<AlbumPage />}
          />
        </Route>
        <Route path={"media"}>
          <Route
            path={":mediaId"}
            element={<MediaPage />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default ApplicationRoutes;
