import { c as compilerRuntimeExports, j as jsxRuntimeExports, O as Outlet, t as tun, r as reactExports, v as useResource, z, e as UKFlex, E as generateUUID, U as UKImage, b as UKHeading, i as UKSeparator, u as useNavigate, q as React, g as UKIconButton, h as UKIcons, a as Route, R as Routes } from "./index-BcPuHMck.js";
import ApplicationPanelContext from "@yourdash/web/src/app/panel/ApplicationPanelContext.tsx";
import { U as UKContainer } from "./UKContainer-CZaq05Vg.js";
const PHOTOS_ICON = "" + new URL("icon-Df2N_fuO.avif", import.meta.url).href;
const navigation = "_navigation_6blu0_10";
const applicationFrame = "_applicationFrame_6blu0_22";
const applicationView = "_applicationView_6blu0_29";
const styles = {
  navigation,
  applicationFrame,
  applicationView
};
const Layout = () => {
  const $ = compilerRuntimeExports.c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.applicationFrame, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.applicationView, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
const AlbumPage = () => {
  const $ = compilerRuntimeExports.c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Album Page" });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
function toResourceUrl(resourceId) {
  return `${tun.baseUrl}/resource/${resourceId}`;
}
var PhotosMediaType = /* @__PURE__ */ ((PhotosMediaType2) => {
  PhotosMediaType2[PhotosMediaType2["Image"] = 0] = "Image";
  PhotosMediaType2[PhotosMediaType2["Video"] = 1] = "Video";
  PhotosMediaType2[PhotosMediaType2["Unknown"] = 2] = "Unknown";
  return PhotosMediaType2;
})(PhotosMediaType || {});
const MAX_HEIGHT = 320;
function calculateAspectRatio(dimensions) {
  return dimensions.width / dimensions.height;
}
function calculateRowHeight(items, containerWidth, containerHeight, isLast) {
  const sumOfItemsRatio = items.map((item) => calculateAspectRatio({
    width: item.dimensions.width,
    height: item.dimensions.height
  })).reduce((sum, itemRatio) => sum + itemRatio);
  let rowHeight = Math.min(containerWidth / sumOfItemsRatio, MAX_HEIGHT);
  if (items.length === 1 && items[0].dimensions.width > containerWidth) {
    rowHeight = Math.min(containerWidth / calculateAspectRatio({
      width: items[0].dimensions.width,
      height: items[0].dimensions.height
    }), MAX_HEIGHT);
  }
  if (isLast) {
    rowHeight = Math.min(containerHeight + 20, rowHeight);
  }
  return rowHeight;
}
function calculateRowWidth(items, containerHeight) {
  return items.map((item) => containerHeight * calculateAspectRatio({
    width: item.dimensions.width,
    height: item.dimensions.height
  })).reduce((sum, itemWidth) => sum + itemWidth);
}
function splitItemsIntoRows(items, containerWidth, baseRowHeight) {
  const outputRows = [];
  let currentItemIndex = 0;
  let currentItemRow = 0;
  let itemRows = [];
  while (currentItemIndex < items.length) {
    itemRows.push([]);
    do {
      itemRows[currentItemRow].push(items[currentItemIndex]);
      currentItemIndex++;
    } while (currentItemIndex < items.length && calculateRowWidth([...itemRows[currentItemRow], items[currentItemIndex]], baseRowHeight) <= containerWidth);
    const displayHeight = calculateRowHeight(itemRows[currentItemRow], containerWidth, baseRowHeight, items.length === currentItemIndex);
    outputRows.push({
      displayHeight,
      items: itemRows[currentItemRow].map((i) => {
        return {
          media: i,
          displayWidth: displayHeight * calculateAspectRatio({
            width: i.dimensions.width,
            height: i.dimensions.height
          })
        };
      })
    });
    currentItemRow++;
  }
  return outputRows;
}
const AlbumMediaGrid = ({
  albumPath
}) => {
  const containerRef = reactExports.useRef(null);
  const albumData = useResource(() => tun.get(`/uk-ewsgit-photos/album/media/@/${albumPath}`, "json", z.union([z.object({
    path: z.string(),
    type: z.literal(PhotosMediaType.Image),
    metadata: z.object({
      width: z.number(),
      height: z.number(),
      contains: z.object({
        landmarks: z.string().array(),
        people: z.string().array(),
        objects: z.string().array()
      }).optional()
    }),
    resource: z.string()
  }), z.object({
    path: z.string(),
    type: z.literal(PhotosMediaType.Video),
    metadata: z.object({
      width: z.number(),
      height: z.number(),
      duration: z.number(),
      contains: z.object({
        landmarks: z.string().array(),
        people: z.string().array(),
        objects: z.string().array()
      }).optional()
    }),
    resource: z.string()
  })]).array()), {
    return: "data",
    dependencies: [albumPath]
  }) ?? [];
  const [rows, setRows] = reactExports.useState([]);
  console.log({
    albumData
  });
  const updateRows = () => {
    var _a;
    console.log({
      albumData
    });
    setRows(splitItemsIntoRows(albumData, ((_a = containerRef.current) == null ? void 0 : _a.getBoundingClientRect().width) ?? 200, MAX_HEIGHT));
  };
  reactExports.useEffect(() => {
    if (!containerRef.current) return;
    updateRows();
  }, [albumData, containerRef.current]);
  reactExports.useEffect(() => {
    let timer;
    function debounce(func, timeout = 300) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func();
      }, timeout);
    }
    const listener = () => {
      debounce(() => {
        updateRows();
      }, 500);
    };
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(UKFlex, { direction: "column", ref: containerRef, children: rows.map((row) => {
    const uuid = generateUUID();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(UKFlex, { style: {
      height: row.displayHeight,
      width: "100%"
    }, direction: "row", children: row.items.map((item) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(UKImage, { style: {
        width: item.displayWidth,
        height: row.displayHeight
      }, src: toResourceUrl(item.media.resource || "test"), accessibleLabel: "" }, item.media.path);
    }) }, uuid);
  }) });
};
const IndexPage = () => {
  const $ = compilerRuntimeExports.c(4);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { text: "All Photos" });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Albums (TODO)" }) });
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKSeparator, { direction: "column" });
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      t0,
      t1,
      t2,
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlbumMediaGrid, { albumPath: "./Users/admin/Pictures/" }) })
    ] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  return t3;
};
const MediaPage = () => {
  const $ = compilerRuntimeExports.c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Media Page" });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
const SearchPage = () => {
  const $ = compilerRuntimeExports.c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Search Page" });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
const ApplicationRoutes = () => {
  const $ = compilerRuntimeExports.c(9);
  const navigate = useNavigate();
  const applicationPanelContext = React.useContext(ApplicationPanelContext);
  let t0;
  if ($[0] !== applicationPanelContext || $[1] !== navigate) {
    t0 = () => {
      applicationPanelContext.setApplicationDisplayName("YourDash Photos");
      applicationPanelContext.setApplicationIcon(PHOTOS_ICON);
      applicationPanelContext.setOnBackButton(_temp);
      applicationPanelContext.setShowBackButton(false);
      applicationPanelContext.setControls([/* @__PURE__ */ jsxRuntimeExports.jsx(UKIconButton, { accessibleLabel: "Home", icon: UKIcons.Home, onClick: () => {
        navigate(`/app/a/uk-ewsgit-photos/`);
      } }, "home"), /* @__PURE__ */ jsxRuntimeExports.jsx(UKIconButton, { accessibleLabel: "Search", icon: UKIcons.Search, onClick: () => {
        navigate(`/app/a/uk-ewsgit-photos/search/`);
      } }, "search"), /* @__PURE__ */ jsxRuntimeExports.jsx(UKIconButton, { accessibleLabel: "Profile", icon: UKIcons.Person, onClick: () => {
        navigate(`/app/a/uk-ewsgit-photos/profile/`);
      } }, "profile")]);
    };
    $[0] = applicationPanelContext;
    $[1] = navigate;
    $[2] = t0;
  } else {
    t0 = $[2];
  }
  let t1;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  reactExports.useEffect(t0, t1);
  let t2;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, {});
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { index: true, element: /* @__PURE__ */ jsxRuntimeExports.jsx(IndexPage, {}) });
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "search", element: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchPage, {}) });
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "album", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: ":albumId", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AlbumPage, {}) }) });
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsx(Routes, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Route, { element: t2, children: [
      t3,
      t4,
      t5,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "media", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: ":mediaId", element: /* @__PURE__ */ jsxRuntimeExports.jsx(MediaPage, {}) }) })
    ] }) });
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  return t6;
};
function _temp() {
}
export {
  ApplicationRoutes as default
};
//# sourceMappingURL=index-Dyqk_pK1.js.map
