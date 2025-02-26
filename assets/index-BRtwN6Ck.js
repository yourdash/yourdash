import { c as compilerRuntimeExports, v as useResource, t as tun, z, j as jsxRuntimeExports, o as UKCard, b as UKHeading, l as UKText$1, e as UKFlex, i as UKSeparator, u as useNavigate, A as UKButton, O as Outlet, r as reactExports, a as Route, R as Routes } from "./index-BcPuHMck.js";
import { a as UKSidebarToggleButton, U as UKSidebar, b as UKSidebarContainer, c as UKOnBoarding } from "./UKSidebarToggleButton-CuPOvZKj.js";
import ApplicationPanelContext from "@yourdash/web/src/app/panel/ApplicationPanelContext.tsx";
import { U as UKCarousel } from "./UKCarousel-NHrwnWjA.js";
import "./UKContainer-CZaq05Vg.js";
const STORE_ICON = "" + new URL("icon-BHQSdTrS.avif", import.meta.url).href;
const component$1 = "_component_1t09s_6";
const noApplicationCategories = "_noApplicationCategories_1t09s_11";
const styles$4 = {
  component: component$1,
  noApplicationCategories
};
const ApplicationCategories = () => {
  const $ = compilerRuntimeExports.c(5);
  const categories = useResource(_temp$3, {
    return: "data"
  }) || [];
  if (categories.length === 0) {
    let t02;
    if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
      t02 = /* @__PURE__ */ jsxRuntimeExports.jsxs(UKCard, { containerClassName: styles$4.noApplicationCategories, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { level: 3, text: "This instance has no application categories..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKSeparator, { direction: "column" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKText$1, { text: "This is not yet implemented, as of 11/2/2025" })
      ] });
      $[0] = t02;
    } else {
      t02 = $[0];
    }
    return t02;
  }
  let t0;
  if ($[1] !== categories) {
    t0 = categories.map(_temp2$1);
    $[1] = categories;
    $[2] = t0;
  } else {
    t0 = $[2];
  }
  let t1;
  if ($[3] !== t0) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$4.component, children: t0 });
    $[3] = t0;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  return t1;
};
function _temp$3() {
  return tun.get("/uk-ewsgit-store/home/applicationCategories", "json", z.object({}).array());
}
function _temp2$1(cat) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(UKCard, { style: {
    backgroundImage: cat.backgroundImage
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { text: cat.displayName }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(UKText$1, { text: cat.description }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(UKFlex, { direction: "row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKText$1, { text: cat.applicationCount.toString() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKText$1, { text: cat.moduleCount.toString() })
    ] })
  ] }, cat.id);
}
const component = "_component_1o3pj_10";
const center = "_center_1o3pj_24";
const icon = "_icon_1o3pj_32";
const displayName = "_displayName_1o3pj_36";
const description = "_description_1o3pj_39";
const footer = "_footer_1o3pj_43";
const developer = "_developer_1o3pj_50";
const tags = "_tags_1o3pj_53";
const tag = "_tag_1o3pj_53";
const styles$3 = {
  component,
  center,
  icon,
  displayName,
  description,
  footer,
  developer,
  tags,
  tag
};
const PromotedApplications$1 = (t0) => {
  const $ = compilerRuntimeExports.c(22);
  const {
    application
  } = t0;
  console.log(application);
  let t1;
  if ($[0] !== application.icon) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKImage, { className: styles$3.icon, accessibleLabel: "", src: application.icon });
    $[0] = application.icon;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== application.displayName) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { level: 1, text: application.displayName, className: styles$3.displayName });
    $[2] = application.displayName;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== t1 || $[5] !== t2) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3.center, children: [
      t1,
      t2
    ] });
    $[4] = t1;
    $[5] = t2;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  let t4;
  if ($[7] !== application.description) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { level: 5, text: application.description, className: styles$3.description });
    $[7] = application.description;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  let t5;
  if ($[9] !== application.developer) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: application.developer, className: styles$3.developer });
    $[9] = application.developer;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  let t6;
  if ($[11] !== application.tags) {
    t6 = application.tags.map(_temp$2);
    $[11] = application.tags;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  let t7;
  if ($[13] !== t6) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3.tags, children: t6 });
    $[13] = t6;
    $[14] = t7;
  } else {
    t7 = $[14];
  }
  let t8;
  if ($[15] !== t5 || $[16] !== t7) {
    t8 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3.footer, children: [
      t5,
      t7
    ] });
    $[15] = t5;
    $[16] = t7;
    $[17] = t8;
  } else {
    t8 = $[17];
  }
  let t9;
  if ($[18] !== t3 || $[19] !== t4 || $[20] !== t8) {
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3.component, children: [
      t3,
      t4,
      t8
    ] });
    $[18] = t3;
    $[19] = t4;
    $[20] = t8;
    $[21] = t9;
  } else {
    t9 = $[21];
  }
  return t9;
};
function _temp$2(tag2) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3.tag, children: /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: tag2 }) });
}
const noPromotedApplications = "_noPromotedApplications_nht7r_6";
const styles$2 = {
  noPromotedApplications
};
const PromotedApplications = () => {
  const $ = compilerRuntimeExports.c(5);
  const promotedApplications = useResource(_temp$1, {
    return: "data"
  }) || [];
  if (promotedApplications.length === 0) {
    let t02;
    if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
      t02 = /* @__PURE__ */ jsxRuntimeExports.jsxs(UKCard, { containerClassName: styles$2.noPromotedApplications, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { level: 3, text: "This instance has no promoted applications..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKSeparator, { direction: "column" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKText$1, { text: "Nothing to see here!" })
      ] });
      $[0] = t02;
    } else {
      t02 = $[0];
    }
    return t02;
  }
  let t0;
  if ($[1] !== promotedApplications) {
    t0 = promotedApplications.map(_temp2);
    $[1] = promotedApplications;
    $[2] = t0;
  } else {
    t0 = $[2];
  }
  let t1;
  if ($[3] !== t0) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKCarousel, { items: t0 });
    $[3] = t0;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  return t1;
};
function _temp$1() {
  return tun.get("/uk-ewsgit-store/home/promotedApplications", "json", z.object({
    displayName: z.string(),
    bannerBackground: z.string(),
    developer: z.string(),
    icon: z.string(),
    id: z.string(),
    tags: z.string().array(),
    description: z.string()
  }).array());
}
function _temp2(app) {
  return {
    id: app.id,
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(PromotedApplications$1, { application: app }, app.id)
  };
}
const page = "_page_11paw_10";
const reccommendedHeading = "_reccommendedHeading_11paw_19";
const categoriesHeading = "_categoriesHeading_11paw_24";
const sidebarToggleButton = "_sidebarToggleButton_11paw_29";
const styles$1 = {
  page,
  reccommendedHeading,
  categoriesHeading,
  sidebarToggleButton
};
const ApplicationIndexPage = () => {
  const $ = compilerRuntimeExports.c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.page, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKSidebarToggleButton, { className: styles$1.sidebarToggleButton }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { className: styles$1.reccommendedHeading, text: "Recommended Applications" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKSeparator, { direction: "column" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PromotedApplications, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { text: "Categories", className: styles$1.categoriesHeading }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKSeparator, { direction: "column" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ApplicationCategories, {})
    ] });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
