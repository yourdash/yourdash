import React from "react";
import {
  UKBox,
  UKButton,
  UKCard,
  UKContainer,
  UKHeading,
  UKLayout,
  UKSeparator,
  UKSubText,
} from "@yourdash/uikit";
import UserHeader from "./components/UserHeader/UserHeader";
import styles from "./Index.module.scss";
import QuickActions from "./components/QuickActions/QuickActions.tsx";
import BooleanSetting from "../components/BooleanSetting/BooleanSetting.tsx";
import BaseSetting from "../components/BaseSetting/BaseSetting.tsx";
import tun from "@yourdash/tunnel";

const IndexPage: React.FC = () => {
  const val = tun.get("/uk-ewsgit-settings/settings/overview/page/1");

  return (
    <UKLayout
      primarySidebar={
        <UKBox
          style={{
            borderLeft: "none",
            borderTop: "none",
            borderBottom: "none",
            height: "100%",
          }}
        >
          <UKHeading level={2} text={"Categories"} />
          <UKSeparator direction={"column"} />
          <UKButton onClick={() => {}} text={"Hello world!"} />
          <UKButton onClick={() => {}} text={"Hello world!"} />
          <UKButton onClick={() => {}} text={"Hello world!"} />
          <UKButton onClick={() => {}} text={"Hello world!"} />
          <UKSubText text={"YourDash Pre-Alpha"} />
        </UKBox>
      }
    >
      <UserHeader />
      <QuickActions />
      <UKSeparator direction={"column"} />
      <UKContainer className={styles.content}>
        <div>
          <UKHeading text={"Overview"} />
          <UKSeparator direction={"column"} />
        </div>
        <BooleanSetting
          title={"Boolean Setting"}
          settingId={"boolean.setting.id"}
          description={"Boolean Setting Description"}
          defaultValue={false}
          currentValue={true}
          disabled={false}
        />
        <BaseSetting
          description={"Base Setting Description"}
          settingId={"base.setting.id"}
          title={"Base Setting Test"}
          setDefaultValue={() => {}}
          isDefaultValue={true}
        >
          Base Setting Children
        </BaseSetting>
      </UKContainer>
    </UKLayout>
  );
};

export default IndexPage;
