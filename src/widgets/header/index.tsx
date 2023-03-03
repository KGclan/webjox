import React from "react";
import { Link } from "react-router-dom";

import { ThemeSwitcher } from "shared/ui";

import styles from "./styles.module.css";

const Header = () => {
  return(
    <header className={styles.header}>
      <ThemeSwitcher />
      <nav className={styles.nav}>
        <Link className={styles.link} to="/">Главная</Link>
        <Link className={styles.link} to="/">Создать сетку</Link>
        <Link className={styles.link} to="/">Список сеток</Link>
      </nav>
    </header>
  );
};

export default Header;