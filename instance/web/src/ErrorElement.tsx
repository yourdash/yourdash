/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import React from "react";
import { useRouteError } from "react-router-dom";
import styles from "./ErrorElement.module.scss";
import { UKCard, UKHeading, UKText } from "@yourdash/uikit";

const ErrorElement: React.FC = () => {
  // @ts-ignore
  const error = (useRouteError()?.error as Error) || ({} as Partial<Error>);

  return (
    <div className={styles.page}>
      <UKCard containerClassName={styles.error}>
        <UKHeading level={1} text={"An error has occurred"} />
        {error.message && <UKHeading level={3} text={error.message} />}
        {error.stack && <UKText text={error.stack} />}
      </UKCard>
    </div>
  );
};

export default ErrorElement;
