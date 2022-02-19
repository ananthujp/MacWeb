import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../reducer/appSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
