import {
  UKSeparator,
  UKContainer,
  UKHeading,
  UKText,
  UKCard,
  UKImage,
  UKFlex,
} from "@yourdash/uikit";
import BaseSetting from "../components/BaseSetting/BaseSetting";
import BooleanSetting from "../components/BooleanSetting/BooleanSetting";
import QuickActions from "../index/components/QuickActions/QuickActions";
import UserHeader from "../index/components/UserHeader/UserHeader";
import styles from "./Home.module.scss";

const HomePage: React.FC = () => {
  return (
    <>
      <UserHeader />
      <QuickActions />
      <UKSeparator direction={"column"} />
      <UKContainer className={styles.content}>
        <UKCard
          className={styles.card}
          onClick={() => {
            return 0;
          }}
        >
          <UKImage
            src={"/assets/productLogos/yourdash.svg"}
            accessibleLabel="YourDash Logo"
            className={styles.image}
          />
          <UKSeparator direction="row" />
          <UKFlex direction="column">
            <UKText className={styles.label} text={"hello world"} />
            <UKText
              className={styles.description}
              text={"this is some sample description text"}
            />
          </UKFlex>
        </UKCard>
        <UKCard
          className={styles.card}
          onClick={() => {
            return 0;
          }}
        >
          <UKImage
            src={"/assets/productLogos/yourdash.svg"}
            accessibleLabel="YourDash Logo"
            className={styles.image}
          />
          <UKSeparator direction="row" />
          <UKFlex direction="column">
            <UKText className={styles.label} text={"hello world"} />
            <UKText
              className={styles.description}
              text={"this is some sample description text"}
            />
          </UKFlex>
        </UKCard>
        <UKCard
          className={styles.card}
          onClick={() => {
            return 0;
          }}
        >
          <UKImage
            src={"/assets/productLogos/yourdash.svg"}
            accessibleLabel="YourDash Logo"
            className={styles.image}
          />
          <UKSeparator direction="row" />
          <UKFlex direction="column">
            <UKText className={styles.label} text={"hello world"} />
            <UKText
              className={styles.description}
              text={"this is some sample description text"}
            />
          </UKFlex>
        </UKCard>
        <UKCard
          className={styles.card}
          onClick={() => {
            return 0;
          }}
        >
          <UKImage
            src={"/assets/productLogos/yourdash.svg"}
            accessibleLabel="YourDash Logo"
            className={styles.image}
          />
          <UKSeparator direction="row" />
          <UKFlex direction="column">
            <UKText className={styles.label} text={"hello world"} />
            <UKText
              className={styles.description}
              text={"this is some sample description text"}
            />
          </UKFlex>
        </UKCard>
        <UKCard
          className={styles.card}
          onClick={() => {
            return 0;
          }}
        >
          <UKImage
            src={"/assets/productLogos/yourdash.svg"}
            accessibleLabel="YourDash Logo"
            className={styles.image}
          />
          <UKSeparator direction="row" />
          <UKFlex direction="column">
            <UKText className={styles.label} text={"hello world"} />
            <UKText
              className={styles.description}
              text={"this is some sample description text"}
            />
          </UKFlex>
        </UKCard>
        <UKCard
          className={styles.card}
          onClick={() => {
            return 0;
          }}
        >
          <UKImage
            src={"/assets/productLogos/yourdash.svg"}
            accessibleLabel="YourDash Logo"
            className={styles.image}
          />
          <UKSeparator direction="row" />
          <UKFlex direction="column">
            <UKText className={styles.label} text={"hello world"} />
            <UKText
              className={styles.description}
              text={"this is some sample description text"}
            />
          </UKFlex>
        </UKCard>
        <UKCard
          className={styles.card}
          onClick={() => {
            return 0;
          }}
        >
          <UKImage
            src={"/assets/productLogos/yourdash.svg"}
            accessibleLabel="YourDash Logo"
            className={styles.image}
          />
          <UKSeparator direction="row" />
          <UKFlex direction="column">
            <UKText className={styles.label} text={"hello world"} />
            <UKText
              className={styles.description}
              text={"this is some sample description text"}
            />
          </UKFlex>
        </UKCard>
        <UKCard
          className={styles.card}
          onClick={() => {
            return 0;
          }}
        >
          <UKImage
            src={"/assets/productLogos/yourdash.svg"}
            accessibleLabel="YourDash Logo"
            className={styles.image}
          />
          <UKSeparator direction="row" />
          <UKFlex direction="column">
            <UKText className={styles.label} text={"hello world"} />
            <UKText
              className={styles.description}
              text={"this is some sample description text"}
            />
          </UKFlex>
        </UKCard>
        <UKCard
          className={styles.card}
          onClick={() => {
            return 0;
          }}
        >
          <UKImage
            src={"/assets/productLogos/yourdash.svg"}
            accessibleLabel="YourDash Logo"
            className={styles.image}
          />
          <UKSeparator direction="row" />
          <UKFlex direction="column">
            <UKText className={styles.label} text={"hello world"} />
            <UKText
              className={styles.description}
              text={"this is some sample description text"}
            />
          </UKFlex>
        </UKCard>
      </UKContainer>
    </>
  );
};

export default HomePage;
