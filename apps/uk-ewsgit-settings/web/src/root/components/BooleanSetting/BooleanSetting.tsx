import React from "react";
import BaseSetting from "../BaseSetting/BaseSetting";
import { UKButton, UKText } from "@yourdash/uikit";

const BooleanSetting: React.FC<{
  title: string;
  settingId: string;
  description: string;
  defaultValue: boolean;
  currentValue: boolean;
  setValue: (value: boolean) => void;
  disabled: boolean;
}> = ({
  title,
  settingId,
  description,
  defaultValue,
  currentValue,
  setValue,
  disabled,
}) => {
  return (
    <BaseSetting
      title={title}
      description={description}
      settingId={settingId}
      isDefaultValue={currentValue === defaultValue}
      setDefaultValue={() => setValue(defaultValue)}
    >
      <UKButton
        disabled={disabled}
        text={"Boolean Setting"}
        onClick={() => {
          setValue(false);
        }}
      />
    </BaseSetting>
  );
};

export default BooleanSetting;
