import React from "react";

import { Spinner } from "../spinner";

import styles from "./styles.module.css";

export const PreLoader = () => (
  <div className={styles.preLoaderWrapper}>
    <div className={styles.spinnerWrapper}><Spinner /></div>
  </div>
);