import React from "react";
import { UKContainer, UKHeading, UKLayout, UKSeparator } from "@yourdash/uikit";
import UserHeader from "./components/UserHeader/UserHeader.tsx";
import styles from "./Index.module.scss";
import QuickActions from "./components/QuickActions/QuickActions.tsx";
import { tun } from "@yourdash/tunnel";
import { endpointSchema as SettingsOverviewSchema } from "../../../../backend/src/endpoints/get/settings/overview/page/[pageId]/index.schema.ts";

const IndexPage: React.FC = () => {
  const val = tun.send(SettingsOverviewSchema);

  return (
    <>
      <UserHeader />
      <QuickActions />
      <UKSeparator direction={"column"} />
      <UKContainer className={styles.content}>
        <div>
          <UKHeading text={"Overview"} />
          <UKSeparator direction={"column"} />
        </div>
        {/*        <BooleanSetting
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
        </BaseSetting>*/}
      </UKContainer>
    </>
  );
};

export default IndexPage;
