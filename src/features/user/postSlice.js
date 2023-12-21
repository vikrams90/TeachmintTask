import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    posts: [],
    userPosts : [],
    dataStatus: {
        status: "",
        message : "",
    }
}
export const postSlice = createSlice({
    name: "PostData",
    initialState,
    reducers: {
        getUsersPost: (state,action) => {
            state.userPosts = state.posts.filter((item)=>item.id===action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.dataStatus.status = "pending"
            state.dataStatus.message = "loading data"
        }).addCase(fetchPosts.fulfilled, (state, action) => {
            state.dataStatus.status = "fulfilled"
            state.dataStatus.message = "data successfully loaded"
            state.posts = action.payload
        }).addCase(fetchPosts.rejected, (state, action) => {
            state.dataStatus.status = "rejected"
            state.dataStatus.message = action.payload
        })
    }
})

export const fetchPosts = createAsyncThunk("FETCH/POSTS", async (_,thunkAPI) => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const {getUsersPost} = postSlice.actions
export default postSlice.reducer

