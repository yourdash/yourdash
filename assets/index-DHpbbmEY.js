import { c as compilerRuntimeExports, q as React, r as reactExports, j as jsxRuntimeExports, R as Routes } from "./index-BcPuHMck.js";
import ApplicationPanelContext from "@yourdash/web/src/app/panel/ApplicationPanelContext.tsx";
const WEATHER_ICON = "" + new URL("icon-BgrrNGJ2.avif", import.meta.url).href;
const WeatherRouter = () => {
  const $ = compilerRuntimeExports.c(4);
  const applicationPanelContext = React.useContext(ApplicationPanelContext);
  let t0;
  if ($[0] !== applicationPanelContext) {
    t0 = () => {
      applicationPanelContext.setApplicationDisplayName("YourDash Weather");
      applicationPanelContext.setApplicationIcon(WEATHER_ICON);
      applicationPanelContext.setOnBackButton(_temp);
      applicationPanelContext.setShowBackButton(false);
      applicationPanelContext.setControls([]);
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
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(Routes, {});
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  return t2;
};
function _temp() {
}
export {
  WeatherRouter as default
};
//# sourceMappingURL=index-DHpbbmEY.js.map
