import { createSlice } from "@reduxjs/toolkit";
import { calcLength } from "framer-motion";
import calculateAccuracy from "../../lib/calculateAccuracy";
import calculateSpeed from "../../lib/calculateSpeed";

const statsSlice = createSlice({
  name: "stats",
  initialState: {
    correct: 0,
    wrong: 0,
    speed: 0,
    accuracy: 0,
  },

  reducers: {
    incrementCorrect: (state) => {
      state.correct += 1;
    },

    incrementWrong: (state) => {
      state.wrong += 1;
    },

    resetStats: (state) => {
      state.correct = 0;
      state.wrong = 0;
      state.speed = 0;
      state.accuracy = 0;
    },

    calculateSpeedReducer: (state, action) => {
      const { duration } = action.payload;
      const { correct, wrong } = state;

      state.speed = calculateSpeed(correct, wrong, duration);
    },

    calculateAccuracyReducer: (state) => {
      let { correct, wrong } = state;
      state.accuracy = calculateAccuracy(correct, wrong);
    },
  },
});

export const {
  incrementCorrect,
  incrementWrong,
  resetStats,
  calculateSpeedReducer,
  calculateAccuracyReducer,
} = statsSlice.actions;

export default statsSlice.reducer;
