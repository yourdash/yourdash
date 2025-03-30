/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import React, { useState } from "react";
import { useParams } from "react-router";
import { z } from "zod";
import { UKButton, UKCard, UKHeading, UKSeparator, UKText, UKTextInput } from "@yourdash/uikit";
import { tun } from "@yourdash/tunnel";

const LoginNextcloudFlowV2Page: React.FC = () => {
  const { token } = useParams();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [successful, setSuccessful] = useState<boolean>(false);

  if (!token) return <>No token</>;

  if (successful) {
    return (
      <>
        <UKHeading text={"Successfully authenticated!"} />
        <UKText text={"You may now safely close the tab."} />
      </>
    );
  }

  return (
    <UKCard>
      <UKHeading text={"Nextcloud Compatability login flow"} />
      <UKSeparator direction={"column"} />
      <UKTextInput
        accessibleName={""}
        placeholder={"username"}
        type="username"
        getValue={setUsername}
      />
      <UKTextInput
        accessibleName={""}
        placeholder={"password"}
        type="password"
        getValue={setPassword}
      />
      <UKSeparator direction={"column"} />
      <UKButton
        text="Login"
        onClick={async () => {
          const resp = await tun.post(
            "/uk-ewsgit-nextcloud/login/nextcloud/flow/v2/authenticate",
            {
              username: username,
              password: password,
              pollToken: token,
            },
            "json",
            z
              .object({
                error: z.string(),
              })
              .or(
                z.object({
                  success: z.boolean(),
                }),
              ),
          );

          // @ts-ignore
          if (resp?.data?.success === true) {
            setSuccessful(true);
            setTimeout(() => {
              window.close();
            }, 2000);
            return 0;
          }
          // coreCSI
          //   .postJson<{ success?: boolean; error?: string }>("/login/nextcloud/flow/v2/authenticate", {
          //     username: username,
          //     password: password,
          //     authtoken: token,
          //   })
          //   .then((r) => {
          //     if (r.success) {
          //       setSuccessful(true)
          //       setTimeout(() => {
          //         window.close();
          //       }, 2000)
          //       return 0;
          //     }
          //   });
        }}
      />
    </UKCard>
  );
};

export default LoginNextcloudFlowV2Page;
