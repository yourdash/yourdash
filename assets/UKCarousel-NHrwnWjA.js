import { c as compilerRuntimeExports, r as reactExports, d as clippy, j as jsxRuntimeExports, g as UKIconButton, h as UKIcons, o as UKCard } from "./index-BcPuHMck.js";
import { U as UKContainer } from "./UKContainer-CZaq05Vg.js";
const containerComponent = "_containerComponent_ya0ua_6";
const component = "_component_ya0ua_16";
const page = "_page_ya0ua_33";
const controls = "_controls_ya0ua_47";
const indicator = "_indicator_ya0ua_57";
const pageIndicator = "_pageIndicator_ya0ua_64";
const selected = "_selected_ya0ua_71";
const styles = {
  containerComponent,
  component,
  page,
  controls,
  indicator,
  pageIndicator,
  selected
};
const UKCarousel = (t0) => {
  const $ = compilerRuntimeExports.c(27);
  const {
    items,
    className
  } = t0;
  const scrollRef = reactExports.useRef(null);
  const [currentPage, setCurrentPage] = reactExports.useState(0);
  let t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = () => {
      const scrollElement = scrollRef.current;
      if (!scrollElement) {
        return;
      }
      console.log(Array.from(scrollElement.children));
      let timer;
      const listener = () => {
        clearTimeout(timer);
        timer = setTimeout(function() {
          Array.from(scrollElement.children).forEach((ele, index) => {
            if (Math.abs(ele.getBoundingClientRect().left + ele.getBoundingClientRect().width / 2 - (scrollElement.getBoundingClientRect().left + scrollElement.getBoundingClientRect().width / 2)) < ele.getBoundingClientRect().width / 2) {
              setCurrentPage(index);
              return;
            }
          });
        }, 16);
      };
      scrollElement.addEventListener("scroll", listener);
      return () => {
        scrollElement.removeEventListener("scroll", listener);
        clearTimeout(timer);
      };
    };
    t2 = [];
    $[0] = t1;
    $[1] = t2;
  } else {
    t1 = $[0];
    t2 = $[1];
  }
  reactExports.useEffect(t1, t2);
  let t3;
  if ($[2] !== className) {
    t3 = clippy(styles.containerComponent, className);
    $[2] = className;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== items) {
    t4 = items.map(_temp);
    $[4] = items;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] !== t4) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.component, "data-pages": true, ref: scrollRef, children: t4 });
    $[6] = t4;
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] !== currentPage) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKIconButton, { accessibleLabel: "previous page", icon: UKIcons.ChevronLeft, className: styles.pageControl, onClick: () => {
      const scrollElement_0 = scrollRef.current;
      if (!scrollElement_0) {
        return;
      }
      const carouselTargetPage = scrollElement_0.children[currentPage - 1];
      if (!carouselTargetPage) {
        return;
      }
      carouselTargetPage.scrollIntoView({
        behavior: "smooth"
      });
    } });
    $[8] = currentPage;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] !== currentPage || $[11] !== items) {
    let t82;
    if ($[13] !== currentPage) {
      t82 = (page2, index_0) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: clippy(styles.pageIndicator, index_0 === currentPage && styles.selected), onClick: () => {
        const scrollElement_1 = scrollRef.current;
        if (!scrollElement_1) {
          return;
        }
        scrollElement_1.scrollIntoView({
          behavior: "smooth"
        });
        const carouselTargetPage_0 = scrollElement_1.children[index_0];
        carouselTargetPage_0.scrollIntoView({
          behavior: "smooth"
        });
      } }, page2.id);
      $[13] = currentPage;
      $[14] = t82;
    } else {
      t82 = $[14];
    }
    t7 = items.map(t82);
    $[10] = currentPage;
    $[11] = items;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  let t8;
  if ($[15] !== t7) {
    t8 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKCard, { className: styles.indicator, children: t7 });
    $[15] = t7;
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  let t9;
  if ($[17] !== currentPage) {
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKIconButton, { accessibleLabel: "next page", icon: UKIcons.ChevronRight, className: styles.pageControl, onClick: () => {
      const scrollElement_2 = scrollRef.current;
      if (!scrollElement_2) {
        return;
      }
      const carouselTargetPage_1 = scrollElement_2.children[currentPage + 1];
      if (!carouselTargetPage_1) {
        return;
      }
      carouselTargetPage_1.scrollIntoView({
        behavior: "smooth"
      });
    } });
    $[17] = currentPage;
    $[18] = t9;
  } else {
    t9 = $[18];
  }
  let t10;
  if ($[19] !== t6 || $[20] !== t8 || $[21] !== t9) {
    t10 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.controls, children: [
      t6,
      t8,
      t9
    ] });
    $[19] = t6;
    $[20] = t8;
    $[21] = t9;
    $[22] = t10;
  } else {
    t10 = $[22];
  }
  let t11;
  if ($[23] !== t10 || $[24] !== t3 || $[25] !== t5) {
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsxs(UKContainer, { className: t3, children: [
      t5,
      t10
    ] });
    $[23] = t10;
    $[24] = t3;
    $[25] = t5;
    $[26] = t11;
  } else {
    t11 = $[26];
  }
  return t11;
};
function _temp(child) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.page, children: child.element }, child.id);
}
export {
  UKCarousel as U
};
//# sourceMappingURL=UKCarousel-NHrwnWjA.js.map
