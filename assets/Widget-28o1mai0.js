import { c as compilerRuntimeExports, j as jsxRuntimeExports, i as UKSeparator } from "./index-BcPuHMck.js";
const SeparatorWidget = (t0) => {
  const $ = compilerRuntimeExports.c(2);
  const {
    side
  } = t0;
  const t1 = side === "top" || side === "bottom" ? "row" : "column";
  let t2;
  if ($[0] !== t1) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKSeparator, { direction: t1 });
    $[0] = t1;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  return t2;
};
export {
  SeparatorWidget as default
};
//# sourceMappingURL=Widget-28o1mai0.js.map
