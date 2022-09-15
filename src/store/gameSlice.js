// this file contains the generic game state values

import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    hasStarted: false,
    hasEnded: false,
    duration: 2,
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

    changeGameDuration: (state, action) => {
      const { duration } = action.payload;
      state.duration = duration;
    },
  },
});

export const { startGame, stopGame, changeGameDuration } = gameSlice.actions;

export default gameSlice.reducer;
