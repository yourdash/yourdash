import { r as reactExports, c as compilerRuntimeExports, u as useNavigate, p as toAuthImgUrl, U as UKImage, j as jsxRuntimeExports } from "./index-BcPuHMck.js";
const icon = "_icon_1qyyl_6";
const styles = {
  icon
};
const InstanceLogoWidget = (t0) => {
  const $ = compilerRuntimeExports.c(9);
  const {
    panelSize
  } = t0;
  const navigate = useNavigate();
  let T0;
  let t1;
  if ($[0] !== panelSize) {
    const InstancePanelLogos = {
      small: "/panel/logo/small",
      medium: "/panel/logo/medium",
      large: "/panel/logo/large"
    };
    T0 = UKImage;
    t1 = toAuthImgUrl(InstancePanelLogos[panelSize]);
    $[0] = panelSize;
    $[1] = T0;
    $[2] = t1;
  } else {
    T0 = $[1];
    t1 = $[2];
  }
  let t2;
  if ($[3] !== navigate) {
    t2 = () => {
      navigate("/app/a/uk-ewsgit-dash");
    };
    $[3] = navigate;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[5] !== T0 || $[6] !== t1 || $[7] !== t2) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(T0, { src: t1, accessibleLabel: "Instance logo", className: styles.icon, onClick: t2 });
    $[5] = T0;
    $[6] = t1;
    $[7] = t2;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  return t3;
};
const Widget = reactExports.memo(InstanceLogoWidget);
export {
  Widget as default
};
//# sourceMappingURL=Widget-EjyYayv4.js.map
