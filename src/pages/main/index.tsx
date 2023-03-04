import React from "react";

import Footer from "widgets/footer";
import Header from "widgets/header";
import TournamentList from "widgets/tournamentList";
import { Layout } from "shared/ui";

import styles from "./styles.module.css";

const Main = () => {
  return(
    <Layout footer={<Footer />} header={<Header />}>
      <main className={styles.main}>
        <h1 className={styles.title}>Список турниров</h1>
        <TournamentList />
      </main>
    </Layout>
  );
};

export default Main;