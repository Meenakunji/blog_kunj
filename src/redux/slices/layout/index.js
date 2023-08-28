import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: null,
};

const layout = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = layout.actions;

export default layout.reducer;
