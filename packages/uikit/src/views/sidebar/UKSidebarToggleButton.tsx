/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import React, { FC, useContext } from "react";
import { UKIcons } from "../../core/iconDictionary.ts";
import UKSidebarContext from "./UKSidebarContext.tsx";
import UKIconButton from "../../components/iconButton/UKIconButton.tsx";

const UKSidebarToggleButton: FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => {
  const sidebarContext = useContext(UKSidebarContext);

  return (
    <UKIconButton
      style={style}
      className={className}
      accessibleLabel={sidebarContext.isOpen ? "Collapse UKSidebar" : "Expand UKSidebar"}
      icon={sidebarContext.isOpen ? UKIcons.SidebarCollapse : UKIcons.SidebarExpand}
      onClick={() => {
        sidebarContext.toggleSidebar();
      }}
    />
  );
};

export default UKSidebarToggleButton;
