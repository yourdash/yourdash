/*
 * Copyright ©2024 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import Icon from "@yourdash/uikit/components/icon/icon.js";
import { UKIcon } from "@yourdash/uikit/components/icon/iconDictionary.js";
import Image from "@yourdash/uikit/components/image/image.js";
import { FC } from "react";
import { MediaAlbumLargeGridItem } from "../../../../../shared/types/endpoints/media/album/large-grid.js";
import { PHOTOS_MEDIA_TYPE } from "../../../../../shared/types/mediaType.js";
import { useNavigate } from "react-router-dom";
import styles from "./albumGridMedia.module.scss";

const AlbumGridMedia: FC<{
  data: MediaAlbumLargeGridItem<PHOTOS_MEDIA_TYPE.Image | PHOTOS_MEDIA_TYPE.Video>;
  aspectRatio: number;
  rowHeight: number;
  displayWidth: number;
}> = ({ data, aspectRatio, rowHeight, displayWidth }) => {
  const navigate = useNavigate();

  switch (data.type) {
    case PHOTOS_MEDIA_TYPE.Image:
    case PHOTOS_MEDIA_TYPE.Video:
      return (
        <div
          className={styles.component}
          style={{
            width: displayWidth !== 0 ? `${rowHeight * aspectRatio}px` : "100%",
            height: `${rowHeight}px`,
          }}
          onClick={() => {
            navigate("/app/a/uk-ewsgit-photos/view/?p=" + data.path);
          }}
        >
          <Image
            className={styles.image}
            accessibleLabel={"User Photo"}
            src={data.mediaUrl}
            authenticatedImage
          />
          {data.type === PHOTOS_MEDIA_TYPE.Video && (
            <div className={styles.videoOverlay}>
              <Icon
                icon={UKIcon.Video}
                className={styles.videoIcon}
              />
            </div>
          )}
          {data.type === PHOTOS_MEDIA_TYPE.Image && (
            <div
              className={styles.dimensionOverlay}
              onClick={(e) => e.stopPropagation()}
            >
              {data.metadata.width}x{data.metadata.height}
            </div>
          )}
        </div>
      );
    default:
      return <>MEDIA RENDERING ERROR</>;
  }
};

export default AlbumGridMedia;
