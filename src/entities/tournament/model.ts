import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { APIModels } from "shared/api";

interface IInitialState {
  isListLoading: boolean;
  tournaments: APIModels.ITournament[] | null;
}

const initialState: IInitialState = {
  isListLoading: false,
  tournaments: null,
};

const tournamentModel = createSlice({
  name: "tournaments",
  initialState,
  reducers: {
    setTournamentsList: (state, { payload }: PayloadAction<APIModels.ITournament[]>) => {
      state.tournaments = payload;
    }
  }
});

export const { setTournamentsList } = tournamentModel.actions;
export const reducer = tournamentModel.reducer;