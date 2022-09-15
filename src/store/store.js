import { configureStore } from "@reduxjs/toolkit";

import gameReducer from "./gameSlice";
import timerReducer from "./timerSlice";
import codeReducer from "./codeSlice";
import statsReducer from "./statsSlice";

const store = configureStore({
  reducer: {
    game: gameReducer,
    timer: timerReducer,
    code: codeReducer,
    stats: statsReducer,
  },
});

export default store;
