import React from "react";
import SettingDefinition from "../../backend/src/settingDefinition.ts";
import BooleanSetting from "./root/components/BooleanSetting/BooleanSetting.tsx";

type SettingComponent = React.FC<{ definition: SettingDefinition }>;

export default SettingComponent;

const defaultRegisteredSettingComponents: { [key: string]: SettingComponent } =
  {
    boolean: BooleanSetting,
    string: BooleanSetting,
    number: BooleanSetting,
    color: BooleanSetting,
    multipleChoice: BooleanSetting,
  };

export { defaultRegisteredSettingComponents };
