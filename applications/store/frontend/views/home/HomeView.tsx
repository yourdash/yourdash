/*
 * Copyright ©2024 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import clippy from "@yourdash/shared/web/helpers/clippy";
import useTranslate from "@yourdash/shared/web/helpers/i18n";
import Heading from "@yourdash/uikit/depChiplet/components/heading/Heading";
import * as React from "react";
import { type StorePromotedApplication } from "@yourdash/shared/apps/store/storePromotedApplication";
import csi from "@yourdash/csi/csi";
import StoreCategory from "../../component/storeCategory/StoreCategory";
import StoreApplication from "../../component/storeApplication/StoreApplication";
import StoreHeader from "../../component/storeHeader/StoreHeader";
import styles from "./HomeView.module.scss";

const StoreApplicationRoot: React.FC = () => {
  const trans = useTranslate("store");
  const [promotedApplications, setPromotedApplications] = React.useState<StorePromotedApplication[]>([]);
  const [categories, setCategories] = React.useState<string[]>([]);
  const [applications, setApplications] = React.useState<
    {
      id: string;
      displayName: string;
      icon: string;
    }[]
  >([]);

  React.useEffect(() => {
    csi.getJson("/app/store/promoted/applications", (data) => {
      setPromotedApplications(data);
    });

    csi.getJson("/app/store/categories", (data) => {
      setCategories(data);
    });

    csi.getJson("/app/store/applications", (data) => {
      setApplications(data);
    });
  }, []);

  return (
    <main className={clippy("flex flex-col gap-2", styles.main)}>
      <StoreHeader />
      <Heading level={2}>{trans("ALL_CATEGORIES_SECTION")}</Heading>
      {categories.length !== 0 && (
        <section
          className={
            "grid 3xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-2 gap-2 animate__animated animate__fadeIn animate__250ms"
          }
        >
          {categories.map((category) => (
            <StoreCategory id={category} key={category} />
          ))}
        </section>
      )}
      <Heading level={2}>{trans("ALL_APPLICATIONS_SECTION")}</Heading>
      {applications.length !== 0 && (
        <section
          className={
            "grid grid-cols-1 gap-2 animate__animated animate__fadeIn animate__500ms md:grid-cols-2 lg:grid-cols-3"
          }
        >
          {applications.map((application) => (
            <StoreApplication
              id={application.id}
              displayName={application.displayName}
              key={application.id}
              icon={application.icon}
            />
          ))}
        </section>
      )}
    </main>
  );
};

export default StoreApplicationRoot;
