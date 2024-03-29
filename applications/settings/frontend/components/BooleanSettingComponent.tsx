/*
 * Copyright ©2024 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import ToggleSwitch from "@yourdash/uikit/depChiplet/components/toggleSwitch/ToggleSwitch";
import BaseSettingComponent, { IBaseSettingComponent } from "./BaseSettingComponent";
import * as React from "react";

export interface IBooleanSettingComponent extends IBaseSettingComponent {
  setValue(value: boolean): void;

  value: boolean;
}

const BooleanSettingComponent: React.FC<Omit<IBooleanSettingComponent, "children">> = ({
  value,
  setValue,
  ...baseSettingComponentProps
}) => (
  <BaseSettingComponent {...baseSettingComponentProps}>
    <ToggleSwitch setValue={(val) => setValue(val)} value={value} />
  </BaseSettingComponent>
);

export default BooleanSettingComponent;
