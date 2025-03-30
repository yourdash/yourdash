import React, { useEffect, useRef, useState } from "react";
import UKCard from "../../components/card/UKCard.tsx";
import UKContainer from "../../components/container/UKContainer.tsx";
import clippy from "../../core/clippy.js";
import { UKIcons } from "../../core/iconDictionary.ts";
import UKIconButton from "../../components/iconButton/UKIconButton.tsx";
import styles from "./carousel.module.scss";

const UKCarousel: React.FC<{
  items: { element: React.ReactElement; id: string }[]; loopAround?: boolean; className?: string; height?: string;
}> = ({ items, className, loopAround, height }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [ currentPage, setCurrentPage ] = useState<number>(0);

  useEffect(() => {
    const scrollElement = scrollRef.current;

    if (!scrollElement) return;

    let listener = () => {
      const scrollRect = scrollElement.getBoundingClientRect();
      let maxOverlap = 0;
      let currentPageIndex = -1;

      Array.from(scrollElement.children).forEach((ele: Element, index: number) => {
        const elementRect = ele.getBoundingClientRect();

        // Calculate the overlap between the element and the scroll element
        const overlap = Math.max(
          0, Math.min(elementRect.right, scrollRect.right) - Math.max(elementRect.left, scrollRect.left));

        // Check if this overlap is greater than the current maximum overlap
        if (overlap > maxOverlap) {
          maxOverlap = overlap;
          currentPageIndex = index;
        }
      });

      // If an element has some overlap, set it as the current page
      if (currentPageIndex !== -1) {
        setCurrentPage(currentPageIndex);
      }
    };

    scrollElement.addEventListener("scroll", listener);

    return () => {
      scrollElement.removeEventListener("scroll", listener);
    };
  }, []);

  return (<UKContainer className={clippy(styles.containerComponent, className)} style={{
    // @ts-ignore
    "--carousel-height": height
  }}>
    <div
      className={styles.component}
      data-pages={true}
      ref={scrollRef}
    >
      {items.map((child, index) => {
        return (<div
          key={child.id}
          className={clippy(styles.page, index === currentPage && styles.activePage)}
        >
          {child.element}
        </div>);
      })}
    </div>
    <div className={styles.controls}>
      <UKIconButton
        accessibleLabel={"previous page"}
        icon={UKIcons.ChevronLeft}
        className={styles.pageControl}
        onClick={() => {
          const scrollElement = scrollRef.current;

          if (!scrollElement) {
            return;
          }

          const carouselTargetPage = scrollElement.children[currentPage - 1] as HTMLDivElement;

          if (!carouselTargetPage) {
            if (loopAround) {
              const carouselTargetPage = scrollElement.children[scrollElement.children.length - 1] as HTMLDivElement;
              carouselTargetPage.scrollIntoView({ behavior: "smooth", inline: "center", block: "center" });
              setCurrentPage(scrollElement.children.length - 1);
            }
            return;
          }

          carouselTargetPage.scrollIntoView({ behavior: "smooth", inline: "center", block: "center" });
          setCurrentPage(currentPage - 1);
        }}
      />
      <UKCard className={styles.indicator} containerClassName={styles.indicatorContainer}>
        {items.map((page, index) => {
          return (<button
            key={page.id}
            className={clippy(styles.pageIndicator, index === currentPage && styles.selected)}
            onClick={() => {
              const scrollElement = scrollRef.current;

              if (!scrollElement) {
                return;
              }

              const carouselTargetPage = scrollElement.children[index] as HTMLDivElement;

              setCurrentPage(index);
              carouselTargetPage.scrollIntoView({ behavior: "smooth", inline: "center", block: "center" });
            }}
          />);
        })}
      </UKCard>
      <UKIconButton
        accessibleLabel={"next page"}
        icon={UKIcons.ChevronRight}
        className={styles.pageControl}
        onClick={() => {
          const scrollElement = scrollRef.current;

          if (!scrollElement) {
            return;
          }

          const carouselTargetPage = scrollElement.children[currentPage + 1] as HTMLDivElement;

          if (!carouselTargetPage) {
            if (loopAround) {
              const carouselTargetPage = scrollElement.children[0] as HTMLDivElement;
              carouselTargetPage.scrollIntoView({ behavior: "smooth", inline: "center", block: "center" });
              setCurrentPage(0);
            }
            return;
          }

          carouselTargetPage.scrollIntoView({ behavior: "smooth", inline: "center", block: "center" });
          setCurrentPage(currentPage + 1);
        }}
      />
    </div>
  </UKContainer>);
};

export default UKCarousel;
