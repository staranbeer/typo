import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    timer: 0,
  },
  reducers: {
    incrementTimer: (state) => {
      state.timer += 1;
    },
    stopTimer: (state) => {
      state.timer = state.timer;
    },

    resetTimer: (state) => {
      state.timer = 0;
    },
  },
});

export const { incrementTimer, resetTimer, stopTimer } = timerSlice.actions;

export default timerSlice.reducer;
