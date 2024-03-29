/*
 * Copyright ©2023 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

export default interface RightClickMenuItem {
  label: string;
  onClick: () => void;
  shortcut?: string;
}
