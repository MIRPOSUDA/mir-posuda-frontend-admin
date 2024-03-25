import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addCategoryModal: false,
  deleteCategoryConfirmationModal: false,
  updateCategoryModal: false,
  addAdminModal: false,
  deleteAdminConfirmationModal: false,
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
