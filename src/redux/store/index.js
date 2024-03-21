import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/user";
import sideBarSlice from "../slices/sidebar";
import modalsSlice from "../slices/modals";
import currentActionIDSlice from "../slices/current-action-id";
import categoriesSlice from "../slices/categories";
import adminsSlice from "../slices/admins";
export const store = configureStore({
  reducer: {
    userSlice,
    sideBarSlice,
    modalsSlice,
    currentActionIDSlice,
    categoriesSlice,
    adminsSlice,
  },
});
