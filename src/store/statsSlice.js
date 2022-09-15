import { createSlice } from "@reduxjs/toolkit";

const statsSlice = createSlice({
  name: "stats",
  initialState: {
    correct: 0,
    wrong: 0,
    speed: 0,
  },

  reducers: {
    incrementCorrect: (state) => {
      state.correct += 1;
    },

    incrementWrong: (state) => {
      state.wrong += 1;
    },
  },
});

export const { incrementCorrect, incrementWrong } = statsSlice.actions;

export default statsSlice.reducer;
