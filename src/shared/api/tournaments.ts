import { AxiosPromise } from "axios";

import { apiInstance } from "./base";
import { ITournament } from "./models";

export const getTournamentsList = (): AxiosPromise<ITournament[]> => apiInstance.get("tournaments");
export const addToTournamentsList =
  (tournament: ITournament): AxiosPromise<ITournament> => apiInstance.post("tournaments", tournament);