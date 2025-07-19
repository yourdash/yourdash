import React from "react";
import BaseSetting from "../BaseSetting/BaseSetting";
import { UKButton } from "@yourdash/uikit";
import { tun } from "@yourdash/tunnel";
import { endpointSchema as SetSettingEndpointSchema } from "../../../../../backend/src/endpoints/post/setting/index.schema.ts";
import SettingComponent from "../../../SettingComponent.ts";

/*
 React.FC<{
 title: string;
 settingId: string;
 description: string;
 defaultValue: boolean;
 currentValue: boolean;
 disabled: boolean;
 }>

 title,
 settingId,
 description,
 defaultValue,
 currentValue,
 disabled,
*/

const BooleanSetting: SettingComponent = ({ definition }) => {
  const [val, setVal] = React.useState<boolean>(
    definition.defaultValue as boolean,
  );

  return (
    <BaseSetting
      title={definition.title}
      description={definition.description}
      settingId={definition.id}
      isDefaultValue={val === definition.defaultValue}
      setDefaultValue={() => setVal(definition.defaultValue as boolean)}
    >
      <UKButton
        disabled={definition.disabled || false}
        text={`${val}`}
        onClick={async () => {
          let newVal = !val;
          setVal(newVal);

          await tun.send(SetSettingEndpointSchema, {
            body: { id: definition.id, value: newVal },
          });
        }}
      />
    </BaseSetting>
  );
};

export default BooleanSetting;
