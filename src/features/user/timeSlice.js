import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  timezones: [],
  time: "",
  currentTime: {
      time:"",
    date: "",
    day: "",
  },
  pauseTime: "",
  dataStatus: {
    status: "",
    message: "",
  },
};

export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTimeZone.pending, (state, action) => {
        state.dataStatus.status = "pending";
        state.dataStatus.message = "loading data";
      })
      .addCase(fetchTimeZone.fulfilled, (state, action) => {
        state.dataStatus.status = "fulfilled";
        state.dataStatus.message = "loaded data sucessfully";
        state.timezones = action.payload;
      })
      .addCase(fetchTimeZone.rejected, (state, action) => {
        state.dataStatus.status = "error";
        state.dataStatus.message = action.payload;
      })
      .addCase(fetchTime.pending, (state, action) => {
        state.dataStatus.status = "pending";
        state.dataStatus.message = "loading data";
      })
      .addCase(fetchTime.fulfilled, (state, action) => {
        state.dataStatus.status = "fulfilled";
        state.dataStatus.message = "loaded data sucessfully";
        state.time = action.payload;
        state.currentTime.date = action.payload.datetime.split("T")[0];
          state.currentTime.time = action.payload.datetime.split("T")[1].split("+")[0];
        ;
        switch (action.payload.day_of_week) {
          case 1:
            state.currentTime.day = "monday";
            break;
          case 2:
            state.currentTime.day = "tuesday";
            break;
          case 3:
            state.currentTime.day = "wednusday";
            break;
          case 4:
            state.currentTime.day = "thursday";
            break;
          case 5:
            state.currentTime.day = "friday";
            break;
          case 6:
            state.currentTime.day = "saturday";
            break;
          case 7:
            state.currentTime.day = "sunday";
            break;
        }
      })
      .addCase(fetchTime.rejected, (state, action) => {
        state.dataStatus.status = "error";
        state.dataStatus.message = action.payload;
      });
  },
});

export const fetchTimeZone = createAsyncThunk(
  "FETCH/TIMEZONE",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://worldtimeapi.org/api/timezone");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTime = createAsyncThunk(
  "FETCH/TIME",
  async (timezone, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://worldtimeapi.org/api/timezone/${timezone}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default timeSlice.reducer;
