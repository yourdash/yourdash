import { c as compilerRuntimeExports, j as jsxRuntimeExports, g as UKIconButton, h as UKIcons, U as UKImage, b as UKHeading, l as UKText, o as UKCard, d as clippy, I as IncrementLevel, u as useNavigate, x as UKIcon, v as useResource, t as tun, z, f as UKBox, r as reactExports, e as UKFlex, i as UKSeparator, A as UKButton, E as generateUUID, q as React, R as Routes, a as Route } from "./index-B8tqQDmo.js";
import { U as UKSidebar, a as UKSidebarToggleButton, b as UKSidebarContainer, c as UKOnBoarding } from "./UKSidebarToggleButton-DGOS0nub.js";
import ApplicationPanelContext from "@yourdash/web/src/app/panel/ApplicationPanelContext.tsx";
const UKProgressBar = (t0) => {
  const $ = compilerRuntimeExports.c(7);
  const {
    maxValue,
    value,
    className,
    indeterminate
  } = t0;
  let t1;
  if ($[0] !== className || $[1] !== maxValue || $[2] !== value) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx("progress", { max: maxValue, value, className });
    $[0] = className;
    $[1] = maxValue;
    $[2] = value;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  const t2 = indeterminate && "This should be indeterminate";
  let t3;
  if ($[4] !== t1 || $[5] !== t2) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      t1,
      t2
    ] });
    $[4] = t1;
    $[5] = t2;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  return t3;
};
const component$4 = "_component_1qh5j_6";
const icon$1 = "_icon_1qh5j_12";
const styles$7 = {
  component: component$4,
  icon: icon$1
};
const Connection = (t0) => {
  const $ = compilerRuntimeExports.c(18);
  const {
    description,
    quota,
    url,
    serviceLogo,
    serviceName
  } = t0;
  let t1;
  if ($[0] !== url) {
    t1 = url && /* @__PURE__ */ jsxRuntimeExports.jsx(UKIconButton, { accessibleLabel: "Open service url", icon: UKIcons.LinkExternal, onClick: () => {
      window.open(url, "_blank");
    } });
    $[0] = url;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== t1) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: t1 });
    $[2] = t1;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const t3 = serviceLogo ?? "/assets/productLogos/yourdash.svg";
  let t4;
  if ($[4] !== t3) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKImage, { className: styles$7.icon, accessibleLabel: "", src: t3 });
    $[4] = t3;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] !== serviceName) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { text: serviceName });
    $[6] = serviceName;
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] !== description) {
    t6 = description && /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: description });
    $[8] = description;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] !== quota) {
    t7 = quota && /* @__PURE__ */ jsxRuntimeExports.jsx(UKProgressBar, { maxValue: quota.max, value: quota.usage });
    $[10] = quota;
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  let t8;
  if ($[12] !== t2 || $[13] !== t4 || $[14] !== t5 || $[15] !== t6 || $[16] !== t7) {
    t8 = /* @__PURE__ */ jsxRuntimeExports.jsxs(UKCard, { className: styles$7.component, actions: t2, children: [
      t4,
      t5,
      t6,
      t7
    ] });
    $[12] = t2;
    $[13] = t4;
    $[14] = t5;
    $[15] = t6;
    $[16] = t7;
    $[17] = t8;
  } else {
    t8 = $[17];
  }
  return t8;
};
const component$3 = "_component_h0o6i_6";
const connectionContainer$1 = "_connectionContainer_h0o6i_12";
const styles$6 = {
  component: component$3,
  connectionContainer: connectionContainer$1
};
const Connections = (t0) => {
  const $ = compilerRuntimeExports.c(5);
  const {
    connections
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { text: "Connections" });
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== connections) {
    t2 = connections.length > 0 ? connections.map(_temp$4) : /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: "You have no connections..." });
    $[1] = connections;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== t2) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$6.component, children: [
      t1,
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$6.connectionContainer, children: t2 })
    ] });
    $[3] = t2;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  return t3;
};
function _temp$4(connection) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Connection, { ...connection }, connection.id);
}
const component$2 = "_component_1bxth_10";
const odd = "_odd_1bxth_17";
const even = "_even_1bxth_21";
const styles$5 = {
  component: component$2,
  odd,
  even
};
const FileListFile = (t0) => {
  const $ = compilerRuntimeExports.c(10);
  const {
    displayName,
    path,
    isOddIndex
  } = t0;
  const t1 = isOddIndex ? styles$5.odd : styles$5.even;
  let t2;
  if ($[0] !== t1) {
    t2 = clippy(styles$5.component, t1);
    $[0] = t1;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  let t3;
  if ($[2] !== displayName) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: displayName });
    $[2] = displayName;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== path) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: path });
    $[4] = path;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] !== t2 || $[7] !== t3 || $[8] !== t4) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t2, children: [
      t3,
      t4
    ] });
    $[6] = t2;
    $[7] = t3;
    $[8] = t4;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  return t5;
};
const view$1 = "_view_t7uw3_10";
const styles$4 = {
  view: view$1
};
const FileList = (t0) => {
  const $ = compilerRuntimeExports.c(4);
  const {
    files
  } = t0;
  let t1;
  if ($[0] !== files) {
    t1 = files.map(_temp$3);
    $[0] = files;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== t1) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(IncrementLevel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$4.view, children: t1 }) });
    $[2] = t1;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  return t2;
};
function _temp$3(file, index) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FileListFile, { displayName: file.displayName, path: file.path, thumbnail: file.thumbnail, metadata: file.metadata, isOddIndex: index % 2 === 1 }, file.path);
}
const RecentFiles = () => {
  const $ = compilerRuntimeExports.c(7);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { text: "Recent Files" });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      displayName: "File 1",
      path: "/Documents/file1",
      thumbnail: "file1",
      metadata: {
        fileSize: "10 MB",
        tags: ["tag1", "tag2"],
        lastModified: "10/10/2020"
      }
    };
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = {
      displayName: "File 2",
      path: "/Documents/file2",
      thumbnail: "file2",
      metadata: {
        fileSize: "10 MB",
        tags: ["tag1", "tag2"],
        lastModified: "10/10/2020"
      }
    };
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = {
      displayName: "File 3",
      path: "/Documents/file3",
      thumbnail: "file3",
      metadata: {
        fileSize: "10 MB",
        tags: ["tag1", "tag2"],
        lastModified: "10/10/2020"
      }
    };
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = {
      displayName: "File 4",
      path: "/Documents/file4",
      thumbnail: "file4",
      metadata: {
        fileSize: "10 MB",
        tags: ["tag1", "tag2"],
        lastModified: "10/10/2020"
      }
    };
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = {
      displayName: "File 5",
      path: "/Documents/file5",
      thumbnail: "file5",
      metadata: {
        fileSize: "10 MB",
        tags: ["tag1", "tag2"],
        lastModified: "10/10/2020"
      }
    };
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      t0,
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileList, { files: [t1, t2, t3, t4, t5, {
        displayName: "File 6",
        path: "/Documents/file6",
        thumbnail: "file6",
        metadata: {
          fileSize: "10 MB",
          tags: ["tag1", "tag2"],
          lastModified: "10/10/2020"
        }
      }] })
    ] });
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  return t6;
};
const SharedFiles = () => {
  const $ = compilerRuntimeExports.c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { text: "Shared Files" }) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
