import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/user";
import sideBarSlice from "../slices/sidebar";
export const store = configureStore({
  reducer: {
    userSlice,
    sideBarSlice,
  },
});
