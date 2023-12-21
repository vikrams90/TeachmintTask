import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userList: [],
  user: null,
  dataStatus: {
    status: "",
    message: "",
  },
};
export const userSlice = createSlice({
  name: "UserList",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = state.userList.filter((user) => user.id == action.payload)[0];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.dataStatus.status = "pending";
        state.dataStatus.message = "loading data";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.dataStatus.status = "fulfilled";
        state.dataStatus.message = "data successfully loaded";
        state.userList = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.dataStatus.status = "rejected";
        state.dataStatus.message = action.payload;
      });
  },
});

export const fetchUser = createAsyncThunk("FETCH/USER", async (_, thunkAPI) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
