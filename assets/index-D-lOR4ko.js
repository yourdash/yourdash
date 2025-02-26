import { c as compilerRuntimeExports, q as React, v as useResource, r as reactExports, t as tun, z, j as jsxRuntimeExports, g as UKIconButton, h as UKIcons, b as UKHeading, e as UKFlex, o as UKCard, i as UKSeparator, A as UKButton, s as UKTextInput, B as DASH_ICON, a as Route, R as Routes } from "./index-B8tqQDmo.js";
import { U as UKContainer } from "./UKContainer-Yn42aOXB.js";
import { U as UKCarousel } from "./UKCarousel-CCt2BSER.js";
import ApplicationPanelContext from "@yourdash/web/src/app/panel/ApplicationPanelContext.tsx";
const page = "_page_1qsku_10";
const header = "_header_1qsku_22";
const widgetsCarouselContainer = "_widgetsCarouselContainer_1qsku_29";
const editModeCardContainer = "_editModeCardContainer_1qsku_38";
const carousel = "_carousel_1qsku_45";
const widgetGrid = "_widgetGrid_1qsku_57";
const styles = {
  page,
  header,
  widgetsCarouselContainer,
  editModeCardContainer,
  carousel,
  widgetGrid
};
const DashApplication = () => {
  const $ = compilerRuntimeExports.c(34);
  const applicationPanelContext = React.useContext(ApplicationPanelContext);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      return: "data"
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const dashboard = useResource(_temp$1, t0);
  const [isWidgetEditMode, setIsWidgetEditMode] = reactExports.useState(false);
  let t1;
  if ($[1] !== applicationPanelContext) {
    t1 = () => {
      applicationPanelContext.setControls(/* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(UKIconButton, { icon: UKIcons.Pencil, onClick: () => {
        setIsWidgetEditMode(_temp2);
      }, accessibleLabel: "Edit" }, "dash-icon-button") }));
    };
    $[1] = applicationPanelContext;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  let t2;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = [];
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  reactExports.useEffect(t1, t2);
  let t3;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = function headerPaddingLevelToValue2(paddingLevel) {
      switch (paddingLevel) {
        case "small": {
          return "5rem";
        }
        case "medium": {
          return "10rem";
        }
        case "large": {
          return "16rem";
        }
        default: {
          return "2rem";
        }
      }
    };
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  const headerPaddingLevelToValue = t3;
  if (!dashboard) {
    let t42;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
      t42 = /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "LOADING..." });
      $[5] = t42;
    } else {
      t42 = $[5];
    }
    return t42;
  }
  let t4;
  if ($[6] !== dashboard.background.type || $[7] !== dashboard.background.value) {
    t4 = dashboard.background.type === "color" ? {
      backgroundColor: dashboard.background.value
    } : dashboard.background.type === "linearGradient" ? {
      backgroundImage: `linear-gradient(${dashboard.background.value})`
    } : {
      backgroundImage: `url(${tun.baseUrl + "/uk-ewsgit-dash/backgroundImage"})`
    };
    $[6] = dashboard.background.type;
    $[7] = dashboard.background.value;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  const t5 = `${dashboard.header.background.opacity}`;
  const t6 = `blur(${4 * dashboard.header.background.blur}rem)`;
  const t7 = headerPaddingLevelToValue(dashboard.header.size);
  const t8 = headerPaddingLevelToValue(dashboard.header.size);
  let t9;
  if ($[9] !== t5 || $[10] !== t6 || $[11] !== t7 || $[12] !== t8) {
    t9 = {
      "--opacity": t5,
      backdropFilter: t6,
      paddingTop: t7,
      paddingBottom: t8
    };
    $[9] = t5;
    $[10] = t6;
    $[11] = t7;
    $[12] = t8;
    $[13] = t9;
  } else {
    t9 = $[13];
  }
  const t10 = `${dashboard.header.font.size}rem`;
  let t11;
  if ($[14] !== dashboard.header.font.family || $[15] !== dashboard.header.font.weight || $[16] !== t10) {
    t11 = {
      fontFamily: dashboard.header.font.family,
      fontWeight: dashboard.header.font.weight,
      fontSize: t10
    };
    $[14] = dashboard.header.font.family;
    $[15] = dashboard.header.font.weight;
    $[16] = t10;
    $[17] = t11;
  } else {
    t11 = $[17];
  }
  let t12;
  if ($[18] !== dashboard.header.welcomeMessage || $[19] !== dashboard.user.forename || $[20] !== dashboard.user.surname) {
    t12 = dashboard.header.welcomeMessage.replace(`%username%`, `${dashboard.user.forename} ${dashboard.user.surname}`);
    $[18] = dashboard.header.welcomeMessage;
    $[19] = dashboard.user.forename;
    $[20] = dashboard.user.surname;
    $[21] = t12;
  } else {
    t12 = $[21];
  }
  let t13;
  if ($[22] !== t11 || $[23] !== t12) {
    t13 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { style: t11, level: 1, text: t12 });
    $[22] = t11;
    $[23] = t12;
    $[24] = t13;
  } else {
    t13 = $[24];
  }
  let t14;
  if ($[25] !== t13 || $[26] !== t9) {
    t14 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKFlex, { className: styles.header, direction: "column", centerHorizontally: true, centerVertically: true, style: t9, children: t13 });
    $[25] = t13;
    $[26] = t9;
    $[27] = t14;
  } else {
    t14 = $[27];
  }
  let t15;
  if ($[28] !== isWidgetEditMode) {
    t15 = isWidgetEditMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UKCard, { containerClassName: styles.editModeCardContainer, className: styles.editModeCard, actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKSeparator, { direction: "column" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(UKFlex, { direction: "row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKButton, { text: "Cancel", onClick: () => {
          setIsWidgetEditMode(false);
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKButton, { text: "Submit", onClick: _temp3 })
      ] })
    ] }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { text: "Content", style: {
        textAlign: "start"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKSeparator, { direction: "column" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(UKFlex, { direction: "row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(UKContainer, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { style: {
            textAlign: "start"
          }, text: "Header font size", level: 4 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(UKTextInput, { getValue: _temp4, placeholder: "4rem", accessibleName: "Header font size" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(UKContainer, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { style: {
            textAlign: "start"
          }, text: "Header font family", level: 4 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(UKTextInput, { getValue: _temp5, placeholder: "Inter", accessibleName: "Header font family" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(UKContainer, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { style: {
            textAlign: "start"
          }, text: "Header font weight", level: 4 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(UKTextInput, { getValue: _temp6, placeholder: "900", accessibleName: "Header font weight" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(UKContainer, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { style: {
            textAlign: "start"
          }, text: "Header background opacity (%)", level: 4 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(UKTextInput, { getValue: _temp7, placeholder: "0.75 (75%)", accessibleName: "Header background opacity" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(UKContainer, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { style: {
            textAlign: "start"
          }, text: "Header background blur (%)", level: 4 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(UKTextInput, { getValue: _temp8, placeholder: "0.75 (75%)", accessibleName: "Header background blur" })
        ] })
      ] })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(UKFlex, { direction: "row", className: styles.widgetsCarouselContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsx(UKCarousel, { className: styles.carousel, items: [{
      element: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.widgetGrid, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" })
      ] }),
      id: "page1"
    }, {
      element: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.widgetGrid, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: "Item" })
      ] }),
      id: "page2"
    }] }) });
    $[28] = isWidgetEditMode;
    $[29] = t15;
  } else {
    t15 = $[29];
  }
  let t16;
  if ($[30] !== t14 || $[31] !== t15 || $[32] !== t4) {
    t16 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.page, style: t4, children: [
      t14,
      t15
    ] });
    $[30] = t14;
    $[31] = t15;
    $[32] = t4;
    $[33] = t16;
  } else {
    t16 = $[33];
  }
  return t16;
};
function _temp$1() {
  return tun.get(`/uk-ewsgit-dash/dashboard`, "json", z.object({
    header: z.object({
      welcomeMessage: z.string(),
      size: z.union([z.literal("small"), z.literal("medium"), z.literal("large")]),
      style: z.union([z.literal("floating"), z.literal("docked")]),
      background: z.object({
        blur: z.number(),
        opacity: z.number()
      }),
      font: z.object({
        family: z.string().optional(),
        weight: z.number(),
        size: z.number()
      })
    }),
    background: z.union([z.object({
      type: z.literal("image")
    }), z.object({
      type: z.literal("color"),
      value: z.string()
    }), z.object({
      type: z.literal("linearGradient"),
      value: z.string()
    }), z.object({
      type: z.literal("radialGradient"),
      value: z.string()
    })]),
    content: z.object({
      background: z.object({
        blur: z.number(),
        opacity: z.number()
      }),
      pages: z.object({
        id: z.string(),
        data: z.any(),
        dimensions: z.object({
          width: z.number(),
          height: z.number()
        }),
        position: z.object({
          x: z.number(),
          y: z.number()
        })
      }).array()
    }),
    user: z.object({
      username: z.string(),
      forename: z.string(),
      surname: z.string()
    })
  }));
}
function _temp2(wem) {
  return !wem;
}
function _temp3() {
  return 0;
}
function _temp4() {
}
function _temp5() {
}
function _temp6() {
}
function _temp7() {
}
function _temp8() {
}
const DashRouter = () => {
  const $ = compilerRuntimeExports.c(5);
  const applicationPanelContext = React.useContext(ApplicationPanelContext);
  let t0;
  if ($[0] !== applicationPanelContext) {
    t0 = () => {
      applicationPanelContext.setApplicationDisplayName("Dash");
      applicationPanelContext.setApplicationIcon(DASH_ICON);
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
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { index: true, element: /* @__PURE__ */ jsxRuntimeExports.jsx(DashApplication, {}) });
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
      t2,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "settings", element: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Settings Page" }) })
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
//# sourceMappingURL=index-D-lOR4ko.js.map
