import React from "react";

import styles from "./styles.module.css";

interface ILayout {
  header: JSX.Element;
  footer: JSX.Element;
  children: React.ReactNode;
}

export const Layout = ({ header, footer, children }: ILayout) => (
  <div className={styles.wrapper}>
    {header}
    {children}
    {footer}
  </div>
);