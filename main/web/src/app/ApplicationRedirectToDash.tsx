/*
 * Copyright ©2024 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import React, { useEffect } from "react";
import csi from "@yourdash/csi/csi";
import { useNavigate } from "react-router-dom";

const ApplicationRedirectToDash: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("instance_url")) {
      navigate("/login");
    } else {
      csi.syncGetJson(
        "/login/is-authenticated",
        () => {
          navigate("/app/a/dash");
        },
        () => {
          sessionStorage.removeItem("session_token");
          navigate("/login");
        },
      );
    }
  }, []);
  return null;
};

export default ApplicationRedirectToDash;
