import { c as compilerRuntimeExports, d as clippy, j as jsxRuntimeExports, x as UKIcon, r as reactExports, g as UKIconButton, h as UKIcons, U as UKImage, b as UKHeading, l as UKText, O as Outlet, i as UKSeparator, A as UKButton, e as UKFlex, o as UKCard, C as useLevel, y as useLevelClass, I as IncrementLevel } from "./index-B8tqQDmo.js";
const component$2 = "_component_11sed_10";
const icon = "_icon_11sed_49";
const styles$3 = {
  component: component$2,
  icon
};
const UKButtonWithIcon = (props) => {
  const $ = compilerRuntimeExports.c(10);
  let t0;
  if ($[0] !== props.className) {
    t0 = clippy(styles$3.component, props.className);
    $[0] = props.className;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  let t1;
  if ($[2] !== props.icon) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKIcon, { size: "1.25rem", className: styles$3.icon, icon: props.icon });
    $[2] = props.icon;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  let t2;
  if ($[4] !== props.disabled || $[5] !== props.onClick || $[6] !== props.text || $[7] !== t0 || $[8] !== t1) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: t0, onClick: props.onClick, "aria-label": props.text, disabled: props.disabled, children: [
      t1,
      props.text
    ] });
    $[4] = props.disabled;
    $[5] = props.onClick;
    $[6] = props.text;
    $[7] = t0;
    $[8] = t1;
    $[9] = t2;
  } else {
    t2 = $[9];
  }
  return t2;
};
const page = "_page_rjfsg_6";
const fadeIn = "_fadeIn_rjfsg_1";
const card = "_card_rjfsg_40";
const cardContainer = "_cardContainer_rjfsg_51";
const goBackButton = "_goBackButton_rjfsg_55";
const headerImage = "_headerImage_rjfsg_61";
const header = "_header_rjfsg_61";
const body = "_body_rjfsg_70";
const styles$2 = {
  page,
  fadeIn,
  card,
  cardContainer,
  goBackButton,
  headerImage,
  header,
  body
};
const UKOnBoarding = (t0) => {
  const $ = compilerRuntimeExports.c(26);
  const {
    pages,
    applicationId
  } = t0;
  const [currentPage, setCurrentPage] = reactExports.useState(0);
  const page2 = pages[currentPage];
  if (localStorage.getItem(`yourdash-application-visited-${applicationId}`) || currentPage > pages.length - 1) {
    localStorage.setItem(`yourdash-application-visited-${applicationId}`, "true");
    let t12;
    if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
      t12 = /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
      $[0] = t12;
    } else {
      t12 = $[0];
    }
    return t12;
  }
  let t1;
  if ($[1] !== currentPage || $[2] !== page2.allowGoBack) {
    t1 = page2.allowGoBack && /* @__PURE__ */ jsxRuntimeExports.jsx(UKIconButton, { className: clippy(styles$2.goBackButton, "animate__animated animate__fadeInDown"), accessibleLabel: "Go back to the last page", icon: UKIcons.ChevronLeft, onClick: () => {
      setCurrentPage(currentPage - 1);
    } }, "GoBackButton");
    $[1] = currentPage;
    $[2] = page2.allowGoBack;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  let t2;
  if ($[4] !== page2.headerImage) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKImage, { className: styles$2.headerImage, src: page2.headerImage, accessibleLabel: "" });
    $[4] = page2.headerImage;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== page2.header) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { className: styles$2.header, text: page2.header });
    $[6] = page2.header;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKSeparator, { direction: "column" });
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  let t5;
  if ($[9] !== page2.body) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { className: styles$2.body, text: page2.body });
    $[9] = page2.body;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  let t6;
  if ($[11] !== currentPage || $[12] !== page2.actions || $[13] !== pages.length) {
    let t72;
    if ($[15] !== currentPage || $[16] !== pages.length) {
      t72 = (action) => {
        if (action.icon) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(UKButtonWithIcon, { className: clippy(styles$2.action, styles$2.actionWithIcon, "animate__animated animate__fadeInUp"), text: action.label, icon: action.icon, onClick: () => {
            var _a;
            (_a = action.onClick) == null ? void 0 : _a.call(action);
            if (action.changeTo) {
              bb23: switch (action.changeTo) {
                case "next": {
                  setCurrentPage(currentPage + 1);
                  break bb23;
                }
                case "previous": {
                  if (currentPage > 0) {
                    setCurrentPage(currentPage - 1);
                  }
                  break bb23;
                }
                case "remain": {
                  break bb23;
                }
                case "completed": {
                  setCurrentPage(pages.length + 1);
                  break bb23;
                }
              }
            }
          } }, action.label) });
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(UKButton, { className: clippy(styles$2.action, styles$2.actionWithoutIcon, "animate__animated animate__fadeInUp"), text: action.label, onClick: () => {
          var _a;
          (_a = action.onClick) == null ? void 0 : _a.call(action);
          if (action.changeTo) {
            bb44: switch (action.changeTo) {
              case "next": {
                setCurrentPage(currentPage + 1);
                break bb44;
              }
              case "previous": {
                if (currentPage > 0) {
                  setCurrentPage(currentPage - 1);
                }
                break bb44;
              }
              case "remain": {
                break bb44;
              }
              case "completed": {
                setCurrentPage(pages.length + 1);
                break bb44;
              }
            }
          }
        } }, action.label) });
      };
      $[15] = currentPage;
      $[16] = pages.length;
      $[17] = t72;
    } else {
      t72 = $[17];
    }
    t6 = page2.actions.map(t72);
    $[11] = currentPage;
    $[12] = page2.actions;
    $[13] = pages.length;
    $[14] = t6;
  } else {
    t6 = $[14];
  }
  let t7;
  if ($[18] !== t6) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKFlex, { className: styles$2.actions, direction: "row", children: t6 });
    $[18] = t6;
    $[19] = t7;
  } else {
    t7 = $[19];
  }
  let t8;
  if ($[20] !== t1 || $[21] !== t2 || $[22] !== t3 || $[23] !== t5 || $[24] !== t7) {
    t8 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2.page, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UKCard, { className: styles$2.card, containerClassName: styles$2.cardContainer, children: [
      t1,
      t2,
      t3,
      t4,
      t5,
      t7
    ] }) });
    $[20] = t1;
    $[21] = t2;
    $[22] = t3;
    $[23] = t5;
    $[24] = t7;
    $[25] = t8;
  } else {
    t8 = $[25];
  }
  return t8;
};
const component$1 = "_component_1xxhv_10";
const open = "_open_1xxhv_40";
const styles$1 = {
  component: component$1,
  open
};
const UKSidebarContext = reactExports.createContext({
  openSidebar: () => {
  },
  closeSidebar: () => {
  },
  toggleSidebar: () => {
  },
  isOpen: true
});
const UKSidebar = (t0) => {
  const $ = compilerRuntimeExports.c(6);
  const {
    children
  } = t0;
  const sidebarContext = reactExports.useContext(UKSidebarContext);
  const level = useLevel();
  const t1 = sidebarContext.isOpen && styles$1.open;
  const t2 = useLevelClass(level + 1);
  let t3;
  if ($[0] !== t1 || $[1] !== t2) {
    t3 = clippy(styles$1.component, t1, t2);
    $[0] = t1;
    $[1] = t2;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  let t4;
  if ($[3] !== children || $[4] !== t3) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(IncrementLevel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(UKFlex, { direction: "column", className: t3, children }) });
    $[3] = children;
    $[4] = t3;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  return t4;
};
const component = "_component_f16q1_10";
const styles = {
  component
};
const UKSidebarContainer = (t0) => {
  const $ = compilerRuntimeExports.c(15);
  const {
    children,
    showSidebarByDefault,
    className
  } = t0;
  const [showSidebar, setShowSidebar] = reactExports.useState(showSidebarByDefault || true);
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = () => {
      setShowSidebar(false);
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== showSidebar) {
    t2 = () => {
      setShowSidebar(!showSidebar);
    };
    $[1] = showSidebar;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = () => {
      setShowSidebar(true);
    };
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== showSidebar || $[5] !== t2) {
    t4 = {
      closeSidebar: t1,
      toggleSidebar: t2,
      openSidebar: t3,
      isOpen: showSidebar
    };
    $[4] = showSidebar;
    $[5] = t2;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== className) {
    t5 = clippy(styles.component, className);
    $[7] = className;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== children || $[10] !== t5) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: t5, children });
    $[9] = children;
    $[10] = t5;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  let t7;
  if ($[12] !== t4 || $[13] !== t6) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKSidebarContext.Provider, { value: t4, children: t6 });
    $[12] = t4;
    $[13] = t6;
    $[14] = t7;
  } else {
    t7 = $[14];
  }
  return t7;
};
const UKSidebarToggleButton = (t0) => {
  const $ = compilerRuntimeExports.c(8);
  const {
    className,
    style
  } = t0;
  const sidebarContext = reactExports.useContext(UKSidebarContext);
  const t1 = sidebarContext.isOpen ? "Collapse UKSidebar" : "Expand UKSidebar";
  const t2 = sidebarContext.isOpen ? UKIcons.SidebarCollapse : UKIcons.SidebarExpand;
  let t3;
  if ($[0] !== sidebarContext) {
    t3 = () => {
      sidebarContext.toggleSidebar();
    };
    $[0] = sidebarContext;
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  let t4;
  if ($[2] !== className || $[3] !== style || $[4] !== t1 || $[5] !== t2 || $[6] !== t3) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKIconButton, { style, className, accessibleLabel: t1, icon: t2, onClick: t3 });
    $[2] = className;
    $[3] = style;
    $[4] = t1;
    $[5] = t2;
    $[6] = t3;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  return t4;
};
export {
  UKSidebar as U,
  UKSidebarToggleButton as a,
  UKSidebarContainer as b,
  UKOnBoarding as c
};
//# sourceMappingURL=UKSidebarToggleButton-DGOS0nub.js.map
