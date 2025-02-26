import { u as useNavigate, q as React, v as useResource, t as tun, z, j as jsxRuntimeExports, I as IncrementLevel, d as clippy, y as useLevelClass, U as UKImage } from "./index-BcPuHMck.js";
const applicationIcon = "_applicationIcon_e1cvh_10";
const applicationLabel = "_applicationLabel_e1cvh_18";
const application = "_application_e1cvh_10";
const left = "_left_e1cvh_59";
const right = "_right_e1cvh_70";
const bottom = "_bottom_e1cvh_81";
const top = "_top_e1cvh_92";
const styles = {
  applicationIcon,
  applicationLabel,
  application,
  left,
  right,
  bottom,
  top
};
const QuickShortcuts = ({
  side
}) => {
  const navigate = useNavigate();
  const [num, setNum] = React.useState(0);
  const quickShortcutApplications = useResource(() => tun.get("/core/panel/quick-shortcuts", "json", z.object({
    displayName: z.string(),
    id: z.string(),
    endpoint: z.string().optional(),
    url: z.string().optional()
  }).array()), {
    dependencies: [num],
    return: "data"
  });
  window.__yourdashCorePanelQuickShortcutsReload = () => {
    setNum(num + 1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: quickShortcutApplications == null ? void 0 : quickShortcutApplications.map((application2) => {
    if (!application2) return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Invalid Module" });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(IncrementLevel, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => {
      if (application2 == null ? void 0 : application2.endpoint) {
        navigate(application2.endpoint);
      } else if (application2 == null ? void 0 : application2.url) {
        window.location.href = application2.url;
      }
    }, className: clippy(styles.application, side === "top" && styles.top, side === "right" && styles.right, side === "bottom" && styles.bottom, side === "left" && styles.left, useLevelClass(1)), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKImage, { className: styles.applicationIcon, src: tun.baseUrl + `/core/panel/quick-shortcut/icon/${application2.id}`, accessibleLabel: application2.displayName }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.applicationLabel, children: application2.displayName })
    ] }, application2.id) }, application2.id);
  }) });
};
export {
  QuickShortcuts as default
};
//# sourceMappingURL=Widget-B5jnCEb0.js.map
