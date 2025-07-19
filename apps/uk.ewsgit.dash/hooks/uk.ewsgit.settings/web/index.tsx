import * as React from "react";
import SettingsPage from "@yourdash/application-uk-ewsgit-settings-web/src/root/components/SettingsPage/SettingsPage";
import settings from "../settings.json";

const SettingsPageComponent: React.FC = () => {
  return <SettingsPage settings={settings} displayName={"Dash"}></SettingsPage>;
};

export default SettingsPageComponent;
