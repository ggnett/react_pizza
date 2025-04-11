import { configureStore } from '@reduxjs/toolkit';
import searchReduser from './slices/searchSlice';
import cartReduser from './slices/cartSlice';
import pizzaReduser from './slices/pizzaSlice'

export const store = configureStore({
    reducer: {
        search: searchReduser,
        cart:cartReduser,
        pizza: pizzaReduser
    },
});
