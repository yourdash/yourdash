import React from "react";
import SettingDefinition from "../../backend/src/settingDefinition.ts";
import BooleanSetting from "./root/components/BooleanSetting/BooleanSetting.tsx";
import StringSetting from "./root/components/StringSetting/StringSetting.tsx";
import ColorSetting from "./root/components/ColorSetting/ColorSetting.tsx";

type SettingComponent = React.FC<{ definition: SettingDefinition }>;

export default SettingComponent;

const defaultRegisteredSettingComponents: { [key: string]: SettingComponent } =
  {
    boolean: BooleanSetting,
    string: StringSetting,
    number: BooleanSetting,
    color: ColorSetting,
    multipleChoice: BooleanSetting,
  };

export { defaultRegisteredSettingComponents };
