import { createSlice } from "@reduxjs/toolkit";

const sidebar = localStorage.getItem("sidebar");

const initialState = {
  open: sidebar === "true" ? true : false,
};

export const sideBarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    sidebarManager(state) {
      state.open = !state.open;
      localStorage.setItem("sidebar", state.open);
    },
  },
});

export const { sidebarManager } = sideBarSlice.actions;

export default sideBarSlice.reducer;
