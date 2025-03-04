/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import tun from "@yourdash/tunnel-embedded/src/index.js";
import useResource from "@yourdash/tunnel-embedded/src/useResource.js";
import { FC } from "react";
import { z } from "zod";
import PhotoGrid from "../components/PhotoGrid/PhotoGrid.tsx";
import styles from "./index.module.scss";
import UKHeading from "@yourdash/uikit/src/components/heading/UKHeading.tsx";
import UKSeparator from "@yourdash/uikit/src/components/separator/UKSeparator.tsx";
import React from "react";

const IndexPage: FC = () => {
  const itemsReq = useResource(
    () => tun.get("/uk-ewsgit-photos/albums/Users/admin/Pictures", "json", z.object({ items: z.object({}).array() })),
    { return: "data" },
  );

  return (
    <>
      <div className={styles.page}>
        <UKHeading
          level={1}
          text={"All Photos"}
        />
        <UKSeparator direction={"column"} />
        <PhotoGrid
          items={itemsReq?.items ?? []}
          onFetchNewPage={() => {
            return 0;
          }}
        />
      </div>
    </>
  );
};

export default IndexPage;