const view = "_view_1qf6d_6";
const content = "_content_1qf6d_13";
const styles$3 = {
  view,
  content
};
const component$1 = "_component_h0o6i_6";
const connectionContainer = "_connectionContainer_h0o6i_12";
const styles$2 = {
  component: component$1,
  connectionContainer
};
const componentCardContainer = "_componentCardContainer_1xjus_6";
const component = "_component_1xjus_6";
const icon = "_icon_1xjus_19";
const styles$1 = {
  componentCardContainer,
  component,
  icon
};
const StorageLocation = (t0) => {
  const $ = compilerRuntimeExports.c(9);
  const {
    path,
    baseName
  } = t0;
  const navigate = useNavigate();
  let t1;
  if ($[0] !== navigate || $[1] !== path) {
    t1 = () => {
      navigate(path);
    };
    $[0] = navigate;
    $[1] = path;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  let t2;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKIcon, { icon: "FileDirectory", className: styles$1.icon });
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== baseName) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: baseName });
    $[4] = baseName;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] !== t1 || $[7] !== t3) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsxs(UKCard, { containerClassName: styles$1.componentCardContainer, className: styles$1.component, onClick: t1, children: [
      t2,
      t3
    ] });
    $[6] = t1;
    $[7] = t3;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  return t4;
};
const CommonStorageLocations = (t0) => {
  const $ = compilerRuntimeExports.c(5);
  const {
    commonStorageLocations
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { level: 3, text: "Common Storage Locations" });
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== commonStorageLocations) {
    t2 = commonStorageLocations.length > 0 ? commonStorageLocations.map(_temp$2) : /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: "You have no common storage locations..." });
    $[1] = commonStorageLocations;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== t2) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2.component, children: [
      t1,
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2.connectionContainer, children: t2 })
    ] });
    $[3] = t2;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  return t3;
};
function _temp$2(connection) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StorageLocation, { baseName: "/", ...connection }, connection.path);
}
const HomeTabView = (t0) => {
  const $ = compilerRuntimeExports.c(17);
  const {
    view: view2
  } = t0;
  let t1;
  if ($[0] !== view2) {
    t1 = {
      dependencies: [view2],
      return: "data"
    };
    $[0] = view2;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const homeTabData = useResource(_temp$1, t1);
  if (!homeTabData) {
    let t22;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
      t22 = /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(UKBox, { className: styles$3.view, children: /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { text: "Home Loading..." }) }) });
      $[2] = t22;
    } else {
      t22 = $[2];
    }
    return t22;
  }
  let t2;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = {
      border: "none"
    };
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== (homeTabData == null ? void 0 : homeTabData.commonStorageLocations)) {
    t3 = (homeTabData == null ? void 0 : homeTabData.commonStorageLocations) ?? [];
    $[4] = homeTabData == null ? void 0 : homeTabData.commonStorageLocations;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] !== t3) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(CommonStorageLocations, { commonStorageLocations: t3 });
    $[6] = t3;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx(RecentFiles, {});
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== (homeTabData == null ? void 0 : homeTabData.connections)) {
    t6 = (homeTabData == null ? void 0 : homeTabData.connections) ?? [];
    $[9] = homeTabData == null ? void 0 : homeTabData.connections;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  let t7;
  if ($[11] !== t6) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsx(Connections, { connections: t6 });
    $[11] = t6;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  let t8;
  if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsxRuntimeExports.jsx(SharedFiles, {});
    $[13] = t8;
  } else {
    t8 = $[13];
  }
  let t9;
  if ($[14] !== t4 || $[15] !== t7) {
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsxs(UKBox, { style: t2, className: styles$3.view, children: [
      t4,
      t5,
      t7,
      t8
    ] });
    $[14] = t4;
    $[15] = t7;
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  return t9;
};
function _temp$1() {
  return tun.get("/app/uk-ewsgit-files/tabView/home", "json", z.object({
    recentFiles: z.object({}).array(),
    sharedFiles: z.object({}).array(),
    commonStorageLocations: z.object({
      path: z.string(),
      baseName: z.string()
    }).array(),
    connections: z.object({
      serviceName: z.string(),
      description: z.string(),
      url: z.string(),
      quota: z.object({
        max: z.number(),
        usage: z.number(),
        unit: z.string()
      }),
      id: z.string(),
      serviceLogo: z.string().or(z.undefined())
    }).array()
  }));
}
var FILES_VIEW_TYPE = /* @__PURE__ */ ((FILES_VIEW_TYPE2) => {
  FILES_VIEW_TYPE2[FILES_VIEW_TYPE2["LIST"] = 0] = "LIST";
  FILES_VIEW_TYPE2[FILES_VIEW_TYPE2["GRID"] = 1] = "GRID";
  FILES_VIEW_TYPE2[FILES_VIEW_TYPE2["CAROUSEL"] = 2] = "CAROUSEL";
  FILES_VIEW_TYPE2[FILES_VIEW_TYPE2["HOME"] = 3] = "HOME";
  FILES_VIEW_TYPE2[FILES_VIEW_TYPE2["PEOPLE"] = 4] = "PEOPLE";
  FILES_VIEW_TYPE2[FILES_VIEW_TYPE2["PANES"] = 5] = "PANES";
  return FILES_VIEW_TYPE2;
})(FILES_VIEW_TYPE || {});
const TabView = (t0) => {
  const $ = compilerRuntimeExports.c(3);
  const {
    view: view2
  } = t0;
  switch (view2.type) {
    case FILES_VIEW_TYPE.HOME: {
      let t1;
      if ($[0] !== view2) {
        t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(HomeTabView, { view: view2 });
        $[0] = view2;
        $[1] = t1;
      } else {
        t1 = $[1];
      }
      return t1;
    }
    default: {
      let t1;
      if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { text: "Unknown TabView" });
        $[2] = t1;
      } else {
        t1 = $[2];
      }
      return t1;
    }
  }
};
const tabBar = "_tabBar_1sxpl_6";
const tabViewContainer = "_tabViewContainer_1sxpl_15";
const tab = "_tab_1sxpl_6";
const innerButton = "_innerButton_1sxpl_36";
const active = "_active_1sxpl_51";
const tabCloseButton = "_tabCloseButton_1sxpl_78";
const page = "_page_1sxpl_85";
const styles = {
  tabBar,
  tabViewContainer,
  tab,
  innerButton,
  active,
  tabCloseButton,
  page
};
const homeTab = () => {
  return {
    id: generateUUID(),
    path: void 0,
    view: {
      type: FILES_VIEW_TYPE.HOME,
      options: {
        zoom: 1
      }
    },
    displayName: "Home"
  };
};
const ApplicationLayout = () => {
  var _a, _b;
  const $ = compilerRuntimeExports.c(38);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = [homeTab()];
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const [tabs, setTabs] = reactExports.useState(t0);
  const [activeTabId, setActiveTabId] = reactExports.useState(void 0);
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      path: "/home/t",
      displayName: "Home T"
    }];
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const [commonStorageLocations] = reactExports.useState(t1);
  let t2;
  if ($[2] !== activeTabId || $[3] !== tabs) {
    t2 = () => {
      if (activeTabId === void 0 && (tabs == null ? void 0 : tabs.length) > 0 || !tabs.find((t) => t.id === activeTabId)) {
        if (tabs.length > 0) {
          setActiveTabId(tabs[0].id);
        }
      }
    };
    $[2] = activeTabId;
    $[3] = tabs;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[5] !== tabs) {
    t3 = [tabs];
    $[5] = tabs;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  reactExports.useEffect(t2, t3);
  let t4;
  let t5;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { text: "Files" });
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKSeparator, { direction: "column" });
    $[7] = t4;
    $[8] = t5;
  } else {
    t4 = $[7];
    t5 = $[8];
  }
  let t6;
  if ($[9] !== activeTabId || $[10] !== commonStorageLocations || $[11] !== tabs) {
    let t72;
    if ($[13] !== activeTabId || $[14] !== tabs) {
      t72 = (storageLocation) => /* @__PURE__ */ jsxRuntimeExports.jsx(UKButton, { text: storageLocation.path, onClick: () => {
        const currentTab = tabs.find((t_0) => activeTabId === t_0.id);
        if (!currentTab) {
          return;
        }
        currentTab.path = storageLocation.path;
        setTabs(tabs.map((t_1) => {
          if (t_1.id === currentTab.id) {
            return currentTab;
          } else {
            return t_1;
          }
        }));
      } }, storageLocation.path);
      $[13] = activeTabId;
      $[14] = tabs;
      $[15] = t72;
    } else {
      t72 = $[15];
    }
    t6 = commonStorageLocations.map(t72);
    $[9] = activeTabId;
    $[10] = commonStorageLocations;
    $[11] = tabs;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  let t7;
  if ($[16] !== t6) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsxs(UKSidebar, { children: [
      t4,
      t5,
      t6
    ] });
    $[16] = t6;
    $[17] = t7;
  } else {
    t7 = $[17];
  }
  let t8;
  if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKSidebarToggleButton, {});
    $[18] = t8;
  } else {
    t8 = $[18];
  }
  let t9;
  if ($[19] !== activeTabId || $[20] !== tabs) {
    let t102;
    if ($[22] !== activeTabId) {
      t102 = (tab2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: clippy(styles.tab, activeTabId === tab2.id && styles.active), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKButton, { className: styles.innerButton, text: tab2.displayName, onClick: () => {
          setActiveTabId(tab2.id);
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UKIconButton, { onClick: () => {
          setTabs((tbs) => tbs.filter((t_2) => t_2.id !== tab2.id));
        }, accessibleLabel: "close tab", icon: UKIcons.X, className: styles.tabCloseButton })
      ] }, tab2.id);
      $[22] = activeTabId;
      $[23] = t102;
    } else {
      t102 = $[23];
    }
    t9 = tabs.map(t102);
    $[19] = activeTabId;
    $[20] = tabs;
    $[21] = t9;
  } else {
    t9 = $[21];
  }
  let t10;
  if ($[24] !== tabs) {
    t10 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKIconButton, { icon: UKIcons.Plus, onClick: () => {
      setTabs([...tabs, homeTab()]);
    }, accessibleLabel: "New tab" });
    $[24] = tabs;
    $[25] = t10;
  } else {
    t10 = $[25];
  }
  let t11;
  if ($[26] !== t10 || $[27] !== t9) {
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: styles.tabBar, children: [
      t8,
      t9,
      t10
    ] });
    $[26] = t10;
    $[27] = t9;
    $[28] = t11;
  } else {
    t11 = $[28];
  }
  let t12;
  if ($[29] !== activeTabId || $[30] !== tabs) {
    t12 = ((_a = tabs.find((tab_1) => tab_1.id === activeTabId)) == null ? void 0 : _a.view) !== void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: styles.tabViewContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabView, { view: (_b = tabs.find((tab_0) => tab_0.id === activeTabId)) == null ? void 0 : _b.view }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(UKFlex, { centerHorizontally: true, centerVertically: true, direction: "column", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UKFlex, { direction: "column", centerHorizontally: true, centerVertically: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { text: "You have no tabs!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKSeparator, { direction: "column" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: "Create a new tab by clicking the button below." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKButton, { onClick: () => {
        setTabs([homeTab()]);
      }, text: "Create new tab" })
    ] }) }) });
    $[29] = activeTabId;
    $[30] = tabs;
    $[31] = t12;
  } else {
    t12 = $[31];
  }
  let t13;
  if ($[32] !== t11 || $[33] !== t12) {
    t13 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.page, children: [
      t11,
      t12
    ] });
    $[32] = t11;
    $[33] = t12;
    $[34] = t13;
  } else {
    t13 = $[34];
  }
  let t14;
  if ($[35] !== t13 || $[36] !== t7) {
    t14 = /* @__PURE__ */ jsxRuntimeExports.jsxs(UKSidebarContainer, { children: [
      t7,
      t13
    ] });
    $[35] = t13;
    $[36] = t7;
    $[37] = t14;
  } else {
    t14 = $[37];
  }
  return t14;
};
const FILES_ICON = "" + new URL("icon-BIFqC8G9.avif", import.meta.url).href;
const FilesRouter = () => {
  const $ = compilerRuntimeExports.c(6);
  const applicationPanelContext = React.useContext(ApplicationPanelContext);
  let t0;
  if ($[0] !== applicationPanelContext) {
    t0 = () => {
      applicationPanelContext.setApplicationDisplayName("Files");
      applicationPanelContext.setApplicationIcon(FILES_ICON);
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
    t2 = {
      headerImage: FILES_ICON,
      header: "YourDash Files",
      body: "Create and manage your files with ease.",
      actions: [{
        label: "Continue",
        changeTo: "next",
        onClick: _temp2
      }, {
        label: "Skip and use defaults",
        changeTo: "completed"
      }]
    };
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKOnBoarding, { applicationId: "uk-ewsgit-files", pages: [t2, {
      headerImage: "/assets/productLogos/yourdash.svg",
      header: "This is Coming soon...",
      body: "This onBoarding Menu is coming soon...",
      allowGoBack: true,
      actions: [{
        label: "Continue to application",
        changeTo: "completed",
        onClick: _temp3
      }]
    }] });
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(Routes, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { element: t3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { index: true, element: /* @__PURE__ */ jsxRuntimeExports.jsx(ApplicationLayout, {}) }) }) });
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
function _temp3() {
}
export {
  FilesRouter as default
};
//# sourceMappingURL=index-C1bVfLIL.js.map
