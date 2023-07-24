import { createSlice } from "@reduxjs/toolkit";
import {data} from '../component/data';

const initialState = {

    cartItems: data,
    amount: 0,
    total: 0,
    isLoading : true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState
})

export default cartSlice.reducer;