/*
 * Copyright ©2023 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { useContext } from "react";
import IToast from "@yourdash/chiplet/components/toast/IToast";
import ToastContext from "@yourdash/chiplet/components/toast/ToastContext";
import generateUUID from "./uuid";

export default function useYourDashLib() {
  const toast = useContext(ToastContext);

  return {
    toast: {
      success: (title: string, message: string, options?: IToast["params"]) => {
        toast({
          message,
          type: "success",
          params: options,
          title,
          uuid: generateUUID(),
        });
      },
      error: (title: string, message: string, options?: IToast["params"]) => {
        toast({
          message,
          type: "error",
          params: options,
          title,
          uuid: generateUUID(),
        });
      },
      debug: (title: string, message: string, options?: IToast["params"]) => {
        toast({
          message,
          type: "debug",
          params: options,
          title,
          uuid: generateUUID(),
        });
      },
      info: (title: string, message: string, options?: IToast["params"]) => {
        toast({
          message,
          type: "info",
          params: options,
          title,
          uuid: generateUUID(),
        });
      },
      warn: (title: string, message: string, options?: IToast["params"]) => {
        toast({
          message,
          type: "warn",
          params: options,
          title,
          uuid: generateUUID(),
        });
      },
      silent: (title: string, message: string, options?: IToast["params"]) => {
        toast({
          message,
          type: "silent",
          params: options,
          title,
          uuid: generateUUID(),
        });
      },
    },
  };
}
