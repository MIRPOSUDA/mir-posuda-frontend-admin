import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentID: 0,
};

export const deleteElementIDSlice = createSlice({
  name: "deleteElementIDSlice",
  initialState,
  reducers: {
    setID(state, { payload }) {
      state.currentID = payload;
    },
  },
});

export const { setID } = deleteElementIDSlice.actions;

export default deleteElementIDSlice.reducer;
