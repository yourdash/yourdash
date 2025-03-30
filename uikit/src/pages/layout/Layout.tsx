import React from "react";
import { UKCard, UKCarousel } from "../../index.tsx";
import UKLayout from "../../../lib/views/layout/UKLayout.tsx";

const LayoutTestPage: React.FC = () => {
  return <UKLayout
    primarySidebar={
      <UKCard>
        Primary Sidebar
      </UKCard>
    }
    secondarySidebar={
      <UKCard>
        Secondary Sidebar
      </UKCard>
    }
    header={
      <UKCard>
        Header
      </UKCard>
    }
    footer={
      <UKCard>
        Footer
      </UKCard>
    }
  >
    <UKCard>
      Children
    </UKCard>
  </UKLayout>
}

export default LayoutTestPage;