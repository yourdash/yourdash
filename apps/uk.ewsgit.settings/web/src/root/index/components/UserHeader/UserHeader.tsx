import {
  UKCard,
  UKFlex,
  UKHeading,
  UKImage,
  UKSeparator,
  UKSubText,
} from "@yourdash/uikit";
import React from "react";
import styles from "./UserHeader.module.scss";

const sampleUserData: { name: string; username: string; pronouns: string } = {
  name: "Admin Istrator",
  username: "admin",
  pronouns: "",
};

const UserHeader: React.FC = () => {
  return (
    <UKCard containerClassName={styles.card}>
      <UKFlex direction={"row"} style={{ height: "16rem" }}>
        <UKImage src={"/favicon.svg"} accessibleLabel={"User Profile Avatar"} />
        <UKSeparator direction={"row"} />
        <UKFlex direction={"column"} centerVertically={true}>
          <UKHeading className={styles.displayName} text={sampleUserData.name} />
          <UKSubText
            text={`@${sampleUserData.username}${sampleUserData.pronouns !== "" ? ` | ${sampleUserData.pronouns}` : ""}`}
            className={styles.username}
          />
        </UKFlex>
      </UKFlex>
    </UKCard>
  );
};

export default UserHeader;
