import { createSlice } from "@reduxjs/toolkit";
export const appSlice = createSlice({
  name: "app",
  initialState: {
    windows: null,
    mouseX: null,
  },
  reducers: {
    setWindow: (state, action) => {
      state.windows = action.payload.windows;
    },
  },
});

export const { setWindow } = appSlice.actions;
export const selectWindow = (state) => state.app.windows;
export default appSlice.reducer;
