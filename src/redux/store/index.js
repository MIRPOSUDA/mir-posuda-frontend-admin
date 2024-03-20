import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/user";
import sideBarSlice from "../slices/sidebar";
import modalsSlice from "../slices/modals";
import deleteElementIDSlice from "../slices/delete-element-id";
export const store = configureStore({
  reducer: {
    userSlice,
    sideBarSlice,
    modalsSlice,
    deleteElementIDSlice,
  },
});
