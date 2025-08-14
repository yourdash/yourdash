import React from "react";
import BaseSetting from "../BaseSetting/BaseSetting";
import { UKHeading, UKText, UKTextInput } from "@yourdash/uikit";
import SettingComponent from "../../../SettingComponent.ts";
import { RgbColorPicker } from "react-colorful";

const ColorSetting: SettingComponent = ({ definition }) => {
  const [val, setVal] = React.useState<string>(
    definition.defaultValue as string,
  );

  return (
    <BaseSetting
      title={definition.title}
      description={definition.description}
      settingId={definition.id}
      isDefaultValue={val === definition.defaultValue}
      setDefaultValue={() => setVal(definition.defaultValue as string)}
      about={
        <>
          <UKHeading level={4} text={"Default value"} />
          <UKText
            text={definition.defaultValue?.toString() || "No default value"}
          />
        </>
      }
    >
      <RgbColorPicker
        onChange={(val) => setVal(`${val.r}, ${val.g}, ${val.b}`)}
      />
      <UKText text={val} />
    </BaseSetting>
  );
};

export default ColorSetting;
