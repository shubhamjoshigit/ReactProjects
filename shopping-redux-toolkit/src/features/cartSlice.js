import { createSlice } from "@reduxjs/toolkit";
import { data } from "../Data/data";

const initialState = {

    cartItems: data,
    amount: 5,
    total: 0,
    isLoading: true
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart: (state)=>{
            state.cartItems =[];
            state.amount=0;
            state.total=0;
        },

        removeItem: (state, action)=>{
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item)=> item.id !== itemId)
        },

        increase:(state,{payload})=>{
            const cartItem = state.cartItems.find((item)=> item.id === payload.id)
            cartItem.amount = cartItem.amount + 1;
        },

        decrease: (state,action)=>{
            const itemId = action.payload;
            const cartItem = state.cartItems.find((item)=> item.id === itemId)
            cartItem.amount = cartItem.amount - 1;
        },

        calculateTotal: (state)=>{
           let amount=0;
           let total=0;
           state.cartItems.forEach((item)=>{
            amount+=item.amount;
            total+=item.amount * item.price;
           });
           state.amount = amount;
           state.total= total;
        }
    }
});
 
export const { clearCart , removeItem ,increase, decrease, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;