import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    hasStarted: false,
    hasEnded: false,
    restarted: false,
    duration: 10,
  },

  reducers: {
    startGame: (state) => {
      state.hasStarted = true;
      state.hasEnded = false;
      state.restarted = false;
    },

    stopGame: (state) => {
      state.hasStarted = false;
      state.hasEnded = true;
    },
    restartGame: (state) => {
      state.restarted = true;
    },
    changeGameDuration: (state, action) => {
      const { duration } = action.payload;
      state.duration = duration;
    },
  },
});

export const { startGame, stopGame, changeGameDuration } = gameSlice.actions;

export default gameSlice.reducer;
