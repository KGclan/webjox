import React from "react";

import { Button } from "shared/ui";

import { useForm } from "./model/hooks";

import styles from "./styles.module.css";

const FormOfAdd = () => {
  const {
    checkboxChangeHandler,
    inputChangeHandler,
    inputError,
    submitButtonClickHandler,
    textareaChangeHandler,
    textareaError
  } = useForm();

  return(
    <form className={styles.form}>
      <h1 className={styles.title}>Добавить турнир</h1>
      <div className={styles.inputsGroup}>
        <label htmlFor="tournirName">Название турнира</label>
        <input onChange={inputChangeHandler} className={styles.input} type="text" id="tournirName" />
      </div>
      <div className={styles.inputsGroup}>
        <label htmlFor="textarea">Участники турнира(по одному в каждой строке)</label>
        <textarea onChange={textareaChangeHandler} className={styles.textarea} id="textarea" />
      </div>
      <div className={styles.inputsGroup}>
        <label htmlFor="checkbox">Сортировать участников в случайном порядке</label>
        <input onChange={checkboxChangeHandler} className={styles.checkbox} type="checkbox" id="checkbox" />
      </div>
      <Button disabled={!!inputError || !!textareaError} title="Создать" onClick={submitButtonClickHandler} />
    </form>
  );
};

export default FormOfAdd;
