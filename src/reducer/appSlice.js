import { createSlice } from "@reduxjs/toolkit";
export const appSlice = createSlice({
  name: "app",
  initialState: {
    camera: false,
    mic: false,
    brightness: 100,
    volume: 100,
    wifi: false,
    wifiState: "Off",
    bt: false,
    btState: "Off",
    ad: false,
    adState: "Off",
    notch: true,
  },
  reducers: {
    setCAM: (state, action) => {
      state.camera = action.payload.camera;
      state.mic = action.payload.mic;
    },
    setControlStates: (state, action) => {
      state.brightness = action.payload.brightness;
      state.volume = action.payload.volume;
      state.wifi = action.payload.wifi;
      state.wifiState = action.payload.wifiState;
      state.bt = action.payload.bt;
      state.btState = action.payload.btState;
      state.ad = action.payload.ad;
      state.adState = action.payload.adState;
      state.notch = action.payload.notch;
    },
  },
});

export const { setCAM } = appSlice.actions;
export const { setControlStates } = appSlice.actions;
export const selectCAM = (state) => ({
  camera: state.app.camera,
  mic: state.app.mic,
});
export const selectControlStates = (state) => ({
  brightness: state.app.brightness,
  volume: state.app.volume,
  wifi: state.app.wifi,
  wifiState: state.app.wifiState,
  bt: state.app.bt,
  btState: state.app.btState,
  ad: state.app.ad,
  adState: state.app.adState,
  notch: state.app.notch,
});
//export const selectBrightness = (state) => state.app.brightness;
export default appSlice.reducer;
