import { createSlice } from "@reduxjs/toolkit";
export const appSlice = createSlice({
  name: "app",
  initialState: {
    camera: false,
    mic: false,
  },
  reducers: {
    setCAM: (state, action) => {
      state.camera = action.payload.camera;
      state.mic = action.payload.mic;
    },
  },
});

export const { setCAM } = appSlice.actions;
export const selectCAM = (state) => ({
  camera: state.app.camera,
  mic: state.app.mic,
});

export default appSlice.reducer;
