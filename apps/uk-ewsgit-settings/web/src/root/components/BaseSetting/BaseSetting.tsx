import {
  UKCard,
  UKFlex,
  UKHeading,
  UKIconButton,
  UKIcons,
  UKSeparator,
  UKSubText,
} from "@yourdash/uikit";
import React from "react";
import styles from "./BaseSetting.module.scss";

const BaseSetting: React.FC<
  React.PropsWithChildren<{
    title: string;
    settingId: string;
    description: string;
    isDefaultValue: boolean;
    setDefaultValue: () => void;
  }>
> = ({
  title,
  settingId,
  description,
  children,
  isDefaultValue,
  setDefaultValue,
}) => {
  return (
    <UKCard className={styles.card}>
      <UKFlex direction={"column"}>
        <UKIconButton
          icon={UKIcons.Question}
          accessibleLabel={"Options"}
          onClick={() => {
            return 0;
          }}
        />
        {!isDefaultValue && (
          <UKIconButton
            icon={UKIcons.Undo}
            accessibleLabel={"Reset To Default"}
            onClick={() => {
              setDefaultValue();
            }}
          />
        )}
      </UKFlex>
      <UKSeparator direction={"row"} />
      <UKFlex direction={"column"}>
        <UKHeading text={title} level={3} />
        <UKSubText text={description} />
        {children}
      </UKFlex>
    </UKCard>
  );
};

export default BaseSetting;
