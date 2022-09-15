import { createSlice } from "@reduxjs/toolkit";
import generateKeywords from "../../lib/generateKeywords";

const codeSlice = createSlice({
  name: "code",
  initialState: {
    mode: "",
    keywords: generateKeywords(),
  },
  reducers: {
    changeCode: (state, action) => {
      state.codeString += "taran";
    },
  },
});

export const { changeCode } = codeSlice.actions;

export default codeSlice.reducer;
