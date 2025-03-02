/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import clippy from "@yourdash/shared/web/helpers/clippy";
import toAuthImgUrl from "@yourdash/tunnel-embedded/src/getAuthImage.js";
import tun from "@yourdash/tunnel-embedded/src/index.js";
import UKCard from "@yourdash/uikit/src/components/card/UKCard.js";
import UKImage from "@yourdash/uikit/src/components/image/UKImage.js";
import UKText from "@yourdash/uikit/src/components/text/UKText.js";
import UKInfiniteScroll from "@yourdash/uikit/src/views/infiniteScroll/UKInfiniteScroll.js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EndpointAlbumSubPath } from "../../../shared/types/endpoints/album/sub/path";
import styles from "./SubAlbums.module.scss";
import browserPath from "@yourdash/tunnel-embedded/src/browserPath";
import { z } from "zod";

const SubAlbums: React.FC<{ path: string; scrollerClassName?: string }> = ({ path, scrollerClassName }) => {
  const navigate = useNavigate();
  const [albums, setAlbums] = useState<EndpointAlbumSubPath["data"]>([]);

  useEffect(() => {
    setAlbums([]);
  }, [path]);

  return (
    <UKInfiniteScroll
      resetState={path}
      fetchNextPage={async (nextPageNumber) => {
        const req = await tun.get(
          `/album/sub/${nextPageNumber}/@/${path}`,
          "json",
          z.object({ data: z.object({}).array(), hasAnotherPage: z.object({}) }),
        );

        if (!req.data.data) {
          return { hasAnotherPage: false };
        }

        // @ts-ignore
        setAlbums((previousAlbums) => [...previousAlbums, ...req.data.data]);

        return { hasAnotherPage: req.data.hasAnotherPage };
      }}
      className={clippy(styles.component, scrollerClassName)}
    >
      {albums.map((album) => {
        return (
          <UKCard
            containerClassName={styles.album}
            key={album.path}
            onClick={() => {
              navigate(`/uk-ewsgit-photos/album/@/${browserPath.toUnix(album.path)}`);
            }}
          >
            <UKImage
              containerClassName={styles.thumbnailContainer}
              className={styles.thumbnail}
              accessibleLabel={""}
              src={toAuthImgUrl(album.thumbnail)}
            />
            <UKText
              text={album.displayName}
              className={styles.albumTitle}
            />
          </UKCard>
        );
      })}
    </UKInfiniteScroll>
  );
};

export default SubAlbums;
