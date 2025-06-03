/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { z } from "zod";
import styles from "./index.module.scss";
import { FC } from "react";
import { useNavigate } from "react-router";
import {tun, useResource} from "@yourdash/tunnel";
import { UKButton, UKCard, UKHeading, UKText, UKSubText } from "@yourdash/uikit";

const LoginSuccessPage: FC = () => {
  const navigate = useNavigate();
  // const notice = useResource(() => coreCSI.getJson("/core/login/notice", "/core/login/notice"));
  const notice = useResource(
    () =>
      tun.get(
        "/core/login/notice",
        "json",
        z.object({ author: z.string(), message: z.string(), timestamp: z.number(), display: z.boolean() }),
      ),
  );

  return (
    <div className={styles.page}>
      {notice ? (
        <UKCard
          containerClassName={styles.notice}
          headerClassName={styles.noticeHeader}
          actions={
            <>
              <UKButton
                onClick={() => {
                  navigate("/app");
                }}
                text={"Continue"}
              />
            </>
          }
          header={
            <>
              <UKHeading
                className={styles.heading}
                level={1}
                text={"Notice"}
              />
              <UKSubText text={"authored: " + new Date(notice.timestamp || 0).toLocaleDateString()} />
            </>
          }
        >
          <UKText
            className={styles.message}
            text={notice?.message || "No message..."}
          />
          <UKSubText
            className={styles.author}
            text={`- ${notice?.author || "Unknown author"}`}
          />
        </UKCard>
      ) : (
        // @ts-ignore
        <>{notice?.display === false && <UKRedirect to="/app" />}</>
      )}
    </div>
  );
};

export default LoginSuccessPage;