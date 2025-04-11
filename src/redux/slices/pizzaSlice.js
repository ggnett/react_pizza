import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchPizzaByUrl = createAsyncThunk('pizza/fetchPizzaByUrl', async (search) => {
    const { data } = await axios.get(
        `https://67eeff3fc11d5ff4bf7b8251.mockapi.io/items?${search.sort + search.catSort + search.filter}&p=${search.pagInd + 1}&l=8`
    );
    return data;
});

const initialState = {
    items: [],
    isLoading: 'pending'
};

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        addItems: (state, action) => {
            state.items = [...action.payload];
        },
        isLoadingHundler: (state, action) => {
            state.isLoading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzaByUrl.pending, (state) => {
                state.isLoading = 'pending';
            })
            .addCase(fetchPizzaByUrl.fulfilled, (state, action) => {
                state.isLoading = 'resolve';
            })
            .addCase(fetchPizzaByUrl.rejected, (state) => {
                state.isLoading = 'reject';
            });
    },
});

export const { addItems, isLoadingHundler } = pizzaSlice.actions;

export default pizzaSlice.reducer;
