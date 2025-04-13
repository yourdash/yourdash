import { UKCard, UKFlex, UKHeading, UKImage, UKSeparator, UKSubText } from "@yourdash/uikit";
import React from "react";
import styles from "./UserHeader.module.scss"

const UserHeader: React.FC = () => {
  return <UKCard containerClassName={styles.card}>
    <UKFlex direction={"row"} style={{ height: "7.5rem" }}>
      <UKImage src={"/favicon.svg"} accessibleLabel={"User Profile Avatar"} />
      <UKSeparator direction={"row"}/>
      <UKFlex direction={"column"} centerVertically={true}>
        <UKHeading text={"User Full Name"} />
        <UKSubText text={"Username"} />
      </UKFlex>
    </UKFlex>
  </UKCard>;
};

export default UserHeader;