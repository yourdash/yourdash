/*
 * Copyright ©2024 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import React from "react";
import { Card } from "@yourdash/web-client/src/ui/index";

const PlaceholderDashWidget: React.FC = () => {
  return (
    <Card showBorder className={"flex items-center justify-center"}>
      Failed to load widget
    </Card>
  );
};

export default PlaceholderDashWidget;
