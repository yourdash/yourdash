import { UKButton, UKFlex, UKIncrementLevel } from "@yourdash/uikit";
import React from "react";
import styles from "./QuickActions.module.scss"

const QuickActions: React.FC = () => {
  return <UKFlex className={styles.actions} direction={"row"} style={{ height: "2.5rem" }} centerVertically={true} centerHorizontally={true}>
    <UKIncrementLevel>
    <UKButton onClick={() => { return 0 }} text={"Edit Profile"} className={styles.actionCard}/>
    <UKButton onClick={() => { return 0 }} text={"Manage Installed Applications"} className={styles.actionCard}/>
    <UKButton onClick={() => { return 0 }} text={"Manage Storage"} className={styles.actionCard}/>
    </UKIncrementLevel>
  </UKFlex>
};

export default QuickActions;