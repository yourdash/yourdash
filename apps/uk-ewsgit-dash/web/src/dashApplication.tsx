/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import React, { useEffect, useState } from "react";
import styles from "./dashApplication.module.scss";
import ApplicationPanelContext from "@yourdash/web/src/lib/panelContext.ts";
import { tun, useResource } from "@yourdash/tunnel";
import {
  UKButton,
  UKCard,
  UKCarousel,
  UKContainer,
  UKFlex,
  UKHeading,
  UKIconButton,
  UKIcons,
  UKSeparator,
  UKTextInput,
} from "@yourdash/uikit";
import { endpointSchema } from "../../backend/src/endpoints/get/dashboard";

const DashApplication: React.FC = () => {
  const applicationPanelContext = React.useContext(ApplicationPanelContext);
  const dashboard = useResource(
    () => tun.get(`/uk-ewsgit-dash/dashboard`, "json", endpointSchema),
    {
      return: "data",
    },
  );
  const [isWidgetEditMode, setIsWidgetEditMode] = useState(false);

  useEffect(() => {
    applicationPanelContext.setControls(
      <>
        <UKIconButton
          icon={UKIcons.Pencil}
          key={"dash-icon-button"}
          onClick={() => {
            setIsWidgetEditMode((wem) => !wem);
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

  if (!dashboard) return <>LOADING...</>;

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
                backgroundImage: `url(${tun.baseUrl + "/uk-ewsgit-dash/backgroundImage"})`,
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
      {isWidgetEditMode ? (
        <>
          <UKCard
            containerClassName={styles.editModeCardContainer}
            className={styles.editModeCard}
            actions={
              <>
                <UKSeparator direction={"column"} />
                <UKFlex direction={"row"}>
                  <UKButton
                    text={"Cancel"}
                    onClick={() => {
                      setIsWidgetEditMode(false);
                    }}
                  />
                  <UKButton
                    text={"Submit"}
                    onClick={() => {
                      return 0;
                    }}
                  />
                </UKFlex>
              </>
            }
          >
            <UKHeading text={"Content"} style={{ textAlign: "start" }} />
            <UKSeparator direction={"column"} />
            <UKFlex direction={"column"} className={styles.parameterContainer}>
              <UKContainer>
                <UKHeading
                  className={styles.heading}
                  style={{ textAlign: "start" }}
                  text={"Header font size"}
                  level={4}
                />
                <UKTextInput
                  className={styles.input}
                  getValue={() => {}}
                  placeholder={"4rem"}
                  accessibleName={"Header font size"}
                />
              </UKContainer>
              <UKContainer>
                <UKHeading
                  className={styles.heading}
                  style={{ textAlign: "start" }}
                  text={"Header font family"}
                  level={4}
                />
                <UKTextInput
                  className={styles.input}
                  getValue={() => {}}
                  placeholder={"Inter"}
                  accessibleName={"Header font family"}
                />
              </UKContainer>
              <UKContainer>
                <UKHeading
                  className={styles.heading}
                  style={{ textAlign: "start" }}
                  text={"Header font weight"}
                  level={4}
                />
                <UKTextInput
                  className={styles.input}
                  getValue={() => {}}
                  placeholder={"900"}
                  accessibleName={"Header font weight"}
                />
              </UKContainer>
              <UKContainer>
                <UKHeading
                  className={styles.heading}
                  style={{ textAlign: "start" }}
                  text={"Header background opacity (%)"}
                  level={4}
                />
                <UKTextInput
                  className={styles.input}
                  getValue={() => {}}
                  placeholder={"0.75 (75%)"}
                  accessibleName={"Header background opacity"}
                />
              </UKContainer>
              <UKContainer>
                <UKHeading
                  className={styles.heading}
                  style={{ textAlign: "start" }}
                  text={"Header background blur (%)"}
                  level={4}
                />
                <UKTextInput
                  className={styles.input}
                  getValue={() => {}}
                  placeholder={"0.75 (75%)"}
                  accessibleName={"Header background blur"}
                />
              </UKContainer>
            </UKFlex>
          </UKCard>
        </>
      ) : (
        <UKFlex direction={"row"} className={styles.widgetsCarouselContainer}>
          <UKCarousel
            className={styles.carousel}
            items={[
              {
                element: (
                  <div className={styles.widgetGrid}>
                    <UKCard>Item</UKCard>
                    <UKCard>Item</UKCard>
                    <UKCard>Item</UKCard>
                    <UKCard>Item</UKCard>
                    <UKCard>Item</UKCard>
                    <UKCard>Item</UKCard>
                    <UKCard>Item</UKCard>
                    <UKCard>Item</UKCard>
                    <UKCard>Item</UKCard>
                    <UKCard>Item</UKCard>
                    <UKCard>Item</UKCard>
                    <UKCard>Item</UKCard>
                  </div>
                ),
                id: "page1",
              },
            ]}
          />
        </UKFlex>
      )}
    </div>
  );
};
export default DashApplication;
