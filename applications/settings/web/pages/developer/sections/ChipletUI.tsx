/*
 * Copyright ©2024 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { UKIcon } from "@yourdash/chiplet/components/icon/iconDictionary";
import SideBar, { SIDEBAR_ITEM_TYPE, SIDEBAR_STATE } from "@yourdash/chiplet/components/sideBar/SideBar";
import React from "react";

const ChipletUIDemoPage: React.FC = () => {
  return (
    <div className={"flex"}>
      <SideBar
        title="Chiplet UI"
        items={[
          {
            type: SIDEBAR_ITEM_TYPE.Button,
            label: "Button",
            icon: UKIcon.FileBadge,
            onClick: () => {
              return 0;
            },
          },
        ]}
        defaultState={SIDEBAR_STATE.NormalMinimised}
      />
      <SideBar
        title="Chiplet UI"
        items={[
          {
            type: SIDEBAR_ITEM_TYPE.Button,
            label: "Button",
            icon: UKIcon.FileBadge,
            onClick: () => {
              return 0;
            },
          },
        ]}
        defaultState={SIDEBAR_STATE.FloatingMinimised}
      />
      <SideBar
        title="Chiplet UI"
        items={[
          {
            type: SIDEBAR_ITEM_TYPE.Button,
            label: "Button",
            icon: UKIcon.FileBadge,
            onClick: () => {
              return 0;
            },
          },
        ]}
        defaultState={SIDEBAR_STATE.FloatingToggleMinimised}
      />
    </div>
  );
};

export default ChipletUIDemoPage;
