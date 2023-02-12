import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../redux/slices/cartSlices'

const store = configureStore({
   reducer:{
      cart: cartSlice,                   
   }
})

export default store