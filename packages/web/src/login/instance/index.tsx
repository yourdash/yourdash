/*
 * Copyright ©2024 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import Heading from "@yourdash/uikit/components/heading/heading.tsx";
import styles from "./index.module.scss";
import Panel from "./components/panel/panel.tsx";
import { FC } from "react";

const LoginInstancePage: FC = () => {
  return (
    <div className={styles.page}>
      <Panel />
      <div className={styles.info}>
        <Heading
          className={styles.title}
          level={1}
          text={"Welcome to YourDash!"}
        />
        <Heading
          className={styles.subtitle}
          level={2}
          text={"The following are the steps required to get started"}
        />
        <ul className={styles.bullets}>
          <li>{"Enter your instance's URL"}</li>
          <li>{"Enter your username"}</li>
          <li>{"Enter your password or create one for a new account"}</li>
          <li>{"If you have any issues, please contact your instance's admin"}</li>
        </ul>
      </div>
    </div>
  );
};

export default LoginInstancePage;
