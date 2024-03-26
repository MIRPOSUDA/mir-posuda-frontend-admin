import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { t } from "i18next";
import { toast } from "sonner";

const baseUrl = "https://admin.mirzobox.uz/api";
const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user,
  loading: false,
  error: null,
};

export const authLogin = createAsyncThunk(
  "authLogin/login",
  async (userData) => {
    try {
      const req = await fetch(baseUrl + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      switch (req.status) {
        case 200:
          return await req.json();
        default:
          req;
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

export const authLogout = createAsyncThunk(
  "authLogout/logout",
  async (userData, thunkAPI) => {
    try {
      const user = thunkAPI.getState().userSlice.user;
      const req = await fetch(baseUrl + "/auth/logout", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      switch (req.status) {
        case 200:
          return await req.json();
        default:
          req;
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(authLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authLogin.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
        toast.error(t("toastifyLoginError"));
        console.log(payload);
      })
      .addCase(authLogin.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
        state.error = null;
        localStorage.setItem("user", JSON.stringify(state.user));
        toast.success(t("toastifyLoginSucces"));
      })
      .addCase(authLogout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authLogout.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
        state.error = null;
        toast.success(t("toastifyLogoutSucces"));
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
