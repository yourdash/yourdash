import { UKButton, UKBox, UKHeading, UKSeparator } from "@yourdash/uikit";
import styles from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
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
        <UKButton onClick={() => {}} text={"Category Name"} />
        <UKButton onClick={() => {}} text={"Category Name"} />
        <UKButton onClick={() => {}} text={"Category Name"} />
        <UKButton onClick={() => {}} text={"Category Name"} />
      </div>
    </UKBox>
  );
};

export default Sidebar;
