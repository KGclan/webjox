import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { APIModels } from "shared/api";

interface IInitialState {
  isTournamentPageLoading: boolean;
  isListLoading: boolean;
  selectedTournament: null | APIModels.ITournament;
  tournaments: APIModels.ITournament[] | null;
}

const initialState: IInitialState = {
  isTournamentPageLoading: false,
  isListLoading: false,
  selectedTournament: null,
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
    setTournamentPageLoader: (state, { payload }: PayloadAction<boolean>) => {
      state.isTournamentPageLoading = payload;
    },
    addItemToTournamentsList: (state, { payload }: PayloadAction<APIModels.ITournament>) => {
      state.tournaments = [payload, ...state.tournaments as APIModels.ITournament[]];
    },
    setSelectedTournament: (state, { payload }: PayloadAction<APIModels.ITournament>) => {
      state.selectedTournament = payload;
    }
  }
});

export const {
  setTournamentsList,
  setLoading,
  addItemToTournamentsList,
  setSelectedTournament,
  setTournamentPageLoader,
} = tournamentModel.actions;
export const reducer = tournamentModel.reducer;