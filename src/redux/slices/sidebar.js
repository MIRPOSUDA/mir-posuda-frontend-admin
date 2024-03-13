import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: true,
};

export const sideBarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    sidebarManager(state) {
      state.open = !state.open;
    },
  },
});

// Action creators are generated for each case reducer function
export const { sidebarManager } = sideBarSlice.actions;

export default sideBarSlice.reducer;
