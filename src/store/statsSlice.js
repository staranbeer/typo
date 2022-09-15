import { createSlice } from "@reduxjs/toolkit";

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
    },

    calculateSpeed: (state, action) => {
      const { duration } = action.payload;

      let totalChars = state.correct + state.wrong;
      let totalWords = totalChars / 5;
      let totalSpeed = (totalWords / duration) * 60;

      state.speed = totalSpeed.toFixed(2);
    },

    calculateAccuracy: (state) => {
      let totalChars = state.correct + state.wrong;
      if (totalChars !== 0) {
        let totalAccuracy = ((totalChars - state.wrong) / totalChars) * 100;
        state.accuracy = totalAccuracy.toFixed(2);
      }
    },
  },
});

export const {
  incrementCorrect,
  incrementWrong,
  resetStats,
  calculateSpeed,
  calculateAccuracy,
} = statsSlice.actions;

export default statsSlice.reducer;
