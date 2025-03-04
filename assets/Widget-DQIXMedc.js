import { c as compilerRuntimeExports, j as jsxRuntimeExports, U as UKImage, k as UKText } from "./index-DQoorauR.js";
const component = "_component_fr1oe_10";
const label = "_label_fr1oe_16";
const styles = {
  component,
  label
};
const UserProfileWidget = () => {
  const $ = compilerRuntimeExports.c(2);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKImage, { src: "/favicon.png", accessibleLabel: "User profile" });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.component, children: [
      t0,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.label, children: /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: "User profile" }) })
    ] });
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  return t1;
};
export {
  UserProfileWidget as default
};
//# sourceMappingURL=Widget-DQIXMedc.js.map
