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
        <input
          style={{ outline: inputError ? "1px solid red" : "" }}
          onChange={inputChangeHandler}
          className={styles.input}
          type="text"
          id="tournirName"
        />
        <p className={styles.error}>{inputError}</p>
      </div>
      <div className={styles.inputsGroup}>
        <label htmlFor="textarea">Участники турнира(по одному в каждой строке)</label>
        <textarea
          style={{ outline: textareaError ? "1px solid red" : "" }}
          onChange={textareaChangeHandler}
          className={styles.textarea} id="textarea"
        />
        <p className={styles.error}>{textareaError}</p>
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
