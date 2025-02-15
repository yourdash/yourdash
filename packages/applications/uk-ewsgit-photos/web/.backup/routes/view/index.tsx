/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import clippy from "@yourdash/shared/web/helpers/clippy";
import tun from "@yourdash/tunnel/src/index.js";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ViewVideo from "./components/viewVideo/viewVideo.js";
import styles from "./index.module.scss";
import ViewImage from "./components/viewImage/viewImage.js";
import { PHOTOS_MEDIA_TYPE } from "../../../shared/types/mediaType.js";
import useResource from "@yourdash/tunnel/src/useResource.js";
import { z } from "zod";
import UKButton from "@yourdash/uikit/src/components/button/UKButton.js";

const ViewPathPage: FC = () => {
  const mediaPath = useParams()["*"] || "/";
  const navigate = useNavigate();
  const media = useResource(
    () => tun.get(`/media/raw/@/${mediaPath}`, "json", z.object({ type: z.nativeEnum(PHOTOS_MEDIA_TYPE), mediaUrl: z.string() })),
    { dependencies: [mediaPath], return: "data" },
  );

  return (
    <div className={clippy(styles.page, media?.type === PHOTOS_MEDIA_TYPE.Video && styles.video)}>
      <div className={styles.header}>
        <UKButton
          text={"Go Back"}
          // icon={UKIcons.ChevronLeft}
          onClick={() => {
            navigate(-1);
          }}
        />
        <div className={styles.spacer} />
        <UKButton
          text={"Download"}
          // icon={UKIcons.Download}
          onClick={() => {
            window.open(`${tun.baseUrl}${media?.mediaUrl}`, "_blank");
          }}
        />
      </div>
      {media && (
        <>
          {media.type === PHOTOS_MEDIA_TYPE.Image && <ViewImage mediaUrl={media.mediaUrl} />}
          {media.type === PHOTOS_MEDIA_TYPE.Video && <ViewVideo mediaUrl={media.mediaUrl} />}
        </>
      )}
    </div>
  );
};

export default ViewPathPage;
