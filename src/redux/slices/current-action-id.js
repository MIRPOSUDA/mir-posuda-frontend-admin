import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentID: 0,
};

export const currentActionIDSlice = createSlice({
  name: "ID",
  initialState,
  reducers: {
    setID(state, { payload }) {
      state.currentID = payload;
    },
  },
});

export const { setID } = currentActionIDSlice.actions;

export default currentActionIDSlice.reducer;
