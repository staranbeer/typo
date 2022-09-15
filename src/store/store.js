import { configureStore } from "@reduxjs/toolkit";

import gameReducer from "./gameSlice";
import timerReducer from "./timerSlice";
import codeReducer from "./codeSlice";

const store = configureStore({
  reducer: {
    game: gameReducer,
    timer: timerReducer,
    code: codeReducer,
  },
});

export default store;
