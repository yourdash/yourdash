/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import React from "react";
import styles from "./notFound.module.scss";
import clippy from "../../lib/clippy";
import { UKButton, UKHeading, UKSeparator, UKSubText } from "@yourdash/uikit";
import { useNavigate } from "react-router";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className={clippy(styles.component, "animate__animated animate__fadeIn")}
    >
      <UKHeading
        className={clippy(
          styles.heading,
          "animate__animated animate__jackInTheBox",
        )}
        level={1}
        text={"404"}
      />
      <UKSeparator direction={"column"} />
      <UKSubText
        className={"animate__animated animate__fadeInUp"}
        text={"This page could not be found!"}
      />
      <UKButton
        className={clippy(styles.button, "animate__animated animate__fadeIn")}
        onClick={() => {
          navigate("/");
        }}
        text={"Go back to login"}
      />
    </div>
  );
};

export default NotFoundPage;
