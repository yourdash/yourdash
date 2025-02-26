import { c as compilerRuntimeExports, F as useParams, r as reactExports, j as jsxRuntimeExports, b as UKHeading, l as UKText, i as UKSeparator, s as UKTextInput, o as UKCard, A as UKButton, t as tun, z, q as React, a as Route, R as Routes } from "./index-BcPuHMck.js";
import ApplicationPanelContext from "@yourdash/web/src/app/panel/ApplicationPanelContext.tsx";
const LoginNextcloudFlowV2Page = () => {
  const $ = compilerRuntimeExports.c(11);
  const {
    token
  } = useParams();
  const [username, setUsername] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [successful, setSuccessful] = reactExports.useState(false);
  if (!token) {
    let t02;
    if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
      t02 = /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "No token" });
      $[0] = t02;
    } else {
      t02 = $[0];
    }
    return t02;
  }
  if (successful) {
    let t02;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
      t02 = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { text: "Successfully authenticated!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: "You may now safely close the tab." })
      ] });
      $[1] = t02;
    } else {
      t02 = $[1];
    }
    return t02;
  }
  let t0;
  let t1;
  let t2;
  let t3;
  let t4;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { text: "Nextcloud Compatability login flow" });
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKSeparator, { direction: "column" });
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKTextInput, { accessibleName: "", placeholder: "username", type: "username", getValue: setUsername });
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKTextInput, { accessibleName: "", placeholder: "password", type: "password", getValue: setPassword });
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKSeparator, { direction: "column" });
    $[2] = t0;
    $[3] = t1;
    $[4] = t2;
    $[5] = t3;
    $[6] = t4;
  } else {
    t0 = $[2];
    t1 = $[3];
    t2 = $[4];
    t3 = $[5];
    t4 = $[6];
  }
  let t5;
  if ($[7] !== password || $[8] !== token || $[9] !== username) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsxs(UKCard, { children: [
      t0,
      t1,
      t2,
      t3,
      t4,
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKButton, { text: "Login", onClick: async () => {
        var _a;
        const resp = await tun.post("/uk-ewsgit-nextcloud/login/nextcloud/flow/v2/authenticate", {
          username,
          password,
          pollToken: token
        }, "json", z.object({
          error: z.string()
        }).or(z.object({
          success: z.boolean()
        })));
        if (((_a = resp == null ? void 0 : resp.data) == null ? void 0 : _a.success) === true) {
          setSuccessful(true);
          setTimeout(_temp$1, 2e3);
          return 0;
        }
      } })
    ] });
    $[7] = password;
    $[8] = token;
    $[9] = username;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  return t5;
};
function _temp$1() {
  window.close();
}
const DashRouter = () => {
  const $ = compilerRuntimeExports.c(5);
  const applicationPanelContext = React.useContext(ApplicationPanelContext);
  let t0;
  if ($[0] !== applicationPanelContext) {
    t0 = () => {
      applicationPanelContext.setApplicationDisplayName("Nextcloud");
      applicationPanelContext.setApplicationIcon("");
      applicationPanelContext.setOnBackButton(_temp);
      applicationPanelContext.setShowBackButton(false);
    };
    $[0] = applicationPanelContext;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  let t1;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  reactExports.useEffect(t0, t1);
  let t2;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { index: true, element: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "The YourDash Nextcloud compatability layer - created by Ewsgit" }) });
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
      t2,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "flow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "v2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: ":token", element: /* @__PURE__ */ jsxRuntimeExports.jsx(LoginNextcloudFlowV2Page, {}) }) }) })
    ] });
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  return t3;
};
function _temp() {
}
export {
  DashRouter as default
};
//# sourceMappingURL=index-Dun0bUpq.js.map
