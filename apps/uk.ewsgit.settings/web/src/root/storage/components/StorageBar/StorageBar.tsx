import { UKCard, UKHeading } from "@yourdash/uikit";
import React from "react";

export interface StorageBarItem {
  id: string,
  displayName: string,
  size: number
}

const StorageBar: React.FC<{ storageTargetDisplayName: string, storageBarItems: StorageBarItem[], totalUsage: number, totalAllocated: number }> = ({ storageTargetDisplayName, storageBarItems, totalUsage, totalAllocated }) => {
  const totalUsagePercentage

  return <>
    <UKCard header={<UKHeading text={`Storage for ${storageTargetDisplayName}`}/>}>
      <div>
      {
        storageBarItems.map(item => {
          const calculatedPercentageWidth: number = 0.2

          return <div id={item.id} style={{ width: `${calculatedPercentageWidth * 100}%`}}>
            {item.displayName}
          </div>
        })
      }
      </div>
    </UKCard>
  </>
}

export default StorageBar;
