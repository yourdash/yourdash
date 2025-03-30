/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import useToast from "@yourdash/uikit-embedded/src/core/toasts/useToast.js";
import React, { useEffect } from "react";
import stripAnsi from "strip-ansi";

enum LOG_TYPE {
  INFO,
  WARNING,
  ERROR,
  SUCCESS,
  DEBUG,
}

const WebsocketToasts: React.FC = () => {
  // TEMPORARY
  return <></>;

  // if (window.location.hostname !== "localhost") return <></>;
  //
  // const wsc = useWebsocketConnection("/core/log");
  // const toast = useToast();
  //
  // useEffect(() => {
  //   if (!wsc) return;
  //
  //   wsc.on(LOG_TYPE.INFO.toString(), (data: string[]) => {
  //     toast.create({ type: "info", content: { title: data[0], body: stripAnsi(data.slice(1).join("\n")).replaceAll("", "") } });
  //   });
  //
  //   wsc.on(LOG_TYPE.WARNING.toString(), (data: string[]) => {
  //     toast.create({ type: "warning", content: { title: data[0], body: stripAnsi(data.slice(1).join("\n")).replaceAll("", "") } });
  //   });
  //
  //   wsc.on(LOG_TYPE.ERROR.toString(), (data: string[]) => {
  //     toast.create({ type: "error", content: { title: data[0], body: stripAnsi(data.slice(1).join("\n")).replaceAll("", "") } });
  //   });
  //
  //   wsc.on(LOG_TYPE.SUCCESS.toString(), (data: string[]) => {
  //     toast.create({ type: "success", content: { title: data[0], body: stripAnsi(data.slice(1).join("\n")).replaceAll("", "") } });
  //   });
  //
  //   wsc.on(LOG_TYPE.DEBUG.toString(), (data: string[]) => {
  //     toast.create({ type: "debug", content: { title: data[0], body: stripAnsi(data.slice(1).join("\n")).replaceAll("", "") } });
  //   });
  // }, [wsc]);

  return <></>;
};

export default WebsocketToasts;
