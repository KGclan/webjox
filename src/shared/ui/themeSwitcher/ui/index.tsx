import React from "react";

import { useTheme } from "../model/useTheme";

import styles from "./styles.module.css";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const changeHandler = () => {
    setTheme((prev: "dark" | "light") => {
      if (prev === "dark") return "light";
      return "dark";
    });
  };

  return(
    <button
      className={styles.button}
      onClick={changeHandler}
    >
      {
        theme === "dark"
          ? "Светлая тема"
          : "Темная тема"
      }
    </button>
  );
};
