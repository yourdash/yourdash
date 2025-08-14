import * as React from "react";
import SettingsPage from "@yourdash/application-uk-ewsgit-settings-web/src/root/components/SettingsPage/SettingsPage";
// @ts-ignore
import settings from "../settings.json";
import SettingDefinition from "../../../../uk.ewsgit.settings/backend/src/settingDefinition";

const SettingsPageComponent: React.FC = () => {
  return <SettingsPage settings={settings as SettingDefinition[]} displayName={"Dash"}></SettingsPage>;
};

export default SettingsPageComponent;
