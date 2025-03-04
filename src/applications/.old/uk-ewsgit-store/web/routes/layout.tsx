import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import STORE_ICON from "../../icon.avif";
import styles from "./layout.module.scss";
import UKNavImage from "@yourdash/uikit/src/views/navBar/components/navImage/UKNavbarNavImage.js";
import UKNavTitle from "@yourdash/uikit/src/views/navBar/components/navTitle/UKNavbarNavTitle.js";
import UKNavBar from "@yourdash/uikit/src/views/navBar/UKNavBar.js";
import UKButton from "@yourdash/uikit/src/components/button/UKButton.js";
import UKSidebar from "@yourdash/uikit/src/views/sidebar/UKSidebar.js";
import UKSidebarContainer from "@yourdash/uikit/src/views/sidebar/UKSidebarContainer.js";
import UKSidebarToggleButton from "@yourdash/uikit/src/views/sidebar/UKSidebarToggleButton.js";

const ApplicationLayout: React.FC = () => {
  const navigateTo = useNavigate();

  return (
    <>
      <UKSidebarContainer className={styles.sidebarContainer}>
        <div className={styles.content}>
          <UKSidebar>
            <UKButton
              text={"Home"}
              onClick={() => {
                navigateTo("/app/a/uk-ewsgit-store/");
              }}
            />
            <UKButton
              text={"Search"}
              onClick={() => {
                navigateTo("/app/a/uk-ewsgit-store/search");
              }}
            />
            <UKButton
              text={"Applications"}
              onClick={() => {
                navigateTo("/app/a/uk-ewsgit-store/applications");
              }}
            />
            <UKButton
              text={"Modules"}
              onClick={() => {
                navigateTo("/app/a/uk-ewsgit-store/modules");
              }}
            />
            <UKButton
              text={"Manage Installed"}
              onClick={() => {
                navigateTo("/app/a/uk-ewsgit-store/manage");
              }}
            />
          </UKSidebar>
          <Outlet />
        </div>
      </UKSidebarContainer>
    </>
  );
};

export default ApplicationLayout;
