import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addCategoryModal: false,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    modalManager(state, { payload }) {
      state[payload] = !state[payload];
    },
  },
});

export const { modalManager } = modalsSlice.actions;

export default modalsSlice.reducer;
