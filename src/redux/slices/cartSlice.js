import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalCost: 0,
    totalCount: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.items.push(action.payload);
            state.totalCount = state.items.length;
        },
        addTotalCost: (state, action) => {
            state.totalCost += action.payload;
        },
    },
});

export const { addItemToCart, addTotalCost } = cartSlice.actions;

export default cartSlice.reducer;
