import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchcategories } from "../Services/CategorieService";


export const getCategories = createAsyncThunk(
    "category/getCategories",
    async(_,thunkAPI)=>{
        const { rejectWithValue } = thunkAPI;
        try{

            const res = await fetchcategories();
            return res.data
        } catch (error) {
            
            return rejectWithValue(error.message);
        }
    }
    
)


export const categorySlice = createSlice({

    name: "category",
    initialState: {
        categories: [],
        isLoading: false,
        success: null,
        error: null,
    },

    extraReducers:(builder) => {
    builder
        .addCase(getCategories.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
    })
        .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
        })
        .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        })
    }



})


export default categorySlice.reducer;