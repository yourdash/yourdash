/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import React from "react";
import IToast from "./toast.ts";
import ToastContext from "./toastContext.ts";

export default function useToasts() {
  const toastCtx = React.useContext(ToastContext);

  return {
    create(data: IToast) {
      toastCtx.showToast(data);
    },
  };
}
