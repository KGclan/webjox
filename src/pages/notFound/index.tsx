import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const NotFound = () => (
  <main className={styles.main}>
    <div className="text-center">
      <p className={styles.error}>404</p>
      <h1 className={styles.title}>
        Страница не найдена
      </h1>
      <p className={styles.message}>
        Извините, мы не смогли натйи данную страницу.
      </p>
      <div className={styles.buttonsWrapper}>
        <Link
          to="/"
          className={styles.gg}
        >
          На главную
        </Link>
      </div>
    </div>
  </main>
);

export default NotFound;