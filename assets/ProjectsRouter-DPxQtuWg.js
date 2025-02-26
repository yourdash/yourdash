import { c as compilerRuntimeExports, j as jsxRuntimeExports, U as UKImage, b as UKHeading, d as clippy, e as UKFlex, f as UKBox, u as useNavigate, g as UKIconButton, h as UKIcons, i as UKSeparator, k as UKPageHeader, l as UKText, R as Routes, a as Route } from "./index-B8tqQDmo.js";
const component$1 = "_component_1kaw9_6";
const styles$1 = {
  component: component$1
};
const UKNavbarNavImage = (t0) => {
  const $ = compilerRuntimeExports.c(2);
  const {
    src
  } = t0;
  let t1;
  if ($[0] !== src) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKImage, { accessibleLabel: "", src, className: styles$1.component });
    $[0] = src;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  return t1;
};
const UKNavbarNavTitle = (t0) => {
  const $ = compilerRuntimeExports.c(2);
  const {
    title
  } = t0;
  let t1;
  if ($[0] !== title) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { text: title, level: 2 });
    $[0] = title;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  return t1;
};
const component = "_component_yv1j4_6";
const segment = "_segment_yv1j4_20";
const styles = {
  component,
  segment
};
const UKNavBar = (t0) => {
  const $ = compilerRuntimeExports.c(13);
  const {
    leftSection,
    centerSection,
    rightSection,
    className
  } = t0;
  let t1;
  if ($[0] !== className) {
    t1 = clippy(styles.component, className);
    $[0] = className;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== leftSection) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKFlex, { className: styles.segment, direction: "row", children: leftSection });
    $[2] = leftSection;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== centerSection) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKFlex, { className: styles.segment, direction: "row", children: centerSection });
    $[4] = centerSection;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] !== rightSection) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKFlex, { className: styles.segment, direction: "row", children: rightSection });
    $[6] = rightSection;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] !== t1 || $[9] !== t2 || $[10] !== t3 || $[11] !== t4) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsxs(UKBox, { className: t1, children: [
      t2,
      t3,
      t4
    ] });
    $[8] = t1;
    $[9] = t2;
    $[10] = t3;
    $[11] = t4;
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  return t5;
};
const ProjectUiKitIndexPage = () => {
  const $ = compilerRuntimeExports.c(11);
  const navigate = useNavigate();
  let t0;
  if ($[0] !== navigate) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKIconButton, { accessibleLabel: "Go Back to YourDash", icon: UKIcons.YourDashLogo, preserveColor: true, onClick: () => {
      navigate("/");
    } });
    $[0] = navigate;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  let t1;
  let t2;
  let t3;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKSeparator, { direction: "row" });
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKNavbarNavImage, { src: "/assets/productLogos/yourdash.svg" });
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKNavbarNavTitle, { title: "UIKit" });
    $[2] = t1;
    $[3] = t2;
    $[4] = t3;
  } else {
    t1 = $[2];
    t2 = $[3];
    t3 = $[4];
  }
  let t4;
  if ($[5] !== t0) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKNavBar, { leftSection: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      t0,
      t1,
      t2,
      t3
    ] }) });
    $[5] = t0;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKPageHeader, { heading: "UIKit" });
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsxs(UKFlex, { direction: "column", padding: true, centerHorizontally: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { level: 2, text: "What is UIKit?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at culpa explicabo fugit hic inventore iusto minima, temporibus ut vero." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { level: 2, text: "What is UIKit?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at culpa explicabo fugit hic inventore iusto minima, temporibus ut vero." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { level: 2, text: "What is UIKit?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at culpa explicabo fugit hic inventore iusto minima, temporibus ut vero." })
    ] });
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  let t7;
  if ($[9] !== t4) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      t4,
      t5,
      t6
    ] });
    $[9] = t4;
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  return t7;
};
const DocsRouter = () => /* @__PURE__ */ jsxRuntimeExports.jsx(Routes, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "uikit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { index: true, element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectUiKitIndexPage, {}) }) }) });
export {
  DocsRouter as default
};
//# sourceMappingURL=ProjectsRouter-DPxQtuWg.js.map
