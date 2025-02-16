/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { MAX_HEIGHT } from "../../shared/.backup/grid.js";
import { MediaAlbumLargeGridItem } from "../../shared/.backup/types/endpoints/media/album/large-grid.js";
import MediaGridMedia from "../../shared/types/mediaGridMedia.js";
import { PhotosMediaType } from "../../shared/types/mediaType";

export function calculateAspectRatio(dimensions: { width: number; height: number }) {
  return dimensions.width / dimensions.height;
}

function calculateRowHeight(items: MediaGridMedia[], containerWidth: number, containerHeight: number, isLast: boolean) {
  const sumOfItemsRatio = items
    .map((item) => calculateAspectRatio({ width: item.dimensions.width, height: item.dimensions.height }))
    .reduce((sum, itemRatio) => sum + itemRatio);

  let rowHeight = Math.min(containerWidth / sumOfItemsRatio, MAX_HEIGHT);

  if (items.length === 1 && items[0].dimensions.width > containerWidth) {
    rowHeight = Math.min(
      containerWidth / calculateAspectRatio({ width: items[0].dimensions.width, height: items[0].dimensions.height }),
      MAX_HEIGHT,
    );
  }

  if (isLast) {
    rowHeight = Math.min(containerHeight + 20, rowHeight);
  }

  return rowHeight;
}

function calculateRowWidth(items: MediaGridMedia[], containerHeight: number) {
  return items
    .map((item) => containerHeight * calculateAspectRatio({ width: item.dimensions.width, height: item.dimensions.height }))
    .reduce((sum, itemWidth) => sum + itemWidth);
}

export default function splitItemsIntoRows(items: MediaGridMedia[], containerWidth: number, baseRowHeight: number) {
  // const rows: {
  //   displayHeight: number;
  //   items: { media: MediaGridMedia; displayWidth: number }[];
  // }[] = [];
  // let currentRowNumber = 0;
  // let currentRowItem = 0;

  // while (currentRowItem < items.length) {
  //   const rowItems: { media: MediaGridMedia; displayWidth: number }[] = [];

  //   do {
  //     // @ts-ignore
  //     rowItems.push(items[currentRowItem++]);
  //     // @ts-ignore
  //   } while (currentRowItem < items.length && calculateRowWidth([...rowItems, items[currentRowItem]], baseRowHeight) <= containerWidth);

  //   const rowHeight = calculateRowHeight(rowItems, containerWidth, baseRowHeight, items.length === currentRowItem);

  //   rows[currentRowNumber] = {
  //     items: rowItems.map((item) => ({
  //       ...item,
  //       displayWidth: rowHeight * calculateAspectRatio({ width: item.media.dimensions.width, height: item.media.dimensions.height }),
  //     })),
  //     displayHeight: rowHeight,
  //   };

  //   currentRowNumber += 1;
  // }

  // return rows;
  //

  const outputRows: {
    displayHeight: number;
    items: { media: MediaGridMedia; displayWidth: number }[];
  }[] = [];

  let currentItemIndex = 0;
  let currentItemRow = 0;
  let itemRows: MediaGridMedia[][] = [];

  while (currentItemIndex < items.length) {
    itemRows.push([]);

    do {
      itemRows[currentItemRow].push(items[currentItemIndex]);
      currentItemIndex++;
    } while (
      currentItemIndex < items.length &&
      calculateRowWidth([...itemRows[currentItemRow], items[currentItemIndex]], baseRowHeight) <= containerWidth
    );

    const displayHeight = calculateRowHeight(itemRows[currentItemRow], containerWidth, baseRowHeight, items.length === currentItemIndex);

    outputRows.push({
      displayHeight: displayHeight,
      items: itemRows[currentItemRow].map((i) => {
        return {
          media: i,
          displayWidth: displayHeight * calculateAspectRatio({ width: i.dimensions.width, height: i.dimensions.height }),
        };
      }),
    });

    currentItemRow++;
  }

  return outputRows;
}
