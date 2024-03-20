import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

// CRUD category
const baseUrl = "https://admin.mirzobox.uz/api";
// const user = localStorage.getItem("user");

export const getCategory = createAsyncThunk(
  "getCategory/categories",
  async (_, thunkAPI) => {
    try {
      const language = localStorage.getItem("language") || "cr";
      const user = thunkAPI.getState().userSlice.user;
      const req = await fetch(baseUrl + `/category/get-all/${language}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
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

export const addCategory = createAsyncThunk(
  "addCategory/categories",
  async (category, thunkAPI) => {
    try {
      const user = thunkAPI.getState().userSlice.user;
      fetch(baseUrl + "/category/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user?.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      });
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteCategory = createAsyncThunk(
  "deleteCategory/categories",
  async (id, thunkAPI) => {
    try {
      const user = thunkAPI.getState().userSlice.user;
      fetch(baseUrl + `/category/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user?.token}`,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

export const handleArchiveCategory = createAsyncThunk(
  "handleArchiveCategory/categories",
  async ({ id, mode }, thunkAPI) => {
    try {
      const user = thunkAPI.getState().userSlice.user;
      fetch(baseUrl + `/category/${mode}/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${user?.token}`,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

export const editCategory = createAsyncThunk(
  "editCategory/categories",
  async (updatedCategoryInfo, thunkAPI) => {
    try {
      const user = thunkAPI.getState().userSlice.user;
      fetch(baseUrl + "/category/update", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${user?.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCategoryInfo),
      });
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategory.rejected, (state) => {
        state.error = state;
        state.loading = false;
      })
      .addCase(getCategory.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
        state.error = null;
      });
  },
});

export default categoriesSlice.reducer;
