/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { UKBox, UKHeading, UKImage, UKLink, UKSeparator, UKText, UKTextButton } from "@yourdash/uikit";
import clippy from "../../../lib/clippy.js";
import styles from "./navigation.module.scss";
import React, { FC } from "react";
import { Outlet, useNavigate } from "react-router";

const Navigation: FC<{ subtitle?: string }> = ({ subtitle }) => {
  const navigate = useNavigate();

  return (
    <>
      <UKBox className={styles.navigationBar}>
        <UKImage
          src={"/assets/branding/yourdash.svg"}
          accessibleLabel={"YourDash Logo"}
          className={styles.logo}
        />
        <UKHeading
          level={2}
          className={styles.title}
          text={"YourDash"}
        />
        <UKHeading
          level={2}
          className={styles.subtitle}
          text={subtitle ? `/ ${subtitle}` : ""}
        />
        <UKTextButton
          className={styles.link}
          text={"Home"}
          onClick={() => {
            navigate("/");
          }}
        />
        <UKTextButton
          className={styles.link}
          text={"Docs"}
          onClick={() => {
            window.location.href = "https://github.com/yourdash/yourdash/tree/main/docs";
          }}
        />
        <UKTextButton
          className={clippy(styles.link, styles.source)}
          text={"Source"}
          onClick={() => {
            window.location.href = "https://github.com/yourdash/yourdash";
          }}
        />
        <UKTextButton
          className={styles.link}
          text={"Login"}
          onClick={() => {
            navigate("/login");
          }}
        />
      </UKBox>
      <UKBox
        level={1}
        className={styles.notice}
      >
        <UKText text={"YourDash is a pre-alpha project. "} />
        <UKLink
          hideLinkIcon={true}
          to={"/docs/pre-alpha"}
          text={"learn more."}
        />
      </UKBox>
      {/* @ts-ignore */}
      <Outlet />
      <UKBox className={styles.footer}>
        <div>
          <UKText text={"©2022-2025"} />
          <UKLink
            className={styles.link}
            hideLinkIcon={true}
            to={"https://ewsgit.uk"}
            text={"Ewsgit"}
          />
          <UKSeparator
            className={styles.separator}
            direction={"row"}
            disableMargin={true}
          />
          <UKLink
            className={styles.link}
            hideLinkIcon={true}
            to={"https://ewsgit.mit-license.org"}
            text={"Licensed under the MIT License"}
          />
        </div>
        <UKSeparator direction={"column"} />
        <div>
          <UKText text={`Built from `} />
          <UKLink
            className={styles.link}
            hideLinkIcon={true}
            text={import.meta.env.VITE_BUILD_COMMIT_SHA || "Not production build"}
            to={`https://github.com/yourdash/yourdash/tree/${import.meta.env.VITE_BUILD_COMMIT_SHA || "Not production build"}`}
          />
          <UKText text={` @ `} />
          <UKLink
            className={styles.link}
            hideLinkIcon={true}
            text={import.meta.env.VITE_BUILD_COMMIT_BRANCH || "Not production build"}
            to={`https://github.com/yourdash/yourdash/tree/${import.meta.env.VITE_BUILD_COMMIT_BRANCH || "Not production build"}`}
          />
        </div>
      </UKBox>
    </>
  );
};

export default Navigation;
