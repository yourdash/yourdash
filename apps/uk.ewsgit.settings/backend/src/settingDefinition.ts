import * as JSON from "ts-typed-json";

export default interface SettingDefinition {
  id: string;
  title: string;
  description: string;
  type: string;
  defaultValue: JSON.Value;
  disabled?: boolean;
  metadata?: JSON.Object;
}
