/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import UKButton from "@yourdash/uikit-embedded/src/components/button/UKButton.js";
import UKFlex from "@yourdash/uikit-embedded/src/components/flex/UKFlex.js";
import UKHeading from "@yourdash/uikit-embedded/src/components/heading/UKHeading.js";
import UKText from "@yourdash/uikit-embedded/src/components/text/UKText.js";
import UKDialog from "@yourdash/uikit-embedded/src/views/dialog/UKDialog.js";
import LoginIndexPage from "./index.tsx";
import isValidInstance from "./lib/isValidInstance.ts";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./index.preload.module.scss";

const LoginIndexPagePreload: FC = () => {
  const navigate = useNavigate();
  const [ validInstance, setValidInstance ] = useState<boolean | undefined>(undefined);
  const [ retryCounter, setRetryCounter ] = useState<number>(0);

  useEffect(() => {
    isValidInstance(import.meta.env.VITE_INSTANCE_BACKEND_URL).then((isValid) => {
      setValidInstance(isValid);

      if (!isValid) {
        setValidInstance(false);
      } else {
        navigate("/login");
      }
    });
  }, [ retryCounter ]);

  return (<>
    {validInstance === undefined || !validInstance ? (<UKDialog
        header={[
          <UKHeading
              key={"Heading"}
              className={styles.dialogHeading}
              text={"Please wait"}
          />,
        ]}
        actions={[
          <UKFlex
              direction={"row"}
              key={"flex"}
          >
            <UKButton
                text={"Retry"}
                onClick={() => {
                  setRetryCounter(retryCounter + 1);
                }}
            />
          </UKFlex>,
        ]}
    >
      <UKText text={"Checking if the instance backend is online..."}/>
    </UKDialog>) : (<>AAA</>)}
  </>);
};

export default LoginIndexPagePreload;
