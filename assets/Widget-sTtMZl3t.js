import { c as compilerRuntimeExports, d as clippy, j as jsxRuntimeExports, l as UKText } from "./index-BcPuHMck.js";
const LocalhostIndicator = (t0) => {
  const $ = compilerRuntimeExports.c(8);
  const {
    side
  } = t0;
  if (window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
    return null;
  }
  const t1 = side === "top" && "ml-auto";
  const t2 = side === "bottom" && "ml-auto";
  const t3 = side === "left" && "mt-auto";
  const t4 = side === "right" && "mt-auto";
  let t5;
  if ($[0] !== t1 || $[1] !== t2 || $[2] !== t3 || $[3] !== t4) {
    t5 = clippy("flex items-center justify-center h-[var(--app-panel-size)] w-[var(--app-panel-size)] -m-[var(--app-panel-padding)]", t1, t2, t3, t4);
    $[0] = t1;
    $[1] = t2;
    $[2] = t3;
    $[3] = t4;
    $[4] = t5;
  } else {
    t5 = $[4];
  }
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: "</>", className: "text-pink-300" });
    $[5] = t6;
  } else {
    t6 = $[5];
  }
  let t7;
  if ($[6] !== t5) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: t5, children: t6 });
    $[6] = t5;
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  return t7;
};
export {
  LocalhostIndicator as default
};
//# sourceMappingURL=Widget-sTtMZl3t.js.map
