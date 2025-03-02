import tun from "@yourdash/tunnel-embedded/src/index.js";
import useResource from "@yourdash/tunnel-embedded/src/useResource.js";
import UKCard from "@yourdash/uikit/src/components/card/UKCard.js";
import UKHeading from "@yourdash/uikit/src/components/heading/UKHeading.js";
import UKSeparator from "@yourdash/uikit/src/components/separator/UKSeparator.js";
import UKText from "@yourdash/uikit/src/components/text/UKText.js";
import React from "react";
import { z } from "zod";
import PromotedApplication from "./promotedApplication.tsx";
import UKCarousel from "@yourdash/uikit/src/views/carousel/UKCarousel.js";
import styles from "./promotedApplications.module.scss";

const PromotedApplications: React.FC = () => {
  const promotedApplications =
    useResource(
      () =>
        tun.get(
          "/uk-ewsgit-store/home/promotedApplications",
          "json",
          z
            .object({
              displayName: z.string(),
              bannerBackground: z.string(),
              developer: z.string(),
              icon: z.string(),
              id: z.string(),
              tags: z.string().array(),
              description: z.string(),
            })
            .array(),
        ),
      { return: "data" },
    ) || [];

  if (promotedApplications.length === 0) {
    return (
      <UKCard containerClassName={styles.noPromotedApplications}>
        <UKHeading
          level={3}
          text={"This instance has no promoted applications..."}
        />
        <UKSeparator direction={"column"} />
        <UKText text={"Nothing to see here!"} />
      </UKCard>
    );
  }

  return (
    <UKCarousel
      items={promotedApplications.map((app) => {
        return {
          id: app.id,
          element: (
            <PromotedApplication
              key={app.id}
              application={app}
            />
          ),
        };
      })}
    />
  );
};

export default PromotedApplications;
