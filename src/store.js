import { configureStore } from "@reduxjs/toolkit";
import users from "./features/user/userSlice";
import posts from "./features/user/postSlice";
import time from "./features/user/timeSlice";
const store = configureStore({
    reducer: {
        users,
        posts,
        time,
    }
})

export default store