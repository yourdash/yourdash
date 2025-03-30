/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import React from "react";
import styles from "./widget.module.scss";
import { useNavigate } from "react-router-dom";
import { toAuthImgUrl } from "@yourdash/tunnel";
import { UKCard, UKImage, UKText } from "@yourdash/uikit";

const Widget: React.FC<{ data: { url: string, icon: string, name: string} }> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <UKCard
      className={styles.widget}
      onClick={() => {
        navigate(data.url);
      }}
    >
      <UKImage
        noRounding={true}
        className={styles.img}
        src={toAuthImgUrl(data.icon)}
        accessibleLabel={""}
      />
      <UKText text={data.name} />
    </UKCard>
  );
};

export default Widget;
