import React from "react";
import BaseSetting from "../BaseSetting/BaseSetting";
import { UKButton, UKHeading, UKText } from "@yourdash/uikit";
import { tun, useResource } from "@yourdash/tunnel";
import SettingComponent from "../../../SettingComponent.ts";
import { endpointSchema as getSettingEndpointSchema } from "../../../../../backend/src/endpoints/get/setting/[id]/index.schema.ts";

const BooleanSetting: SettingComponent = ({ definition }) => {
  const data = useResource(() =>
    tun.send(getSettingEndpointSchema, { requestParameters: { id: "test" } }),
  );
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
      about={
        <>
          <UKHeading level={4} text={"Default value"} />
          <UKText
            text={definition.defaultValue?.toString() || "No default value"}
          />
        </>
      }
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
