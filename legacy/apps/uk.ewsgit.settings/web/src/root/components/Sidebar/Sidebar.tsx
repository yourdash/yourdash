import { UKButton, UKBox, UKHeading, UKSeparator } from "@yourdash/uikit";
import styles from "./Sidebar.module.scss";
import React from "react";
import { useNavigate } from "react-router";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
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
      <div className={styles.items}>
        <UKButton
          onClick={() => {
            navigate("/app/a/uk.ewsgit.settings/");
          }}
          text={"Overview"}
        />
        <UKButton
          onClick={() => {
            navigate("/app/a/uk.ewsgit.settings/apps");
          }}
          text={"Applications"}
        />
        <UKButton onClick={() => {}} text={"Customization"} />
        <UKButton onClick={() => {}} text={"Users"} />
        <UKButton onClick={() => {}} text={"Instance"} />
      </div>
    </UKBox>
  );
};

export default Sidebar;
