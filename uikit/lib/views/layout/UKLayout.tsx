import React from "react";
import styles from "./UKLayout.module.scss";

const UKLayout: React.FC<React.PropsWithChildren<{
  primarySidebar?: React.ReactNode,
  secondarySidebar?: React.ReactNode,
  header?: React.ReactNode,
  footer?: React.ReactNode,
}>> = ({
         primarySidebar, secondarySidebar, footer, header, children
       }) => {
  return <div className={styles.layout}>
    {header && <div className={styles.header}>{header}</div>}
    {primarySidebar && <div className={styles.primarySidebar}>{primarySidebar}</div>}
    <div className={styles.children}>
      {children}
    </div>
    {secondarySidebar && <div className={styles.secondarySidebar}>{secondarySidebar}</div>}
    {footer && <div className={styles.footer}>{footer}</div>}
  </div>;
};

export default UKLayout;

