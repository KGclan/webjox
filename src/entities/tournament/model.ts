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
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isListLoading = payload;
    },
    addItemToTournamentsList: (state, { payload }: PayloadAction<APIModels.ITournament>) => {
      state.tournaments = [payload, ...state.tournaments as APIModels.ITournament[]];
    },
  }
});

export const { setTournamentsList, setLoading, addItemToTournamentsList } = tournamentModel.actions;
export const reducer = tournamentModel.reducer;