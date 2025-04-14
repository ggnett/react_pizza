import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type itemsType = {
    id:string,
    title: string,
    imageUrl: string,
    price: number,
    types?:number[],
    sizes?: number[],
    size?:number,
    weight?:string,
    count:number
    idVnut?:number
}

interface cartSliceInt {
    items:itemsType[],
    totalCost:number,
    totalCount:number,
    idVnut:number
}


const initialState:cartSliceInt = {
    items: [],
    totalCost: 0,
    totalCount: 0,
    idVnut: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.items.push(action.payload);
            state.totalCount++;
        },
        addTotalCost: (state, action) => {
            state.totalCost += action.payload;
        },
        minusTotalCost: (state, action) => {
            state.totalCost -= action.payload;
        },
        addCountOfPizza: (state, action) => {
            state.items[action.payload].count ? state.items[action.payload].count++ : console.log('nf')
        },
        addCountOfPizzaCart: (state, action) => {
            let rez:any = state.items.find((item) => item.idVnut === action.payload);
            let rez2 = state.items.indexOf(rez);
            state.items[rez2].count ? state.items[rez2].count++ : console.log('nf')
        },
        minusCountOfPizza: (state, action) => {
            let rez:any = state.items.find((item) => item.idVnut === action.payload);
            let rez2 = state.items.indexOf(rez);
            state.items[rez2].count--;
        },
        addTotalCount: (state) => {
            state.totalCount++;
        },
        clearCart: (state) => {
            let result = window.confirm('очистить корзину?');
            if (result) state.items = [];
            state.totalCost = 0;
            state.totalCount = 0;
        },
        //udalenie
        minusItem: (state, action) => {
            let result = window.confirm('удалить позицию?');
            if (result) state.items = state.items.filter((item) => item.idVnut !== action.payload);
        },
        // dlia unikalnosti
        plusIdVnut: (state) => {
            state.idVnut++;
        },
        minusTotalCount: (state, action) => {
            state.totalCount -= action.payload;
        },
    },
});

export const selectCart = (state:RootState) => state.cart;

export const {
    addItemToCart,
    addTotalCost,
    addCountOfPizza,
    addTotalCount,
    clearCart,
    minusItem,
    plusIdVnut,
    minusCountOfPizza,
    minusTotalCost,
    addCountOfPizzaCart,
    minusTotalCount,
} = cartSlice.actions;

export default cartSlice.reducer;
