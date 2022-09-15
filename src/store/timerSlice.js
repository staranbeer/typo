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
    resetTimer: (state) => {
      state.timer = 0;
    },
  },
});

export const { incrementTimer, resetTimer } = timerSlice.actions;

export default timerSlice.reducer;