const content = "_content_1dyom_1";
const sidebarContainer = "_sidebarContainer_1dyom_7";
const styles = {
  content,
  sidebarContainer
};
const ApplicationLayout = () => {
  const $ = compilerRuntimeExports.c(19);
  const navigateTo = useNavigate();
  let t0;
  if ($[0] !== navigateTo) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKButton, { text: "Home", onClick: () => {
      navigateTo("/app/a/uk-ewsgit-store/");
    } });
    $[0] = navigateTo;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  let t1;
  if ($[2] !== navigateTo) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKButton, { text: "Search", onClick: () => {
      navigateTo("/app/a/uk-ewsgit-store/search");
    } });
    $[2] = navigateTo;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  let t2;
  if ($[4] !== navigateTo) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKButton, { text: "Applications", onClick: () => {
      navigateTo("/app/a/uk-ewsgit-store/applications");
    } });
    $[4] = navigateTo;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== navigateTo) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKButton, { text: "Modules", onClick: () => {
      navigateTo("/app/a/uk-ewsgit-store/modules");
    } });
    $[6] = navigateTo;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] !== navigateTo) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKButton, { text: "Manage Installed", onClick: () => {
      navigateTo("/app/a/uk-ewsgit-store/manage");
    } });
    $[8] = navigateTo;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  let t5;
  if ($[10] !== t0 || $[11] !== t1 || $[12] !== t2 || $[13] !== t3 || $[14] !== t4) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsxs(UKSidebar, { children: [
      t0,
      t1,
      t2,
      t3,
      t4
    ] });
    $[10] = t0;
    $[11] = t1;
    $[12] = t2;
    $[13] = t3;
    $[14] = t4;
    $[15] = t5;
  } else {
    t5 = $[15];
  }
  let t6;
  if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
    $[16] = t6;
  } else {
    t6 = $[16];
  }
  let t7;
  if ($[17] !== t5) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(UKSidebarContainer, { className: styles.sidebarContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.content, children: [
      t5,
      t6
    ] }) }) });
    $[17] = t5;
    $[18] = t7;
  } else {
    t7 = $[18];
  }
  return t7;
};
const StoreRouter = () => {
  const $ = compilerRuntimeExports.c(10);
  const applicationPanelContext = reactExports.useContext(ApplicationPanelContext);
  let t0;
  if ($[0] !== applicationPanelContext) {
    t0 = () => {
      applicationPanelContext.setApplicationDisplayName("YourDash Store");
      applicationPanelContext.setApplicationIcon(STORE_ICON);
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
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKOnBoarding, { applicationId: "uk-ewsgit-store", pages: [{
      headerImage: STORE_ICON,
      header: "YourDash Store",
      body: "Manage and install YourDash Applications & modules.",
      actions: [{
        label: "Continue",
        changeTo: "next",
        onClick() {
        }
      }]
    }] });
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(ApplicationLayout, {});
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { index: true, element: /* @__PURE__ */ jsxRuntimeExports.jsx(ApplicationIndexPage, {}) });
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "search", element: "Search ui", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: ":query", element: "Search query response" }) });
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  let t6;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "categories", element: "Category selector", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: ":category", element: "Category applications and modules" }) });
    $[7] = t6;
  } else {
    t6 = $[7];
  }
  let t7;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "modules", element: "Modules selector", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: ":module", element: "Store page for module" }) });
    $[8] = t7;
  } else {
    t7 = $[8];
  }
  let t8;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsxRuntimeExports.jsx(Routes, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { element: t2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Route, { element: t3, children: [
      t4,
      t5,
      t6,
      t7,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "applications", element: "Applications selector", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: ":application", element: "Store page for application" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manage", element: "Manage installed applications & modules" })
    ] }) }) });
    $[9] = t8;
  } else {
    t8 = $[9];
  }
  return t8;
};
function _temp() {
}
export {
  StoreRouter as default
};
//# sourceMappingURL=index-BRtwN6Ck.js.map
