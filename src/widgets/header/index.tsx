import React from "react";
import { Link } from "react-router-dom";

import { ThemeSwitcher } from "shared/ui";

import styles from "./styles.module.css";

const Header = () => {
  return(
    <header className={styles.header}>
      <ThemeSwitcher />
      <nav className={styles.nav}>
        <Link className={styles.link} to="/">Список турниров</Link>
        <Link className={styles.link} to="/addBracket">Создать турнир</Link>
      </nav>
    </header>
  );
};

export default Header;