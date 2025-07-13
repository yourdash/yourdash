/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import React, { useEffect, useState } from "react";
import styles from "./dashApplication.module.scss";
import ApplicationPanelContext from "@yourdash/web/src/lib/panelContext.ts";
import { tun, useResource } from "@yourdash/tunnel";
import {
  UKCarousel,
  UKCard,
  UKFlex,
  UKHeading,
  UKIconButton,
  UKIcons,
  UKSpinner,
} from "@yourdash/uikit";
import { endpointSchema as dashboardEndpointSchema } from "../../backend/src/endpoints/get/dashboard/index.schema";
import Widget from "./widgets/applicationShortcut";
import { useNavigate } from "react-router";
import loadable from "@loadable/component";
import WIDGETS from "./widgets/widgets";

const DashApplication: React.FC = () => {
  const applicationPanelContext = React.useContext(ApplicationPanelContext);
  const dashboard = useResource(() => tun.send(dashboardEndpointSchema), {
    return: "data",
  });
  const navigate = useNavigate();

  useEffect(() => {
    applicationPanelContext.setControls(
      <>
        <UKIconButton
          icon={UKIcons.Pencil}
          key={"dash-icon-button"}
          onClick={() => {
            // Navigate to the dashboard layout settings
            navigate("/app/a/uk.ewsgit.settings");
          }}
          accessibleLabel={"Edit"}
        />
      </>,
    );
  }, []);

  function headerPaddingLevelToValue(
    paddingLevel: "large" | "medium" | "small",
  ) {
    switch (paddingLevel) {
      case "small":
        return "5rem";
      case "medium":
        return "10rem";
      case "large":
        return "16rem";
      default:
        return "2rem";
    }
  }

  if (!dashboard)
    return (
      <UKFlex
        centerHorizontally
        centerVertically
        direction="row"
        style={{ height: "100%" }}
      >
        <UKSpinner></UKSpinner>
      </UKFlex>
    );

  return (
    <div
      className={styles.page}
      style={
        dashboard.background.type === "color"
          ? { backgroundColor: dashboard.background.value }
          : dashboard.background.type === "linearGradient"
            ? {
                backgroundImage: `linear-gradient(${dashboard.background.value})`,
              }
            : {
                backgroundImage: `url(${tun.baseURL + "/uk.ewsgit.dash/backgroundImage"})`,
              }
      }
    >
      <UKFlex
        className={styles.header}
        direction={"column"}
        centerHorizontally
        centerVertically
        style={{
          // @ts-ignore
          "--opacity": `${dashboard.header.background.opacity}`,
          backdropFilter: `blur(${4 * dashboard.header.background.blur}rem)`,
          paddingTop: headerPaddingLevelToValue(dashboard.header.size),
          paddingBottom: headerPaddingLevelToValue(dashboard.header.size),
        }}
      >
        <UKHeading
          style={{
            fontFamily: dashboard.header.font.family,
            fontWeight: dashboard.header.font.weight,
            fontSize: `${dashboard.header.font.size}rem`,
          }}
          level={1}
          text={dashboard.header.welcomeMessage.replace(
            `%username%`,
            `${dashboard.user.forename} ${dashboard.user.surname}`,
          )}
        />
      </UKFlex>
      <UKFlex direction={"row"} className={styles.widgetsCarouselContainer}>
        <UKCarousel
          className={styles.carousel}
          items={[
            ...dashboard.content.pages.map((page) => {
              return {
                element: (
                  <div className={styles.widgetGrid}>
                    {page.items.map((item) => {
                      if (!Object.keys(WIDGETS).includes(item.id))
                        return <div>Couldn't find widget {item.id}</div>;

                      // @ts-expect-error typescript doesn't understand that this must exist
                      let Wid = WIDGETS[item.id];

                      return (
                        <div>
                          <Wid data={item.data} />
                        </div>
                      );
                    })}
                  </div>
                ),
                id: page.id,
              };
            }),
          ]}
        />
      </UKFlex>
    </div>
  );
};
export default DashApplication;
