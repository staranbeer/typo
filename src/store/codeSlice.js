import { createSlice } from "@reduxjs/toolkit";

const codeSlice = createSlice({
  name: "code",
  initialState: {
    codeString: "",
  },
  reducers: {
    changeCode: (state, action) => {
      state.codeString += "taran";
    },
  },
});

export const { changeCode } = codeSlice.actions;

export default codeSlice.reducer;
