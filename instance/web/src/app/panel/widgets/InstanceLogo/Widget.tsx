/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { useNavigate } from "react-router";
import styles from "./Widget.module.scss";
import React, { memo } from "react";
import { UKImage } from "@yourdash/uikit";
import { toAuthImgUrl } from "@yourdash/tunnel";

const InstanceLogoWidget: React.FC<{ panelSize: "small" | "medium" | "large" }> = ({ panelSize }) => {
  const navigate = useNavigate();

  const InstancePanelLogos = {
    small: "/panel/logo/small",
    medium: "/panel/logo/medium",
    large: "/panel/logo/large",
  };

  return (
    <UKImage
      src={toAuthImgUrl(InstancePanelLogos[panelSize])}
      accessibleLabel={"Instance logo"}
      containerClassName={styles.icon}
      noRounding={true}
      onClick={() => {
        navigate("/app/a/uk.ewsgit.dash");
      }}
    />
  );
};

export default memo(InstanceLogoWidget);
