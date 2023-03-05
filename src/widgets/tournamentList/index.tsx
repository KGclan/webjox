import React from "react";
import { Link } from "react-router-dom";

import { Spinner } from "shared/ui";

import { useTournamentList } from "./hooks";

import styles from "./styles.module.css";

const TournamentList = () => {
  const { isListLoading, tournaments } = useTournamentList();

  if (isListLoading) {
    return (
      <ul className={styles.spinWrapper}>
        <Spinner />
      </ul>
    );
  }

  return(
    <ul className={styles.list}>
      {tournaments?.map((tournament, index) => (
        <li className={styles.item} key={index}>
          <Link to={`bracket/${tournament.id}`} className={styles.link}>{tournament.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TournamentList;