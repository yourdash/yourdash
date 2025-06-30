/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import isValidInstance from "./lib/isValidInstance.ts";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./index.preload.module.scss";
import { INSTANCE_BACKEND_URL } from "../../lib/backendUrl.ts";
import { UKDialog, UKHeading, UKFlex, UKButton, UKText } from "@yourdash/uikit";

const LoginIndexPagePreload: FC = () => {
  const navigate = useNavigate();
  const [ validInstance, setValidInstance ] = useState<boolean | undefined>(undefined);
  const [ retryCounter, setRetryCounter ] = useState<number>(0);

  useEffect(() => {
    isValidInstance(INSTANCE_BACKEND_URL).then((isValid) => {
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
