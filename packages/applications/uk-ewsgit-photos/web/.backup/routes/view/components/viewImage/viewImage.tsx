/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import toAuthImgUrl from "@yourdash/tunnel/src/getAuthImage.js";
import UKImage from "@yourdash/uikit/src/components/image/UKImage.js";
import UKText from "@yourdash/uikit/src/components/text/UKText.js";
import UKPanAndZoom from "@yourdash/uikit/src/views/panAndZoom/UKPanAndZoom.js";
import { FC, useState } from "react";
import styles from "./viewImage.module.scss";
import UKCard from "@yourdash/uikit/src/components/card/UKCard";

const ViewImage: FC<{ mediaUrl: string }> = ({ mediaUrl }) => {
  const [scale, setScale] = useState(1);

  return (
    <>
      <UKPanAndZoom onScaleChange={(s) => setScale(s)}>
        <UKImage
          className={styles.viewImage}
          src={toAuthImgUrl(mediaUrl)}
          accessibleLabel={""}
        />
        <UKCard className={styles.scale}>
          <UKText text={`${scale * 100}% scale`} />
        </UKCard>
      </UKPanAndZoom>
    </>
  );
};

export default ViewImage;
