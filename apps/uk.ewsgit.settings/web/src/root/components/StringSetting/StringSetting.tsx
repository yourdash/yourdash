import React from "react";
import BaseSetting from "../BaseSetting/BaseSetting";
import { UKButton, UKHeading, UKText, UKTextInput } from "@yourdash/uikit";
import { tun } from "@yourdash/tunnel";
import { endpointSchema as SetSettingEndpointSchema } from "../../../../../backend/src/endpoints/post/setting/index.schema.ts";
import SettingComponent from "../../../SettingComponent.ts";

const StringSetting: SettingComponent = ({ definition }) => {
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
      <UKTextInput
        value={`${val}`}
        accessibleName={definition.title}
        placeholder={definition.defaultValue as string}
        onSubmit={async (newVal) => {
          setVal(newVal);

          await tun.send(SetSettingEndpointSchema, {
            body: { id: definition.id, value: newVal },
          });
        }}
      />
    </BaseSetting>
  );
};

export default StringSetting;
