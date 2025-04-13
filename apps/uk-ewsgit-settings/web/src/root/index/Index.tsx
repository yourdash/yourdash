import React from "react";
import { UKBox, UKButton, UKCard, UKContainer, UKHeading, UKLayout, UKSeparator, UKSubText } from "@yourdash/uikit";
import UserHeader from "./components/UserHeader/UserHeader";
import styles from "./Index.module.scss";
import QuickActions from "./components/QuickActions/QuickActions.tsx";

const IndexPage: React.FC = () => {
  return <UKLayout
    primarySidebar={<UKBox>
      <UKHeading level={2} text={"Categories"} />
      <UKSeparator direction={"column"} />
      <UKButton onClick={() => {}} text={"Hello world!"} />
      <UKButton onClick={() => {}} text={"Hello world!"} />
      <UKButton onClick={() => {}} text={"Hello world!"} />
      <UKButton onClick={() => {}} text={"Hello world!"} />
      <UKSubText text={"YourDash Pre-Alpha"} />
    </UKBox>}
  >
    <UserHeader />
    <QuickActions/>
    <UKSeparator direction={"column"} />
    <UKContainer className={styles.content}>
      <div>
        <UKHeading text={"Overview"} />
        <UKSeparator direction={"column"} />
      </div>
      <UKCard>
        This is a setting
      </UKCard>
      <UKCard>
        This is a setting
      </UKCard>
      <UKCard>
        This is a setting
      </UKCard>
      <UKCard>
        This is a setting
      </UKCard>
      <UKCard>
        This is a setting
      </UKCard>
      <UKCard>
        This is a setting
      </UKCard>
      <UKCard>
        This is a setting
      </UKCard>
      <UKCard>
        This is a setting
      </UKCard>
      <UKCard>
        This is a setting
      </UKCard>
      <UKCard>
        This is a setting
      </UKCard>
      <UKCard>
        This is a setting
      </UKCard>
      <UKCard>
        This is a setting
      </UKCard>
      <UKCard>
        This is a setting
      </UKCard>
      <UKCard>
        This is a setting
      </UKCard>
  </UKContainer>
  </UKLayout>;
};

export default IndexPage;