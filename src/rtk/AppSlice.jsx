import { createSlice } from "@reduxjs/toolkit";



const  initialState ={
        cart: JSON.parse(localStorage.getItem('cart')) || [],
    }

const ItemSlice = createSlice({
    name:"item",
    initialState,
    reducers:{
        addtocart:(state,action) =>{
        const product = state.cart.find((product)=>product.id === action.payload.id);
        if(!product){
            state.cart.push({...action.payload,quantity: 1})
        }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        deletefromcart:(state,action) =>
        {
            state.cart = state.cart.filter((product) => product.id !== action.payload.id);
            localStorage.setItem('cart', JSON.stringify(state.cart));

        },
        clearCart: (state) => {
            state.cart = [];
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        increment: (state, action) => {
            const product = state.cart.find((product) => product.id === action.payload);
            product.quantity+=1;
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        decrement: (state, action) => {
            const product = state.cart.find((product) => product.id === action.payload);
            if (product.quantity > 1) {
                product.quantity--;
            }

           
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },

    }

   
})
export const {addtocart,deletefromcart,clearCart,increment,decrement,} =  ItemSlice.actions;
export default  ItemSlice.reducer;