/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import tun from "@yourdash/tunnel-embedded/src/index.js";
import UKFlex from "@yourdash/uikit-embedded/src/components/flex/UKFlex.js";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UKHeading from "@yourdash/uikit-embedded/src/components/heading/UKHeading.js";
import { z } from "zod";

const ApplicationRedirectToDash: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("instance_url")) {
      navigate("/login");
    } else {
      tun
        .get("/login/is-authenticated", "text", z.string())
        .then(() => {
          console.log("Should navigate");
          navigate("/app/a/uk-ewsgit-dash");
        })
        .catch(() => {
          console.warn("User was not authenticated!");
          navigate("/login");
        });
    }
  }, []);

  return (
    <UKFlex
      padding
      direction={"column"}
      centerHorizontally
      centerVertically
      className={"h-full"}
    >
      <UKHeading
        level={1}
        text={"Redirecting..."}
      />
    </UKFlex>
  );
};

export default ApplicationRedirectToDash;
