import { createSlice } from "@reduxjs/toolkit";
import generateKeywords from "../../lib/generateKeywords";

const codeSlice = createSlice({
  name: "code",
  initialState: {
    keywords: generateKeywords(),
  },

  reducers: {
    changeGameMode: (state, action) => {
      const { mode } = action.payload;
      state.keywords = generateKeywords(mode);
    },
  },
});

export const { changeGameMode } = codeSlice.actions;

export default codeSlice.reducer;
