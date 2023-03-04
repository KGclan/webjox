import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "app/store/types";
import { tournamentModel } from "entities/tournament";
import { APIRequests } from "shared/api";

export const useTournamentList = () => {
  const tournaments = useSelector((state: RootState) => state.tournaments.tournaments);
  const isListLoading = useSelector((state: RootState) => state.tournaments.isListLoading);
  const dispatch = useDispatch();

  const setTournamentsToList = async () => {
    dispatch(tournamentModel.setLoading(true));
    APIRequests.getTournamentsList()
      .then((responce) => (dispatch(tournamentModel.setTournamentsList(responce.data))))
      .catch((error) => console.log(error))
      .finally(() => dispatch(tournamentModel.setLoading(false)));
  };

  useEffect(() => {
    setTournamentsToList();
  }, []);

  return { tournaments, isListLoading };
};