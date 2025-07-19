import React from "react";
import {
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

const SettingsPage: React.FC<
  React.PropsWithChildren<{
    displayName: string;
    settings: SettingDefinition[];
    registeredSettingComponents?: { [key: string]: SettingComponent };
  }>
> = ({ displayName, children, settings, registeredSettingComponents }) => {
  const navigate = useNavigate();
  let combinedRegisteredSettingComponents: { [key: string]: SettingComponent } =
    {
      ...registeredSettingComponents,
      ...defaultRegisteredSettingComponents,
    };

  return (
    <UKFlex
      direction={"column"}
      padding={true}
      style={{
        width: "100%",
      }}
    >
      <UKFlex direction={"row"} centerHorizontally={true}>
        <UKIconButton
          icon={UKIcons.ChevronLeft}
          accessibleLabel={"Go back"}
          onClick={() => {
            navigate("..");
          }}
        />
        <UKHeading text={displayName} />
      </UKFlex>
      <UKSeparator direction={"column"} />
      <>{children}</>
      <>
        {settings.map((setting) => {
          if (combinedRegisteredSettingComponents?.[setting.type]) {
            let Comp = combinedRegisteredSettingComponents[setting.type];

            return <Comp key={setting.id} definition={setting} />;
          }

          return (
            <div>
              Unregistered setting type "{setting.type}" {"->"} "{setting.id}"
            </div>
          );
        })}
      </>
    </UKFlex>
  );
};

export default SettingsPage;
