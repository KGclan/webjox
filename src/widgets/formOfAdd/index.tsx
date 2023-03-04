import React from "react";
import { Button } from "shared/ui";

import styles from "./styles.module.css";

const FormOfAdd = () => {
  return(
    <form className={styles.form}>
      <h1 className={styles.title}>Добавить турнир</h1>
      <div className={styles.inputsGroup}>
        <label htmlFor="tournirName">Название турнира</label>
        <input className={styles.input} type="text" id="tournirName" />
      </div>
      <div className={styles.inputsGroup}>
        <label htmlFor="textarea">Участники турнира(по одному в каждо строке)</label>
        <textarea className={styles.textarea} id="textarea" />
      </div>
      <div className={styles.inputsGroup}>
        <label htmlFor="checkbox">Сортировать участников в случайном порядке</label>
        <input className={styles.checkbox} type="checkbox" id="checkbox" />
      </div>
      <Button title="Создать" />
    </form>
  );
};

export default FormOfAdd;