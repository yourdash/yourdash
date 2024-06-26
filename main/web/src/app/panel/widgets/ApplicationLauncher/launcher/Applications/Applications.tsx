/*
 * Copyright ©2024 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import clippy from "@yourdash/shared/web/helpers/clippy";
import { UKIcon } from "@yourdash/uikit/components/icon/iconDictionary.js";
import TextInput from "@yourdash/uikit/components/textInput/textInput.js";
import React, { useEffect } from "react";
import IPanelApplicationsLauncherApplication from "@yourdash/shared/core/panel/applicationsLauncher/application";
import LargeApplicationGrid from "./LargeGrid/LargeApplicationGrid";
import styles from "./Applications.module.scss";
import { useNavigate } from "react-router";
import SmallApplicationGrid from "./SmallGrid/SmallApplicationGrid";
import ApplicationList from "./List/ApplicationList";

let filteredApplications: IPanelApplicationsLauncherApplication[] = [];

const ApplicationsLauncherApplications: React.FC<{
  apps: IPanelApplicationsLauncherApplication[];
  layout: "large-grid" | "small-grid" | "list";
}> = ({ apps, layout }) => {
  const navigate = useNavigate();
  const [applications, setApplications] = React.useState<IPanelApplicationsLauncherApplication[]>(apps);

  useEffect(() => {
    setApplications(apps);

    // for development purposes only
    // setLayout( "list" )
  }, [apps]);

  return (
    <>
      <TextInput
        accessibleName={"Search Applications"}
        placeholder={"Search Applications"}
        className={clippy(styles.searchBar, "top-0 sticky z-10")}
        onEnter={() => {
          if (filteredApplications.length === 1) {
            navigate(`/app/a/${filteredApplications[0].name}`);
          }
        }}
        onChange={(val) => {
          filteredApplications = apps.filter((application) => {
            return (
              application.name.toLowerCase().includes(val.toLowerCase()) ||
              application.description.toLowerCase().includes(val.toLowerCase()) ||
              application.displayName.toLowerCase().includes(val.toLowerCase())
            );
          });

          setApplications(filteredApplications);
        }}
        icon={UKIcon.Search}
      />

      {layout === "large-grid" && <LargeApplicationGrid applications={applications} />}
      {layout === "small-grid" && <SmallApplicationGrid applications={applications} />}
      {layout === "list" && <ApplicationList applications={applications} />}
    </>
  );
};

export default ApplicationsLauncherApplications;
