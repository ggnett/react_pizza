import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sort: '&sortBy=rating',
    catSort: '',
    filter: '',
    pagInd:0,
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        sortUpd: (state, action) => {
            state.sort = action.payload;
        },
        cartSortUpd: (state, action) => {
            state.catSort = action.payload;
        },
        filterUpd:(state, action) => {
            state.filter = action.payload;
        },
        pagIndUpd:(state, action) => {
            state.pagInd = action.payload;
        },
    },
});

export const { sortUpd, cartSortUpd,filterUpd,pagIndUpd } = searchSlice.actions;

export default searchSlice.reducer;
