/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { z } from "zod";
import IndexCardsPage from "./index.cards.tsx";
import styles from "./index.module.scss";
import { FC, Suspense } from "react";
import { tun, useResource } from "@yourdash/tunnel";
import { UKFlex, UKHeading, UKSpinner } from "@yourdash/uikit";

enum LoginLayout {
  SIDEBAR,
  MODAL,
  CARDS,
}

const LoginIndexPage: FC = () => {
  const instanceMetadata = useResource(
    () =>
      tun.get(
        "/login/instance/metadata",
        "json",
        z.object({
          title: z.string(),
          message: z.string(),
          loginLayout: z.nativeEnum(LoginLayout),
        }),
      ),
    { return: "data", transform: (v) => v },
  );

  const SelectedLayout: FC = () => {
    switch (instanceMetadata?.loginLayout) {
      case LoginLayout.MODAL:
        return <>MODAL layout</>;
      case LoginLayout.CARDS:
        return <IndexCardsPage metadata={instanceMetadata} />;
      case LoginLayout.SIDEBAR:
        return <>SIDEBAR layout</>;
      default:
        return (
          <UKFlex
            centerHorizontally
            centerVertically
            padding
            direction={"column"}
          >
            <UKHeading text={"Awaiting instance response..."} />
          </UKFlex>
        );
    }
  };

  return (
    <>
      <Suspense
        fallback={
          <div className={styles.spinner}>
            <UKSpinner />
          </div>
        }
      >
        <SelectedLayout />
      </Suspense>
    </>
  );
};

export default LoginIndexPage;
