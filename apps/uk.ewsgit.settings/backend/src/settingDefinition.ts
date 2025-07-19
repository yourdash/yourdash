export default interface SettingDefinition {
  id: string;
  title: string;
  description: string;
  type: string;
  defaultValue:
    | string
    | number
    | string[]
    | number[]
    | object
    | object[]
    | boolean
    | boolean[];
  disabled?: boolean;
  metadata: {
    [key: string]:
      | string
      | number
      | string[]
      | number[]
      | object
      | object[]
      | boolean
      | boolean[];
  };
}
