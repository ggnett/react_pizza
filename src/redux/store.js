import { configureStore } from '@reduxjs/toolkit';
import searchReduser from './slices/searchSlice';
import cartReduser from './slices/cartSlice';

export const store = configureStore({
    reducer: {
        search: searchReduser,
        cart:cartReduser
    },
});
