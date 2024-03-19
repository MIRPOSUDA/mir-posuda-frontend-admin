import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/user";
import sideBarSlice from "../slices/sidebar";
import modalsSlice from "../slices/modals";
export const store = configureStore({
  reducer: {
    userSlice,
    sideBarSlice,
    modalsSlice,
  },
});
