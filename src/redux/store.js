import { configureStore } from '@reduxjs/toolkit';
import searchReduser from './slices/searchSlice';

export const store = configureStore({
    reducer: {
        search: searchReduser,
    },
});
