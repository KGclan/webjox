import React from "react";

import styles from "./styles.module.css";

interface IButton {
  title: string;
  onClick?: (args: any) => void;
  disabled?: boolean;
}

export const Button = ({ title, onClick, disabled }: IButton) => {
  return(
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
