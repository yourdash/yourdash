/*
 * Copyright ©2024 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import Card from "@yourdash/uikit/components/card/card";
import Flex from "@yourdash/uikit/components/flex/flex";
import Heading from "@yourdash/uikit/components/heading/heading";
import Subtext from "@yourdash/uikit/components/subtext/subtext";
import Text from "@yourdash/uikit/components/text/text";
import React from "react";
import ISetting from "../../../shared/types/setting";
import SETTING_TYPE from "../../../shared/types/settingType";
import styles from "./baseSetting.module.scss";

const BaseSetting: React.FC<{ children: React.ReactNode | React.ReactNode[]; setting: ISetting<SETTING_TYPE> }> = ({
  children,
  setting,
}) => {
  return (
    <Card className={styles.component}>
      <Flex direction={"column"}>
        <Heading
          level={5}
          text={setting.displayName || setting.id}
        />
        {setting.description && <Subtext text={setting.description} />}
        <Text text={setting.type} />
      </Flex>
      {children}
    </Card>
  );
};

export default BaseSetting;
