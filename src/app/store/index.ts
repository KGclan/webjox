import { configureStore } from "@reduxjs/toolkit";
import { tournamentModel } from "entities/tournament";

export const store = configureStore({
  reducer: {
    tournaments: tournamentModel.reducer,
  },
});