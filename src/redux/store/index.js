import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "../slices/sidebar";
export const store = configureStore({
  reducer: {
    sideBarSlice,
  },
});
