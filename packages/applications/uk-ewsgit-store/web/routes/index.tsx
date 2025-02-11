import UKSeparator from "@yourdash/uikit/src/components/separator/UKSeparator.js";
import UKSidebarToggleButton from "@yourdash/uikit/src/views/sidebar/UKSidebarToggleButton.js";
import React from "react";
import ApplicationCategories from "./(components)/sections/applicationCategories/applicationCategories.tsx";
import PromotedApplications from "./(components)/sections/promotedApplications/promotedApplications";
import styles from "./index.module.scss";
import UKHeading from "@yourdash/uikit/src/components/heading/UKHeading.js";

const ApplicationIndexPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <UKSidebarToggleButton className={styles.sidebarToggleButton} />
      <UKHeading
        className={styles.reccommendedHeading}
        text={"Recommended Applications"}
      />
      <UKSeparator direction={"column"} />
      <PromotedApplications />
      <UKHeading
        text={"Categories"}
        className={styles.categoriesHeading}
      />
      <UKSeparator direction={"column"} />
      <ApplicationCategories />
    </div>
  );
};

export default ApplicationIndexPage;
