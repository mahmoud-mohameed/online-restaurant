import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./AppSlice"


export const store = configureStore({
    reducer:{
        item: ItemSlice,
        
    }
})