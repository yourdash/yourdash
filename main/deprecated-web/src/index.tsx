/*
 * Copyright ©2024 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import csi from "@yourdash/csi/csi.js";
import EndpointResponseCoreApplicationRouter from "@yourdash/shared/endpoints/core/applicationRouter.js";
import UIKitRoot from "@yourdash/uikit/core/root.js";
/* @refresh reload */
import { render } from "solid-js/web";
// @ts-ignore

// begin imports here
import "./index.css";
import { Router, Route } from "@solidjs/router";
import { createResource, lazy } from "solid-js";
import "animate.css";
import ApplicationRoute from "./app/applicationRoute.js";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error("YourDash Initialization Error: SolidRoot element not found!!!");
}

render(() => {
  return (
    <UIKitRoot>
      <Router>
        <Route path={"/login"}>
          <Route
            path={"/"}
            component={lazy(() => import("./login/index.preload"))}
          />
          <Route
            path={"/instance"}
            component={lazy(() => import("./login/instance/index"))}
          />
          <Route
            path={"/signup"}
            component={lazy(() => import("./login/signup/index"))}
          />
          <Route
            path={"/success"}
            component={lazy(() => import("./login/success/index"))}
          />
        </Route>
        <Route path={"/app/:applicationId"}>
          <ApplicationRoute applicationId={"dash"} />
        </Route>
        <Route
          path="/*"
          component={lazy(() => import("./root/layout"))}
        >
          <Route
            path={"/"}
            component={lazy(() => import("./root/index"))}
          />
        </Route>
        <Route
          path={"/docs"}
          component={lazy(() => import("./docs/layout"))}
        >
          <Route
            path={"/"}
            component={lazy(() => import("./docs/index"))}
          />
        </Route>
      </Router>
    </UIKitRoot>
  );
}, root!);