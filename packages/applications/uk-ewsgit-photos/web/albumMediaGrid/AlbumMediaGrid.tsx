/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import toAuthImgUrl from "@yourdash/tunnel/src/getAuthImage.js";
import tun from "@yourdash/tunnel/src/index.js";
import useResource from "@yourdash/tunnel/src/useResource.js";
import UKFlex from "@yourdash/uikit/src/components/flex/UKFlex.js";
import { FC, useRef } from "react";
import UKImage from "@yourdash/uikit/src/components/image/UKImage.js";
import { z } from "zod";
import { PHOTOS_MEDIA_TYPE } from "../../shared/types/mediaType.js";
import splitItemsIntoRows from "../lib/splitItemsIntoRows.js";

const AlbumMediaGrid: FC<{ albumPath: string }> = ({ albumPath }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rows =
    useResource(
      () =>
        tun.get(
          `/uk-ewsgit-photos/album/@/${albumPath}`,
          "json",
          z.object({
            albums: z.string().array(),
            displayName: z.string(),
            path: z.string(),
            size: z.number().optional(),
            items: z
              .union([
                z.object({
                  path: z.string(),
                  type: z.literal(PHOTOS_MEDIA_TYPE.Image),
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
                  type: z.literal(PHOTOS_MEDIA_TYPE.Video),
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
          }),
        ),
      {
        return: "data",
        transform: (data) => {
          return splitItemsIntoRows(data.media, containerRef.current?.getBoundingClientRect().height || 200, 256);
        },
      },
    ) ?? [];

  return (
    <div ref={containerRef}>
      {rows.map((row) => {
        return (
          <UKFlex direction={"row"}>
            <UKImage
              src={toAuthImgUrl(row.itemUrl || "test")}
              accessibleLabel={""}
            />
          </UKFlex>
        );
      })}
    </div>
  );
};

export default AlbumMediaGrid;
