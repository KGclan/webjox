import React from "react";
import { Link } from "react-router-dom";

import { useTournamentList } from "./hooks";

import styles from "./styles.module.css";

const TournamentList = () => {
  const { isListLoading, tournaments } = useTournamentList();

  if (isListLoading) {
    return (
      <ul className={styles.list}>
        <p>Загрузка...</p>
      </ul>
    );
  }

  return(
    <ul className={styles.list}>
      {tournaments?.map((tournament) => (
        <li className={styles.item}>
          <Link to={`tournament/${tournament.id}`} className={styles.link}>{tournament.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TournamentList;