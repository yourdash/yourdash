import React from "react";
import BaseSetting from "../BaseSetting/BaseSetting";
import { UKButton } from "@yourdash/uikit";

const BooleanSetting: React.FC<{
  title: string;
  settingId: string;
  description: string;
  defaultValue: boolean;
  currentValue: boolean;
  disabled: boolean;
}> = ({
  title,
  settingId,
  description,
  defaultValue,
  currentValue,
  disabled,
}) => {
  const [val, setVal] = React.useState<boolean>(currentValue);

  return (
    <BaseSetting
      title={title}
      description={description}
      settingId={settingId}
      isDefaultValue={val === defaultValue}
      setDefaultValue={() => setVal(defaultValue)}
    >
      <UKButton
        disabled={disabled}
        text={`${val}`}
        onClick={() => {
          setVal(!val);
        }}
      />
    </BaseSetting>
  );
};

export default BooleanSetting;
