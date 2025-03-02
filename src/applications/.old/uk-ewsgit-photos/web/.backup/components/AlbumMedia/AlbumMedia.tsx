/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import browserPath from "@yourdash/tunnel-embedded/src/browserPath.js";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AlbumMediaPath } from "../../../shared/types/endpoints/album/media/path.ts";
import styles from "./AlbumMedia.module.scss";
import useResource from "@yourdash/tunnel-embedded/src/useResource.ts";
import tun from "@yourdash/tunnel-embedded/src/index.ts";
import { z } from "zod";
import UKImage from "@yourdash/uikit/src/components/image/UKImage.tsx";
import toAuthImgUrl from "@yourdash/tunnel-embedded/src/getAuthImage.ts";
import UKText from "@yourdash/uikit/src/components/text/UKText.tsx";

const AlbumMedia: React.FC<{ albumMedia: AlbumMediaPath; showFilenames?: boolean }> = ({ albumMedia, showFilenames }) => {
  const navigate = useNavigate();
  const thumbnailPath = useResource(
    () => tun.get(`/uk-ewsgit-photos/media/thumbnail/lowres/@/${albumMedia.path}`, "json", z.object({ thumbnail: z.string() })),
    {
      return: "data",
    },
  );

  if (!thumbnailPath) {
    return <div>No thumbnail loaded!</div>;
  }

  return (
    <div
      className={styles.component}
      onClick={() => {
        navigate(`/view/@/${albumMedia.path}`);
      }}
    >
      <UKImage
        className={styles.image}
        accessibleLabel={""}
        src={toAuthImgUrl(thumbnailPath?.thumbnail || "")}
      />
      {showFilenames && <UKText text={browserPath.basename(albumMedia.path)} />}
    </div>
  );
};

export default AlbumMedia;
