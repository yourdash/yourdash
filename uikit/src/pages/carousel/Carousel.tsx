import React from "react";
import { UKCard, UKCarousel } from "../../index.tsx";

const CarouselTestPage: React.FC = () => {
  return <>
    <UKCarousel loopAround={true} height={"8rem"} items={[
      {
        element: (
          <>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
          </>
        ),
        id: "page1",
      },
      {
        element: (
          <>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
          </>
        ),
        id: "page2",
      },
      {
        element: (
          <>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
            <UKCard>Item</UKCard>
          </>
        ),
        id: "page3",
      },
    ]}/>
  </>
}

export default CarouselTestPage;