/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import React from "react";
import tun from "@yourdash/tunnel/src/index.js";
import toResourceUrl from "@yourdash/tunnel/src/toResourceUrl.js";
import useResource from "@yourdash/tunnel/src/useResource.js";
import UKFlex from "@yourdash/uikit/src/components/flex/UKFlex.js";
import { FC, useEffect, useRef, useState } from "react";
import UKImage from "@yourdash/uikit/src/components/image/UKImage.js";
import { z } from "zod";
import { MediaAlbumLargeGridItem } from "../../shared/.backup/types/endpoints/media/album/large-grid.js";
import { PhotosMediaType } from "../../shared/types/mediaType.js";
import splitItemsIntoRows from "../lib/splitItemsIntoRows.js";
import generateUUID from "@yourdash/shared/web/helpers/uuid.js";
import MediaGridMedia from "../../shared/types/mediaGridMedia.js";
import { MAX_HEIGHT } from "../../shared/.backup/grid.js";

const AlbumMediaGrid: FC<{ albumPath: string }> = ({ albumPath }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const albumData =
    useResource(
      () =>
        tun.get(
          `/uk-ewsgit-photos/album/media/@/${albumPath}`,
          "json",
          z
            .union([
              z.object({
                path: z.string(),
                type: z.literal(PhotosMediaType.Image),
                metadata: z.object({
                  width: z.number(),
                  height: z.number(),
                  contains: z
                    .object({
                      landmarks: z.string().array(),
                      people: z.string().array(),
                      objects: z.string().array(),
                    })
                    .optional(),
                }),
                resource: z.string(),
              }),
              z.object({
                path: z.string(),
                type: z.literal(PhotosMediaType.Video),
                metadata: z.object({
                  width: z.number(),
                  height: z.number(),
                  duration: z.number(),
                  contains: z
                    .object({
                      landmarks: z.string().array(),
                      people: z.string().array(),
                      objects: z.string().array(),
                    })
                    .optional(),
                }),
                resource: z.string(),
              }),
            ])
            .array(),
        ),
      {
        return: "data",
      },
    ) ?? [];

  const [rows, setRows] = useState<
    {
      displayHeight: number;
      items: { media: MediaGridMedia; displayWidth: number }[];
    }[]
  >([]);

  useEffect(() => {
    if (!containerRef.current) return;

    setRows(splitItemsIntoRows(albumData, containerRef.current?.getBoundingClientRect().width ?? 200, MAX_HEIGHT));
  }, [albumData, containerRef.current]);

  return (
    <UKFlex
      direction={"column"}
      ref={containerRef}
    >
      {rows.map((row) => {
        const uuid = generateUUID();
        return (
          <UKFlex
            style={{ height: row.displayHeight }}
            direction={"row"}
            key={uuid}
          >
            {row.items.map((item) => {
              return (
                <UKImage
                  key={item.media.path}
                  src={toResourceUrl(item.media.resource || "test")}
                  accessibleLabel={""}
                />
              );
            })}
          </UKFlex>
        );
      })}
    </UKFlex>
  );
};

export default AlbumMediaGrid;
