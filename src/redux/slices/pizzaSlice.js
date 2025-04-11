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
};

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        addItems: (state, action) => {
            state.items = [...action.payload];
        },
    },
});

export const { addItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
