import { createSlice } from "@reduxjs/toolkit";
export const appSlice = createSlice({
  name: "app",
  initialState: {
    fullscreenHandle: null,
  },
  reducers: {
    setHandle: (state, action) => {
      state.fullscreenHandle = action.payload.fullscreenHandle;
    },
  },
});

export const { setHandle } = appSlice.actions;
export const selectHandle = (state) => state.app.fullscreenHandle;
export default appSlice.reducer;
