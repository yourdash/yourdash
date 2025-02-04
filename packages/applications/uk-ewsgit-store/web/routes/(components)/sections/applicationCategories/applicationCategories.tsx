/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import UKFlex from "@yourdash/uikit/src/components/flex/UKFlex.js";
import UKText from "@yourdash/uikit/src/components/text/UKText.js";
import UKCard from "@yourdash/uikit/src/components/card/UKCard.js";
import UKHeading from "@yourdash/uikit/src/components/heading/UKHeading.js";
import React from "react";
import styles from "./applicationCategories.module.scss";
import tun from "@yourdash/tunnel/src";
import useResource from "@yourdash/tunnel/src/useResource";
import { z } from "zod";

const ApplicationCategories: React.FC = () => {
  const categories =
    useResource(() => tun.get("/uk-ewsgit-store/home/applicationCategories", "json", z.object({}).array()), { return: "data" }) || [];

  return (
    <div className={styles.component}>
      {categories.map((cat) => {
        return (
          <UKCard
            key={cat.id}
            style={{ backgroundImage: cat.backgroundImage }}
          >
            <UKHeading text={cat.displayName} />
            <UKText text={cat.description} />
            <UKFlex direction={"row"}>
              <UKText text={cat.applicationCount.toString()} />
              <UKText text={cat.moduleCount.toString()} />
            </UKFlex>
          </UKCard>
        );
      })}
    </div>
  );
};

export default ApplicationCategories;
