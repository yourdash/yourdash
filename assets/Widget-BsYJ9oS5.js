import { c as compilerRuntimeExports, j as jsxRuntimeExports, m as contextMenuRootContext, u as useNavigate, n as useToast, t as tun, z, o as UKCard, p as toAuthImgUrl, q as React, r as reactExports, d as clippy, s as UKTextInput, h as UKIcons, v as useResource, f as UKBox, g as UKIconButton, w as useLocation, x as UKIcon, D as DecrementLevel } from "./index-B8tqQDmo.js";
const launcherButton = "_launcherButton_6vdkc_10";
const launcherButtonIcon = "_launcherButtonIcon_6vdkc_42";
const widgetContainer = "_widgetContainer_6vdkc_46";
const styles$5 = {
  launcherButton,
  launcherButtonIcon,
  widgetContainer
};
const applicationLauncher = "_applicationLauncher_lgfcw_10";
const content = "_content_lgfcw_25";
const sideTop = "_sideTop_lgfcw_43";
const sideRight = "_sideRight_lgfcw_67";
const sideBottom = "_sideBottom_lgfcw_92";
const sideLeft = "_sideLeft_lgfcw_116";
const invisible = "_invisible_lgfcw_141";
const footer = "_footer_lgfcw_146";
const styles$4 = {
  applicationLauncher,
  content,
  sideTop,
  sideRight,
  sideBottom,
  sideLeft,
  invisible,
  footer
};
const UKContextMenu = (t0) => {
  const $ = compilerRuntimeExports.c(4);
  const {
    items,
    children,
    className
  } = t0;
  let t1;
  if ($[0] !== children || $[1] !== className || $[2] !== items) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(contextMenuRootContext.Consumer, { children: (rootContext) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, onContextMenu: (e) => {
      e.stopPropagation();
      e.preventDefault();
      const menuRect = e.currentTarget.getBoundingClientRect();
      rootContext.createMenu({
        x: e.pageX,
        y: e.pageY,
        width: menuRect.width,
        height: menuRect.height,
        items
      });
      const listener = (ev) => {
        ev.preventDefault();
        rootContext.destroyMenu();
        window.removeEventListener("click", listener);
        window.removeEventListener("contextmenu", listener);
      };
      window.addEventListener("click", listener);
      window.addEventListener("contextmenu", listener);
    }, children }) });
    $[0] = children;
    $[1] = className;
    $[2] = items;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
};
const grid$2 = "_grid_1kowi_6";
const itemIcon$2 = "_itemIcon_1kowi_14";
const itemLabel$2 = "_itemLabel_1kowi_21";
const item$2 = "_item_1kowi_14";
const itemContent$2 = "_itemContent_1kowi_34";
const styles$3 = {
  grid: grid$2,
  itemIcon: itemIcon$2,
  itemLabel: itemLabel$2,
  item: item$2,
  itemContent: itemContent$2
};
const LargeApplicationGrid = (t0) => {
  const $ = compilerRuntimeExports.c(9);
  const {
    modules
  } = t0;
  const navigate = useNavigate();
  const toast = useToast();
  let t1;
  if ($[0] !== modules || $[1] !== navigate || $[2] !== toast) {
    let t22;
    if ($[4] !== navigate || $[5] !== toast) {
      t22 = (module) => /* @__PURE__ */ jsxRuntimeExports.jsx(UKContextMenu, { items: [{
        label: "Pin To Panel",
        async onClick() {
          var _a;
          const success = await tun.post("/core/panel/quick-shortcuts/create", {
            id: module.id
          }, "json", z.object({
            success: z.boolean()
          }));
          if (success.data.success) {
            (_a = window.__yourdashCorePanelQuickShortcutsReload) == null ? void 0 : _a.call(window);
            toast.create({
              type: "success",
              content: {
                title: "Application pinned successfully",
                body: ""
              }
            });
          } else {
            toast.create({
              type: "error",
              content: {
                body: "Failed to pin application",
                title: "An application must only be pinned once to the panel."
              }
            });
          }
          return 0;
        }
      }, {
        label: "Open In New Tab",
        onClick() {
          if (module.type === "frontend") {
            window.open(`${window.location.origin}${module.endpoint}`, "_blank");
          } else {
            window.open(`${module.url}`, "_blank");
          }
          return 0;
        }
      }], className: styles$3.item, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UKCard, { onClick: () => {
        if (module.type === "frontend") {
          navigate(`${module.endpoint}`);
        } else {
          navigate(`${module.url}`);
        }
      }, className: styles$3.itemContent, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: styles$3.itemIcon, src: toAuthImgUrl(`/core/panel/applications/app/largeGrid/${module.id}`), draggable: false, loading: "lazy", alt: "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.itemLabel, children: module.displayName })
      ] }) }, module.id);
      $[4] = navigate;
      $[5] = toast;
      $[6] = t22;
    } else {
      t22 = $[6];
    }
    t1 = modules.map(t22);
    $[0] = modules;
    $[1] = navigate;
    $[2] = toast;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  let t2;
  if ($[7] !== t1) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: styles$3.grid, children: t1 });
    $[7] = t1;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  return t2;
};
const searchBar = "_searchBar_1fon1_6";
const styles$2 = {
  searchBar
};
const grid$1 = "_grid_15yy6_10";
const itemIcon$1 = "_itemIcon_15yy6_18";
const itemLabel$1 = "_itemLabel_15yy6_25";
const item$1 = "_item_15yy6_18";
const itemContent$1 = "_itemContent_15yy6_39";
const styles$1 = {
  grid: grid$1,
  itemIcon: itemIcon$1,
  itemLabel: itemLabel$1,
  item: item$1,
  itemContent: itemContent$1
};
const SmallApplicationGrid = (t0) => {
  const $ = compilerRuntimeExports.c(7);
  const {
    modules
  } = t0;
  const navigate = useNavigate();
  let t1;
  if ($[0] !== modules || $[1] !== navigate) {
    let t22;
    if ($[3] !== navigate) {
      t22 = (module) => /* @__PURE__ */ jsxRuntimeExports.jsx(UKContextMenu, { items: [{
        label: "Pin To Panel",
        async onClick() {
          var _a;
          await tun.post("/core/panel/quick-shortcuts/create", {
            id: module.id,
            moduleType: module.type
          }, "json", z.object({
            success: z.boolean()
          }));
          (_a = window.__yourdashCorePanelQuickShortcutsReload) == null ? void 0 : _a.call(window);
          return 0;
        }
      }, {
        label: "Open In New Tab",
        onClick() {
          window.open(`${window.location.origin}${window.location.pathname}/app/a/${module.id}`, "_blank");
          return 0;
        }
      }], className: styles$1.item, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.itemContent, onClick: () => {
        if (module.type === "frontend") {
          navigate(`${module.endpoint}`);
        } else {
          navigate(`${module.url}`);
        }
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { loading: "lazy", className: styles$1.itemIcon, src: toAuthImgUrl(`/core/panel/applications/app/smallGrid/${module.id}`), draggable: false, alt: "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$1.itemLabel, children: module.displayName })
      ] }) }, module.id);
      $[3] = navigate;
      $[4] = t22;
    } else {
      t22 = $[4];
    }
    t1 = modules.map(t22);
    $[0] = modules;
    $[1] = navigate;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  let t2;
  if ($[5] !== t1) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: styles$1.grid, children: t1 });
    $[5] = t1;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  return t2;
};
const grid = "_grid_1q2ux_10";
const itemIcon = "_itemIcon_1q2ux_18";
const itemLabel = "_itemLabel_1q2ux_25";
const item = "_item_1q2ux_18";
const itemContent = "_itemContent_1q2ux_39";
const styles = {
  grid,
  itemIcon,
  itemLabel,
  item,
  itemContent
};
const ApplicationList = (t0) => {
  const $ = compilerRuntimeExports.c(7);
  const {
    modules
  } = t0;
  const navigate = useNavigate();
  let t1;
  if ($[0] !== modules || $[1] !== navigate) {
    let t22;
    if ($[3] !== navigate) {
      t22 = (module) => /* @__PURE__ */ jsxRuntimeExports.jsx(UKContextMenu, { items: [{
        label: "Pin To Panel",
        async onClick() {
          var _a;
          await tun.post("/core/panel/quick-shortcuts/create", {
            id: module.id,
            moduleType: module.type
          }, "json", z.object({}));
          (_a = window.__yourdashCorePanelQuickShortcutsReload) == null ? void 0 : _a.call(window);
          return 0;
        }
      }, {
        label: "Open In New Tab",
        onClick() {
          window.open(`${window.location.origin}${window.location.pathname}/app/a/${module.id}`, "_blank");
          return 0;
        }
      }], className: styles.item, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UKCard, { className: styles.itemContent, onClick: () => {
        if (module.type === "frontend") {
          navigate(`${module.endpoint}`);
        } else {
          navigate(`${module.url}`);
        }
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { loading: "lazy", className: styles.itemIcon, src: toAuthImgUrl(`/core/panel/applications/app/list/${module.id}`), draggable: false, alt: "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.itemLabel, children: module.displayName })
      ] }) }, module.id);
      $[3] = navigate;
      $[4] = t22;
    } else {
      t22 = $[4];
    }
    t1 = modules.map(t22);
    $[0] = modules;
    $[1] = navigate;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  let t2;
  if ($[5] !== t1) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: styles.grid, children: t1 });
    $[5] = t1;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  return t2;
};
let filteredApplications = [];
const ApplicationsLauncherApplications = (t0) => {
  const $ = compilerRuntimeExports.c(21);
  const {
    apps,
    layout
  } = t0;
  const navigate = useNavigate();
  const [applications, setApplications] = React.useState(apps);
  const [searchQuery, setSearchQuery] = React.useState("");
  let t1;
  let t2;
  if ($[0] !== apps || $[1] !== searchQuery) {
    t1 = () => {
      setApplications(apps.filter((application) => application.displayName.toLowerCase().includes(searchQuery.toLowerCase()) || application.description.toLowerCase().includes(searchQuery.toLowerCase()) || application.displayName.toLowerCase().includes(searchQuery.toLowerCase()) || application.id.toLowerCase().includes(searchQuery.toLowerCase())));
    };
    t2 = [apps, searchQuery];
    $[0] = apps;
    $[1] = searchQuery;
    $[2] = t1;
    $[3] = t2;
  } else {
    t1 = $[2];
    t2 = $[3];
  }
  reactExports.useEffect(t1, t2);
  let t3;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = clippy(styles$2.searchBar, "top-0 sticky z-10");
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== navigate) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKTextInput, { accessibleName: "Search Applications", placeholder: "Search Applications", className: t3, onSubmit: () => {
      if (filteredApplications.length === 1) {
        navigate(`/app/a/${filteredApplications[0].id}`);
      }
    }, getLiveValue: setSearchQuery, icon: UKIcons.Search });
    $[5] = navigate;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== applications || $[8] !== layout) {
    t5 = layout === "large-grid" && /* @__PURE__ */ jsxRuntimeExports.jsx(LargeApplicationGrid, { modules: applications });
    $[7] = applications;
    $[8] = layout;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  let t6;
  if ($[10] !== applications || $[11] !== layout) {
    t6 = layout === "small-grid" && /* @__PURE__ */ jsxRuntimeExports.jsx(SmallApplicationGrid, { modules: applications });
    $[10] = applications;
    $[11] = layout;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  let t7;
  if ($[13] !== applications || $[14] !== layout) {
    t7 = layout === "list" && /* @__PURE__ */ jsxRuntimeExports.jsx(ApplicationList, { modules: applications });
    $[13] = applications;
    $[14] = layout;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  let t8;
  if ($[16] !== t4 || $[17] !== t5 || $[18] !== t6 || $[19] !== t7) {
    t8 = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      t4,
      t5,
      t6,
      t7
    ] });
    $[16] = t4;
    $[17] = t5;
    $[18] = t6;
    $[19] = t7;
    $[20] = t8;
  } else {
    t8 = $[20];
  }
  return t8;
};
const ApplicationLauncher = (t0) => {
  const $ = compilerRuntimeExports.c(26);
  const {
    side,
    visible
  } = t0;
  const navigate = useNavigate();
  const apps = useResource(_temp, {
    return: "data"
  }) || [];
  const [layout, setLayout] = React.useState("large-grid");
  const t1 = side === "top" && `${styles$4.sideTop} animate__slideInLeft`;
  const t2 = side === "right" && `${styles$4.sideRight} animate__slideInDown`;
  const t3 = side === "bottom" && `${styles$4.sideBottom} animate__slideInLeft`;
  const t4 = side === "left" && `${styles$4.sideLeft} animate__slideInDown`;
  const t5 = !visible && styles$4.invisible;
  let t6;
  if ($[0] !== t1 || $[1] !== t2 || $[2] !== t3 || $[3] !== t4 || $[4] !== t5) {
    t6 = clippy(styles$4.applicationLauncher, t1, t2, t3, t4, "animate__animated animate__duration_500ms", t5);
    $[0] = t1;
    $[1] = t2;
    $[2] = t3;
    $[3] = t4;
    $[4] = t5;
    $[5] = t6;
  } else {
    t6 = $[5];
  }
  let t7;
  if ($[6] !== apps) {
    t7 = apps;
    $[6] = apps;
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  let t8;
  if ($[8] !== layout || $[9] !== t7) {
    t8 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKBox, { className: styles$4.content, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ApplicationsLauncherApplications, { apps: t7, layout }) });
    $[8] = layout;
    $[9] = t7;
    $[10] = t8;
  } else {
    t8 = $[10];
  }
  let t9;
  if ($[11] !== navigate) {
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKIconButton, { accessibleLabel: "Logout", className: styles$4.logoutButton, icon: UKIcons.Logout, onClick: async () => {
      await tun.post("/user/logout", {}, "json", z.object({
        success: z.boolean()
      }));
      navigate("/login");
    } });
    $[11] = navigate;
    $[12] = t9;
  } else {
    t9 = $[12];
  }
  let t10;
  if ($[13] !== navigate) {
    t10 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKIconButton, { accessibleLabel: "Profile", icon: UKIcons.Person, "aria-label": "User Profile Settings", onClick: () => {
      navigate(`/profile/me`);
    } });
    $[13] = navigate;
    $[14] = t10;
  } else {
    t10 = $[14];
  }
  let t11;
  if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Unknown First Name" });
    $[15] = t11;
  } else {
    t11 = $[15];
  }
  let t12;
  if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKIconButton, { accessibleLabel: "Filter small grid", className: "ml-auto", icon: UKIcons.Filter, onClick: () => {
      setLayout("small-grid");
    } });
    $[16] = t12;
  } else {
    t12 = $[16];
  }
  let t13;
  if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
    t13 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKIconButton, { accessibleLabel: "Filter large grid", icon: UKIcons.Filter, onClick: () => {
      setLayout("large-grid");
    } });
    $[17] = t13;
  } else {
    t13 = $[17];
  }
  let t14;
  if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
    t14 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKIconButton, { accessibleLabel: "Filter list", icon: UKIcons.Filter, onClick: () => {
      setLayout("list");
    } });
    $[18] = t14;
  } else {
    t14 = $[18];
  }
  let t15;
  if ($[19] !== t10 || $[20] !== t9) {
    t15 = /* @__PURE__ */ jsxRuntimeExports.jsxs(UKBox, { className: styles$4.footer, children: [
      t9,
      t10,
      t11,
      t12,
      t13,
      t14
    ] });
    $[19] = t10;
    $[20] = t9;
    $[21] = t15;
  } else {
    t15 = $[21];
  }
  let t16;
  if ($[22] !== t15 || $[23] !== t6 || $[24] !== t8) {
    t16 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t6, children: [
      t8,
      t15
    ] });
    $[22] = t15;
    $[23] = t6;
    $[24] = t8;
    $[25] = t16;
  } else {
    t16 = $[25];
  }
  return t16;
};
const ApplicationLauncher$1 = reactExports.memo(ApplicationLauncher);
function _temp() {
  return tun.get("/core/panel/applications", "json", z.object({
    id: z.string(),
    displayName: z.string(),
    description: z.string(),
    type: z.literal("frontend").or(z.literal("externalFrontend")),
    endpoint: z.string().optional(),
    url: z.string().optional()
  }).array());
}
const ApplicationLauncherWidget = (t0) => {
  const $ = compilerRuntimeExports.c(14);
  const {
    side
  } = t0;
  const [launcherVisible, setLauncherVisible] = React.useState(false);
  const location = useLocation();
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = () => {
      setLauncherVisible(false);
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== location) {
    t2 = [location];
    $[1] = location;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  reactExports.useEffect(t1, t2);
  let t3;
  if ($[3] !== launcherVisible) {
    t3 = () => setLauncherVisible(!launcherVisible);
    $[3] = launcherVisible;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKIcon, { icon: UKIcons.AppLauncher, className: styles$5.launcherButtonIcon });
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] !== t3) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Application Launcher", className: styles$5.launcherButton, onClick: t3, children: t4 });
    $[6] = t3;
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] !== launcherVisible || $[9] !== side) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsx(ApplicationLauncher$1, { side, visible: launcherVisible });
    $[8] = launcherVisible;
    $[9] = side;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  let t7;
  if ($[11] !== t5 || $[12] !== t6) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsx(DecrementLevel, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$5.widgetContainer, children: [
      t5,
      t6
    ] }) });
    $[11] = t5;
    $[12] = t6;
    $[13] = t7;
  } else {
    t7 = $[13];
  }
  return t7;
};
export {
  ApplicationLauncherWidget as default
};
//# sourceMappingURL=Widget-BsYJ9oS5.js.map
