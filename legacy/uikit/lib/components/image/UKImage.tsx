/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { UKIcons } from "../../core/iconDictionary.ts";
import styles from "./image.module.scss";
import React, { FC, useEffect, useRef, useState } from "react";
import clippy from "../../core/clippy.ts";
import UKIcon from "../icon/UKIcon.tsx";
import { useLevel, useLevelClass } from "../../core/level.tsx";

const UKImage: FC<{
  src: string;
  accessibleLabel: string;
  containerClassName?: string;
  className?: string;
  disableLazyLoading?: boolean;
  noRounding?: boolean;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
}> = (props) => {
  const level = useLevel();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [hasFailed, setHasFailed] = useState<boolean>(false);

  useEffect(() => {
    setHasFailed(false);
    setLoaded(false);
  }, [props.src]);

  return (
    <div
      onClick={props.onClick}
      className={clippy(
        styles.componentContainer,
        props.containerClassName,
        !loaded && styles.loading,
        hasFailed && styles.serverError,
      )}
      style={{
        ...props.style,
      }}
    >
      <img
        className={clippy(
          styles.component,
          useLevelClass(level),
          props.className,
          loaded && styles.loaded,
          props.noRounding && styles.noRounding,
        )}
        style={{
          opacity: hasFailed ? 0 : 1,
        }}
        draggable={false}
        width={props.width}
        height={props.height}
        onError={() => {
          setHasFailed(true);
        }}
        loading={props.disableLazyLoading ? "eager" : "lazy"}
        alt={props.accessibleLabel}
        onLoad={(e) => {
          setLoaded(e.currentTarget.complete);
        }}
        onLoadStart={() => {
          setLoaded(false);
        }}
        src={props.src ?? "/assets/branding/yourdash256.png"}
      />
      {hasFailed && <UKIcon icon={UKIcons.ServerError} />}
    </div>
  );
};

export default UKImage;
