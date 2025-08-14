/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import React, { useEffect } from "react";
import ApplicationPanelContext from "@yourdash/web/src/lib/panelContext.ts";
import { UKFlex, UKSpinner } from "@yourdash/uikit";

const TemplateApplication: React.FC = () => {
  const applicationPanelContext = React.useContext(ApplicationPanelContext);

  useEffect(() => {
    applicationPanelContext.setControls(<></>);
  }, []);

  return (
    <UKFlex
      centerHorizontally
      centerVertically
      direction="row"
      style={{ height: "100%" }}
    >
      <UKSpinner></UKSpinner>
    </UKFlex>
  );
};

export default TemplateApplication;
