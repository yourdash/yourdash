/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import tun from "@yourdash/tunnel/src/index.js";
import useResource from "@yourdash/tunnel/src/useResource.js";
import UKBox from "@yourdash/uikit/src/components/box/UKBox.js";
import UKContainer from "@yourdash/uikit/src/components/container/UKContainer.js";
import UKHeading from "@yourdash/uikit/src/components/heading/UKHeading.js";
import React from "react";
import { z } from "zod";
import { IFilesView } from "../view";
import Connections from "./views/connections/connections";
import RecentFiles from "./views/recentFiles/recentFiles";
import SharedFiles from "./views/sharedFiles/sharedFiles";
import styles from "./homeTab.module.scss";
import CommonStorageLocations from "./views/commonStorageLocations/commonStorageLocations";

const HomeTabView: React.FC<{ view: IFilesView }> = ({ view }) => {
  const homeTabData = useResource(
    () =>
      tun.get(
        "/app/uk-ewsgit-files/tabView/home",
        "json",
        z.object({
          recentFiles: z.object({}).array(),
          sharedFiles: z.object({}).array(),
          commonStorageLocations: z
            .object({
              path: z.string(),
              baseName: z.string(),
            })
            .array(),
          connections: z
            .object({
              serviceName: z.string(),
              description: z.string(),
              url: z.string(),
              quota: z.object({ max: z.number(), usage: z.number(), unit: z.string() }),
              id: z.string(),
              serviceLogo: z.string().or(z.undefined()),
            })
            .array(),
        }),
      ),
    {
      dependencies: [view],
      return: "data",
    },
  );

  if (!homeTabData) {
    return (
      <>
        <UKBox className={styles.view}>
          <UKHeading text={"Home Loading..."} />
        </UKBox>
      </>
    );
  }

  return (
    <UKBox
      style={{ border: "none" }}
      className={styles.view}
    >
      <CommonStorageLocations commonStorageLocations={homeTabData?.commonStorageLocations ?? []} />
      <RecentFiles />
      <Connections connections={homeTabData?.connections ?? []} />
      <SharedFiles />
    </UKBox>
  );
};

export default HomeTabView;
