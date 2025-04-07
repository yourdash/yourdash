/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import React from "react";
import IToast from "./toast.ts";

const ToastContext = React.createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  showToast: (data: IToast) => {
    /* empty */
  },
});

export default ToastContext;
