/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import UKHeading from "@yourdash/uikit/src/components/heading/UKHeading.js";
import UKIconButton from "@yourdash/uikit/src/components/iconButton/UKIconButton.js";
import { UKIcons } from "@yourdash/uikit/src/core/iconDictionary.js";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import path from "path-browserify";
import AlbumMediaGrid from "../../components/AlbumMediaGrid/AlbumMediaGrid";
import SubAlbums from "../../components/SubAlbums/SubAlbums";
import styles from "./index.module.scss";

const AlbumPathPage: FC = () => {
  const navigate = useNavigate();
  const albumPath = useParams()["*"] || "/";

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <UKIconButton
          accessibleLabel={"Go back"}
          icon={UKIcons.ChevronLeft}
          onClick={() => {
            if (!albumPath) return;

            const newPath = path.join(albumPath, "..");

            if ((newPath === "/" && albumPath === "/") || newPath === "") {
              navigate(`/uk-ewsgit-photos/`);

              return;
            }

            navigate(`/uk-ewsgit-photos/album/@/${newPath}`);
          }}
        />
        <UKHeading
          className={styles.heading}
          level={1}
          text={path.basename(albumPath) || albumPath}
        />
      </div>
      <SubAlbums
        scrollerClassName={styles.subAlbums}
        path={albumPath}
      />
      <AlbumMediaGrid
        scrollerClassName={styles.mediaGrid}
        path={albumPath}
      />
    </div>
  );
};

export default AlbumPathPage;
