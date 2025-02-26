import { c as compilerRuntimeExports, v as useResource, j as jsxRuntimeExports, U as UKImage, p as toAuthImgUrl, t as tun, z, b as UKHeading, i as UKSeparator, o as UKCard, x as UKIcon, h as UKIcons, l as UKText, e as UKFlex, A as UKButton, u as useNavigate, O as Outlet, q as React, r as reactExports, R as Routes, a as Route } from "./index-BcPuHMck.js";
import ApplicationPanelContext from "@yourdash/web/src/app/panel/ApplicationPanelContext.tsx";
import { a as UKSidebarToggleButton, U as UKSidebar, b as UKSidebarContainer, c as UKOnBoarding } from "./UKSidebarToggleButton-CuPOvZKj.js";
const heading = "_heading_1ifek_10";
const currentWallpaper = "_currentWallpaper_1ifek_14";
const previousWallpapers = "_previousWallpapers_1ifek_19";
const newWallpaperButton = "_newWallpaperButton_1ifek_26";
const icon = "_icon_1ifek_31";
const styles$2 = {
  heading,
  currentWallpaper,
  previousWallpapers,
  newWallpaperButton,
  icon
};
const ManageWallpaper = () => {
  const $ = compilerRuntimeExports.c(9);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      return: "data"
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const currentWallpaper2 = useResource(_temp$2, t0);
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { level: 2, className: styles$2.heading, text: "Manage Wallpaper" });
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKSeparator, { direction: "column" });
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] !== currentWallpaper2) {
    t3 = currentWallpaper2 ? /* @__PURE__ */ jsxRuntimeExports.jsx(UKImage, { width: 480, src: toAuthImgUrl(currentWallpaper2.thumbnail), accessibleLabel: "current wallpaper", className: styles$2.currentWallpaper }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "no current wallpaper" });
    $[3] = currentWallpaper2;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKSeparator, { direction: "column" });
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2.previousWallpapers, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UKCard, { className: styles$2.newWallpaperButton, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKIcon, { className: styles$2.icon, icon: UKIcons.Plus }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: "Add new wallpaper" })
    ] }) });
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  let t6;
  if ($[7] !== t3) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsxs(UKCard, { children: [
      t1,
      t2,
      t3,
      t4,
      t5
    ] });
    $[7] = t3;
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  return t6;
};
function _temp$2() {
  return tun.get("/uk-ewsgit-settings/current/wallpaper", "json", z.object({
    thumbnail: z.string()
  }));
}
const page = "_page_qnqir_10";
const column = "_column_qnqir_29";
const titleContainer = "_titleContainer_qnqir_37";
const title = "_title_qnqir_37";
const cardHeader = "_cardHeader_qnqir_47";
const themePreviewContainer = "_themePreviewContainer_qnqir_51";
const themePreview = "_themePreview_qnqir_51";
const styles$1 = {
  page,
  column,
  titleContainer,
  title,
  cardHeader,
  themePreviewContainer,
  themePreview
};
const IndexPage = () => {
  const $ = compilerRuntimeExports.c(7);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsxs(UKFlex, { direction: "row", className: styles$1.titleContainer, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKSidebarToggleButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { className: styles$1.title, level: 1, text: "Home" })
    ] });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { level: 3, className: styles$1.cardHeader, text: "Personalise YourDash" });
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsxs(UKCard, { children: [
      t1,
      /* @__PURE__ */ jsxRuntimeExports.jsxs(UKFlex, { direction: "row", className: styles$1.themePreviewContainer, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { className: styles$1.themePreview, children: "Theme Preview 1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { className: styles$1.themePreview, children: "Theme Preview 2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { className: styles$1.themePreview, children: "Theme Preview 3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { className: styles$1.themePreview, children: "Theme Preview 4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { className: styles$1.themePreview, children: "Theme Preview 5" })
      ] })
    ] });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { level: 3, className: styles$1.cardHeader, text: "Instance Software Updates" });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsxs(UKFlex, { direction: "row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKIcon, { icon: UKIcons.CheckCircle, size: "1.5rem" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: "You're all up to date!" })
    ] });
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.column, children: [
      t2,
      /* @__PURE__ */ jsxRuntimeExports.jsxs(UKCard, { children: [
        t3,
        t4,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(UKFlex, { direction: "row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: "Last checked 2 days ago" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(UKButton, { text: "Check for updates", onClick: _temp$1 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: "currently version: 1.0.0" })
      ] })
    ] });
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.page, children: [
      t0,
      t5,
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1.column, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ManageWallpaper, {}) })
    ] }) });
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  return t6;
};
function _temp$1() {
  return 0;
}
const alignLeft = "_alignLeft_14roy_6";
const styles = {
  alignLeft
};
const SettingsLayout = () => {
  const $ = compilerRuntimeExports.c(29);
  const navigate = useNavigate();
  let t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { className: styles.alignLeft, level: 3, text: "Settings" });
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKSeparator, { direction: "column" });
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  let t2;
  if ($[2] !== navigate) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKButton, { text: "Home", onClick: () => navigate(`/app/a/uk-ewsgit-settings/`) });
    $[2] = navigate;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== navigate) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKButton, { text: "Personalisation", onClick: () => navigate(`/app/a/uk-ewsgit-settings/personalization`) });
    $[4] = navigate;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] !== navigate) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKButton, { text: "Login Sessions", onClick: () => navigate(`/app/a/uk-ewsgit-settings/session`) });
    $[6] = navigate;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] !== navigate) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKButton, { text: "Administrator Tools", onClick: () => navigate(`/app/a/uk-ewsgit-settings/admin`) });
    $[8] = navigate;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  let t6;
  if ($[10] !== navigate) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKButton, { text: "Developer Tools", onClick: () => navigate(`/app/a/uk-ewsgit-settings/developer`) });
    $[10] = navigate;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  let t7;
  let t8;
  if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKSeparator, { direction: "column" });
    t8 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { className: styles.alignLeft, text: "Dev", level: 4 });
    $[12] = t7;
    $[13] = t8;
  } else {
    t7 = $[12];
    t8 = $[13];
  }
  let t9;
  if ($[14] !== navigate) {
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKButton, { text: "Test Category", onClick: () => navigate(`/app/a/uk-ewsgit-settings/cat/test`) });
    $[14] = navigate;
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  let t10;
  if ($[16] !== navigate) {
    t10 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKButton, { text: "Test Solo Setting", onClick: () => navigate(`/app/a/uk-ewsgit-settings/cat/test/test-setting`) });
    $[16] = navigate;
    $[17] = t10;
  } else {
    t10 = $[17];
  }
  let t11;
  if ($[18] !== t10 || $[19] !== t2 || $[20] !== t3 || $[21] !== t4 || $[22] !== t5 || $[23] !== t6 || $[24] !== t9) {
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsxs(UKSidebar, { children: [
      t0,
      t1,
      t2,
      t3,
      t4,
      t5,
      t6,
      t7,
      t8,
      t9,
      t10
    ] });
    $[18] = t10;
    $[19] = t2;
    $[20] = t3;
    $[21] = t4;
    $[22] = t5;
    $[23] = t6;
    $[24] = t9;
    $[25] = t11;
  } else {
    t11 = $[25];
  }
  let t12;
  if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
    $[26] = t12;
  } else {
    t12 = $[26];
  }
  let t13;
  if ($[27] !== t11) {
    t13 = /* @__PURE__ */ jsxRuntimeExports.jsxs(UKSidebarContainer, { showSidebarByDefault: true, children: [
      t11,
      t12
    ] });
    $[27] = t11;
    $[28] = t13;
  } else {
    t13 = $[28];
  }
  return t13;
};
const SETTINGS_ICON = "" + new URL("icon-Bgwf4dVZ.avif", import.meta.url).href;
const SettingsRouter = () => {
  const $ = compilerRuntimeExports.c(6);
  const applicationPanelContext = React.useContext(ApplicationPanelContext);
  let t0;
  if ($[0] !== applicationPanelContext) {
    t0 = () => {
      applicationPanelContext.setApplicationDisplayName("Settings");
      applicationPanelContext.setApplicationIcon(SETTINGS_ICON);
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
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKOnBoarding, { applicationId: "uk-ewsgit-settings", pages: [{
      headerImage: SETTINGS_ICON,
      header: "YourDash Settings",
      body: "Configure YourDash and it's applications",
      actions: [{
        label: "Continue",
        onClick: _temp2,
        changeTo: "next"
      }]
    }] });
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsLayout, {});
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(Routes, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { element: t2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { element: t3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { index: true, element: /* @__PURE__ */ jsxRuntimeExports.jsx(IndexPage, {}) }) }) }) });
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  return t4;
};
function _temp() {
}
function _temp2() {
}
export {
  SettingsRouter as default
};
//# sourceMappingURL=index-CuQXV-Qm.js.map
