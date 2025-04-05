/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import React, { useEffect, useState } from "react";
import styles from "./dashApplication.module.scss";
import { z } from "zod";
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
  UKText,
  UKTextInput,
} from "@yourdash/uikit";

const DashApplication: React.FC = () => {
  const applicationPanelContext = React.useContext(ApplicationPanelContext);
  const dashboard = useResource(
    () =>
      tun.get(
        `/uk-ewsgit-dash/dashboard`,
        "json",
        z.object({
          header: z.object({
            welcomeMessage: z.string(),
            size: z.union([
              z.literal("small"),
              z.literal("medium"),
              z.literal("large"),
            ]),
            style: z.union([z.literal("floating"), z.literal("docked")]),
            background: z.object({
              blur: z.number(),
              opacity: z.number(),
            }),
            font: z.object({
              family: z.string().optional(),
              weight: z.number(),
              size: z.number(),
            }),
          }),
          background: z.union([
            z.object({
              type: z.literal("image"),
            }),
            z.object({
              type: z.literal("color"),
              value: z.string(),
            }),
            z.object({
              type: z.literal("linearGradient"),
              value: z.string(),
            }),
            z.object({
              type: z.literal("radialGradient"),
              value: z.string(),
            }),
          ]),
          content: z.object({
            background: z.object({
              blur: z.number(),
              opacity: z.number(),
            }),
            pages: z
              .object({
                id: z.string(),
                data: z.any(),
                dimensions: z.object({
                  width: z.number(),
                  height: z.number(),
                }),
                position: z.object({
                  x: z.number(),
                  y: z.number(),
                }),
              })
              .array(),
          }),
          user: z.object({
            username: z.string(),
            forename: z.string(),
            surname: z.string(),
          }),
        }),
      ),
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
          <UKText text={"TODO: fix the carousel"} />
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
                id: "page2",
              },
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
                id: "page3",
              },
            ]}
          />
        </UKFlex>
      )}
    </div>
  );
};
export default DashApplication;
