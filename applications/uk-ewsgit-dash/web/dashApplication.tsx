/*
 * Copyright ©2024 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import coreCSI from "@yourdash/csi/coreCSI";
import useResource from "@yourdash/csi/useResource";
import ButtonWithIcon from "@yourdash/uikit/components/buttonWithIcon/buttonWithIcon";
import Flex from "@yourdash/uikit/components/flex/flex";
import Heading from "@yourdash/uikit/components/heading/heading";
import { UKIcon } from "@yourdash/uikit/components/icon/iconDictionary";
import React, { useState } from "react";
import styles from "./dashApplication.module.scss";
import { IWidgetGrid } from "../shared/types/widgetGrid";
import loadable from "@loadable/component";
import { acsi } from "./meta.yourdash";
import Button from "@yourdash/uikit/components/button/button";
import clippy from "@yourdash/shared/web/helpers/clippy";

const DashApplication: React.FC = () => {
  const { pageCount } = useResource(() => acsi.getJson<{ pageCount: number }>("/widget/pages")) || {
    pageCount: 0,
  };
  const [currentWidgetPage, setCurrentWidgetPage] = useState<number>(0);
  const widgetPage = useResource(() => acsi.getJson<IWidgetGrid>(`/widgets/${currentWidgetPage}`), [currentWidgetPage]) || {
    widgets: [],
  };
  const [isWidgetEditMode, setIsWidgetEditMode] = useState(false);
  const [tallHeader, setTallHeader] = useState(false);

  return (
    <div className={styles.page}>
      <Flex
        className={clippy(styles.header, tallHeader && styles.tallHeader, isWidgetEditMode && styles.headerEditMode)}
        direction={"row"}
      >
        <Heading
          text={`Hiya, ${coreCSI.userDB.get<{ first: string; last: string }>("user:name")?.first}`}
          level={1}
        />
        {isWidgetEditMode && (
          <>
            <Flex
              direction="row"
              className={styles.headerActions}
            >
              {tallHeader ? (
                <ButtonWithIcon
                  text="Use small header"
                  icon={UKIcon.SidebarCollapse}
                  onClick={() => {
                    setTallHeader(false);
                  }}
                />
              ) : (
                <ButtonWithIcon
                  text="Use tall header"
                  icon={UKIcon.SidebarExpand}
                  onClick={() => {
                    setTallHeader(true);
                  }}
                />
              )}
            </Flex>
          </>
        )}
      </Flex>
      {isWidgetEditMode ? (
        <div className={styles.centeredContent}>
          <Heading text="Edit widgets" />
          <Button
            text="Edit"
            onClick={() => {
              console.log("Edit widgets dialog");
            }}
          />
        </div>
      ) : (
        <div className={styles.widgetGrid}>
          {widgetPage.widgets.map((widget) => {
            const Widget = loadable(() => import(`./widgets/${widget.widgetType}/widget.tsx`));

            return (
              <div
                key={widget.widgetType + JSON.stringify(widget.position)}
                /*@ts-ignore*/
                style={{ "--position-x": widget.position.x, "--position-y": widget.position.y }}
                className={styles.widgetGridWidget}
              >
                <Widget data={widget.data} />
              </div>
            );
          })}
        </div>
      )}
      <Flex
        className={styles.footer}
        direction={"row"}
      >
        <div>
          {Array(pageCount).map((_, index) => {
            return (
              <div
                key={index}
                className={currentWidgetPage === index ? styles.active : undefined}
                onClick={() => setCurrentWidgetPage(index)}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
        <div className={styles.actions}>
          {isWidgetEditMode ? (
            <>
              <ButtonWithIcon
                text={"Confirm edits"}
                icon={UKIcon.Check}
                onClick={() => {
                  setIsWidgetEditMode(false);
                }}
              />
            </>
          ) : (
            <>
              <ButtonWithIcon
                text={"Edit"}
                icon={UKIcon.Pencil}
                onClick={() => {
                  setIsWidgetEditMode(true);
                }}
              />
            </>
          )}
        </div>
      </Flex>
    </div>
  );
};
export default DashApplication;
