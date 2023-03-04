import React from "react";

import styles from "./styles.module.css";

interface IButton {
  title: string;
  onClick?: (args: any) => void;
}

export const Button = ({ title, onClick }: IButton) => {
  return(
    <button
      className={styles.button}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
