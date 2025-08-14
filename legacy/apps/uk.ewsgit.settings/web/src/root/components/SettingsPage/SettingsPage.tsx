import React from "react";
import {
  UKBox,
  UKContainer,
  UKDecrementLevel,
  UKFlex,
  UKHeading,
  UKIconButton,
  UKIcons,
  UKSeparator,
} from "@yourdash/uikit";
import { useNavigate } from "react-router";
import SettingDefinition from "../../../../../backend/src/settingDefinition.ts";
import SettingComponent, {
  defaultRegisteredSettingComponents,
} from "../../../SettingComponent.ts";
import styles from "./SettingsPage.module.scss";

const SettingsPage: React.FC<
  React.PropsWithChildren<{
    displayName: string;
    settings: SettingDefinition[];
    registeredSettingComponents?: { [key: string]: SettingComponent };
    hideBackButton?: boolean;
  }>
> = ({
  displayName,
  children,
  settings,
  registeredSettingComponents,
  hideBackButton,
}) => {
  const navigate = useNavigate();
  let combinedRegisteredSettingComponents: { [key: string]: SettingComponent } =
    {
      ...registeredSettingComponents,
      ...defaultRegisteredSettingComponents,
    };

  return (
    <UKDecrementLevel>
      <div className={styles.pageContainer}>
        <UKContainer className={styles.page}>
          <UKBox className={styles.header}>
            <UKFlex direction={"row"} centerHorizontally={true}>
              {!hideBackButton && (
                <UKIconButton
                  icon={UKIcons.ChevronLeft}
                  accessibleLabel={"Go back"}
                  onClick={() => {
                    navigate("..");
                  }}
                />
              )}
              <UKHeading text={displayName} />
            </UKFlex>
            <UKSeparator className={styles.separator} direction={"column"} />
          </UKBox>
          <>{children}</>
          <>
            {settings.map((setting) => {
              if (combinedRegisteredSettingComponents?.[setting.type]) {
                let Comp = combinedRegisteredSettingComponents[setting.type];

                return <Comp key={setting.id} definition={setting} />;
              }

              return (
                <div>
                  Unregistered setting type "{setting.type}" {"->"} "
                  {setting.id}"
                </div>
              );
            })}
          </>
        </UKContainer>
      </div>
    </UKDecrementLevel>
  );
};

export default SettingsPage;
