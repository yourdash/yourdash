import tun from "@yourdash/tunnel/src/index.js";
import useResource from "@yourdash/tunnel/src/useResource.js";
import React from "react";
import { z } from "zod";
import PromotedApplication from "./promotedApplication.tsx";
import UKCarousel from "@yourdash/uikit/src/views/carousel/UKCarousel.js";

const PromotedApplications: React.FC = () => {
  const promotedApplications =
    useResource(() => tun.get("/uk-ewsgit-store/home/promotedApplications", "json", z.object({})), { return: "data" }) || [];

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
