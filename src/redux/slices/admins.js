import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

// CRUD category
const baseUrl = "https://admin.mirzobox.uz/api";
const user = JSON.parse(localStorage.getItem("user"));

export const getAdmins = createAsyncThunk(
  "getAdmins/admins",
  async (_, thunkAPI) => {
    try {
      const req = await fetch(baseUrl + "/auth/get-all-admins", {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      });
      switch (req.status) {
        case 200:
          return await req.json();
        case 204:
          return [];
        case 401:
          throw new Error(t("mustLogin"));
        default:
          req;
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

export const addAdmin = createAsyncThunk(
  "addAdmin/admins",
  async (adminInfo, thunkAPI) => {
    try {
      const req = await fetch(baseUrl + "/auth/register", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminInfo),
      });
      switch (req.status) {
        case 200:
          return await req.json();
        case 204:
          return [];
        case 401:
          throw new Error(t("mustLogin"));
        default:
          req;
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteAdmin = createAsyncThunk(
  "deleteAdmin/admins",
  async (id, thunkAPI) => {
    try {
      const req = await fetch(baseUrl + `/auth/delete-account/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      });
      switch (req.status) {
        case 200:
          return await req.json();
        case 204:
          return [];
        case 401:
          throw new Error(t("mustLogin"));
        default:
          req;
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

export const adminsSlice = createSlice({
  name: "admins",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAdmins.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAdmins.rejected, (state) => {
        state.error = state;
        state.loading = false;
        location.pathname = "/login";
      })
      .addCase(getAdmins.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
        state.error = null;
      });
  },
});

export const {} = adminsSlice.actions;

export default adminsSlice.reducer;
