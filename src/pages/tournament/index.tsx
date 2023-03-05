import React, { useEffect } from "react";
import { Bracket } from "react-brackets";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { RootState } from "app/store/types";
import Header from "widgets/header";
import Footer from "widgets/footer";
import { tournamentModel } from "entities/tournament";
import CustomSeed from "entities/seed";
import { APIRequests } from "shared/api";
import { Layout, Spinner } from "shared/ui";

import styles from "./styles.module.css";

const Tournament = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tournament = useSelector((state: RootState) => state.tournaments.selectedTournament);

  useEffect(() => {
    dispatch(tournamentModel.setTournamentPageLoader(true));
    if (id) {
      APIRequests.getTournament(Number(id))
        .then((responce) => dispatch(tournamentModel.setSelectedTournament(responce.data)))
        .finally(() => dispatch(tournamentModel.setTournamentPageLoader(false)))
        .catch((error) => console.log(error));
    }
  }, []);

  return(
    <Layout header={<Header />} footer={<Footer />}>
      {
        tournament
          ? (
            <main className={styles.main}>
              <Bracket
                bracketClassName={styles.bracket}
                rounds={tournament.rounds}
                renderSeedComponent={CustomSeed}
                roundTitleComponent={(title: React.ReactNode) => {
                  return <div className={styles.bracketTitles}>{title}</div>;
                }}
              />
            </main>
          ) : <Spinner />
      }
    </Layout>
  );
};

export default Tournament;