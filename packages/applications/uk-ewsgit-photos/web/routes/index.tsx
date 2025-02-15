/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { FC } from "react";
import { PHOTOS_MEDIA_TYPE } from "../../shared/types/mediaType.ts";
import PhotoGrid from "../components/PhotoGrid/PhotoGrid.tsx";
import styles from "./index.module.scss";
import YOURDASH_PHOTOS_LOGO from "../../icon.avif";
import UKHeading from "@yourdash/uikit/src/components/heading/UKHeading.tsx";
import UKSeparator from "@yourdash/uikit/src/components/separator/UKSeparator.tsx";
import UKImage from "@yourdash/uikit/src/components/image/UKImage.tsx";
import React from "react";
import toAuthImgUrl from "@yourdash/tunnel/src/getAuthImage.ts";

const IndexPage: FC = () => {
  return (
    <>
      <UKImage
        accessibleLabel="Bleh"
        src={toAuthImgUrl("/uk-ewsgit-photos/media/raw/@/hello/world")}
      />
      <h1>hello world</h1>
      <div className={styles.page}>
        <UKHeading
          level={1}
          text={"All Photos"}
        />
        <UKSeparator direction={"column"} />
        <PhotoGrid
          items={Array(64)
            .keys()
            .toArray()
            .map(() => {
              return {
                mediaType: PHOTOS_MEDIA_TYPE.Image,
                imageSrc: YOURDASH_PHOTOS_LOGO,
                onClick: () => {
                  return 0;
                },
                accessibleLabel: "Accessible Label",
              };
            })}
          onFetchNewPage={() => {
            return 0;
          }}
        />
      </div>
    </>
  );
};

export default IndexPage;
