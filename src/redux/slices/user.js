import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
