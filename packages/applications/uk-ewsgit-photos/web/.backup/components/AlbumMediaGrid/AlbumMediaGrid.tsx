/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import clippy from "@yourdash/shared/web/helpers/clippy";
import tun from "@yourdash/tunnel/src/index.js";
import UKInfiniteScroll from "@yourdash/uikit/src/views/infiniteScroll/UKInfiniteScroll.js";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import EndpointAlbumMediaPath from "../../../shared/types/endpoints/album/media/path";
import AlbumMedia from "../AlbumMedia/AlbumMedia";
import styles from "./AlbumMediaGrid.module.scss";
import { useNavigate } from "react-router";

const AlbumMediaGrid: React.FC<{ path: string; scrollerClassName?: string }> = ({ path, scrollerClassName }) => {
  const navigate = useNavigate();
  const [albumMedia, setAlbumMedia] = useState<EndpointAlbumMediaPath["data"]>([]);

  useEffect(() => {
    setAlbumMedia([]);
  }, [path]);

  return (
    <UKInfiniteScroll
      resetState={path}
      fetchNextPage={async (nextPageNumber) => {
        const req = await tun.get(
          `/album/media/${nextPageNumber}/@/` + path,
          "json",
          z.object({ data: z.object({}).array(), hasAnotherPage: z.boolean() }),
        );

        // @ts-ignore
        setAlbumMedia((previousAlbums) => [...previousAlbums, ...req.data.data]);

        return { hasAnotherPage: req.data.hasAnotherPage };
      }}
      className={clippy(styles.component, scrollerClassName)}
    >
      {albumMedia.map((album) => {
        return (
          <AlbumMedia
            key={album.path}
            albumMedia={album}
            showFilenames={true}
          />
        );
      })}
    </UKInfiniteScroll>
  );
};

export default AlbumMediaGrid;
