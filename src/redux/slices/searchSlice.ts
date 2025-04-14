import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface searchSliceInt {
    sort:string,
    catSort: string,
    filter:string,
    pagInd:number
}

const initialState:searchSliceInt = {
    sort: '&sortBy=rating',
    catSort: '',
    filter: '',
    pagInd: 0,
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        sortUpd: (state, action: PayloadAction<string>) => {
            state.sort = action.payload;
        },
        catSortUpd: (state, action: PayloadAction<string>) => {
            state.catSort = action.payload;
        },
        filterUpd: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
        pagIndUpd: (state, action: PayloadAction<number>) => {
            state.pagInd = action.payload;
        },
    },
});

export const { sortUpd, catSortUpd, filterUpd, pagIndUpd } = searchSlice.actions;

export default searchSlice.reducer;
