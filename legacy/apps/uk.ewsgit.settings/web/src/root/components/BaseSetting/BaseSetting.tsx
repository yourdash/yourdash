import {
  UKButton,
  UKCard,
  UKDialog,
  UKFlex,
  UKHeading,
  UKIconButton,
  UKIcons,
  UKSeparator,
  UKSubText,
} from "@yourdash/uikit";
import React, { useState } from "react";
import styles from "./BaseSetting.module.scss";

const BaseSetting: React.FC<
  React.PropsWithChildren<{
    title: string;
    settingId: string;
    description: string;
    isDefaultValue: boolean;
    setDefaultValue: () => void;
    about: React.ReactElement;
  }>
> = ({
  title,
  settingId,
  description,
  children,
  isDefaultValue,
  setDefaultValue,
  about,
}) => {
  const [showDialogue, setShowDialogue] = useState(false);

  return (
    <>
      {showDialogue && (
        <UKDialog
          onClose={() => setShowDialogue(false)}
          actions={
            <UKButton text={"Close"} onClick={() => setShowDialogue(false)} />
          }
          header={<UKHeading text={`About ${title}`} />}
        >
          {about || <>Missing About Information</>}
        </UKDialog>
      )}
      <UKCard className={styles.card}>
        <UKFlex direction={"column"}>
          <UKIconButton
            icon={UKIcons.Question}
            accessibleLabel={"Options"}
            onClick={() => {
              setShowDialogue(true);
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
          <UKHeading text={title} level={3} className={styles.heading} />
          <UKSubText className={styles.settingId} text={`(${settingId})`} />
          <UKSubText text={description} />
          {children}
        </UKFlex>
      </UKCard>
    </>
  );
};

export default BaseSetting;
