// this file contains the generic game state values

import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    hasStarted: false,
    hasEnded: false,
  },

  reducers: {
    startGame: (state) => {
      state.hasStarted = true;
      state.hasEnded = false;
    },

    stopGame: (state) => {
      state.hasStarted = false;
      state.hasEnded = true;
    },
  },
});

export const { startGame, stopGame } = gameSlice.actions;

export default gameSlice.reducer;
