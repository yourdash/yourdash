/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import React, { useEffect } from "react";
import clippy from "../../../../../../lib/clippy.js";
import LargeApplicationGrid from "./LargeGrid/LargeApplicationGrid.tsx";
import styles from "./Applications.module.scss";
import { useNavigate } from "react-router";
import SmallApplicationGrid from "./SmallGrid/SmallApplicationGrid.tsx";
import ApplicationList from "./List/ApplicationList.tsx";
import UKTextInput from "@yourdash/uikit-embedded/src/components/textInput/UKTextInput.js";
import { UKIcons } from "@yourdash/uikit-embedded/src/core/iconDictionary.js";
import { UKSeparator } from "@yourdash/uikit";

interface IPanelApplicationsLauncherFrontendModule {
    id: string;
    displayName: string;
    icon: string;
    description: string;
    endpoint?: string;
    url?: string;
    type: "frontend" | "externalFrontend";
}

let filteredApplications: IPanelApplicationsLauncherFrontendModule[] = [];

const ApplicationsLauncherApplications: React.FC<{
    apps: IPanelApplicationsLauncherFrontendModule[];
    layout: "large-grid" | "small-grid" | "list";
}> = ({ apps, layout }) => {
    const navigate = useNavigate();
    const [applications, setApplications] =
        React.useState<IPanelApplicationsLauncherFrontendModule[]>(apps);
    const [searchQuery, setSearchQuery] = React.useState<string>("");

    useEffect(() => {
        setApplications(
            apps.filter((application) => {
                return (
                    application.displayName
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    application.description
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    application.displayName
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    application.id
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                );
            }),
        );

        // for development purposes only
        // setLayout( "list" )
    }, [apps, searchQuery]);

    return (
        <>
            <UKTextInput
                accessibleName={"Search Applications"}
                placeholder={"Search Applications"}
                className={clippy(styles.searchBar, "top-0 sticky z-10")}
                onSubmit={() => {
                    if (filteredApplications.length === 1) {
                        navigate(`/app/a/${filteredApplications[0].id}`);
                    }
                }}
                getLiveValue={setSearchQuery}
                icon={UKIcons.Search}
            />
            <UKSeparator direction={"column"} className={styles.separator} />
            {applications.length > 0 ? (
                <>
                    {layout === "large-grid" && (
                        <LargeApplicationGrid modules={applications} />
                    )}
                    {layout === "small-grid" && (
                        <SmallApplicationGrid modules={applications} />
                    )}
                    {layout === "list" && (
                        <ApplicationList modules={applications} />
                    )}
                </>
            ) : (
                <>No Applications match the query provided</>
            )}
        </>
    );
};

export default ApplicationsLauncherApplications;
