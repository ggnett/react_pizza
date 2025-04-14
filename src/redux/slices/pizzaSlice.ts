import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';


import axios from 'axios';
import { itemsType } from './cartSlice';
import { searchSliceInt } from './searchSlice';

export const fetchPizzaByUrl = createAsyncThunk('pizza/fetchPizzaByUrl', async (search:searchSliceInt) => {
    const { data } = await axios.get(
        `https://67eeff3fc11d5ff4bf7b8251.mockapi.io/items?${search.sort + search.catSort + search.filter}&p=${search.pagInd + 1}&l=8`
    );
    return data ;
});


enum status {
    PENDING = 'pending',
    RESOLVE = 'resolve',
    REJECT = 'reject'

}


interface pizzaSliceInt {
    items:itemsType[]
    isLoading: string
}

const initialState:pizzaSliceInt = {
    items: [],
    isLoading: status.PENDING
};

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        addItems: (state, action: PayloadAction<itemsType[]>) => {
            state.items = [...action.payload];
        },
        isLoadingHundler: (state, action: PayloadAction<string>) => {
            state.isLoading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzaByUrl.pending, (state) => {
                state.isLoading = status.PENDING;
            })
            .addCase(fetchPizzaByUrl.fulfilled, (state) => {
                state.isLoading = status.RESOLVE;
            })
            .addCase(fetchPizzaByUrl.rejected, (state) => {
                state.isLoading = status.REJECT;
            });
    },
});

export const { addItems, isLoadingHundler } = pizzaSlice.actions;

export default pizzaSlice.reducer;
