import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import productsReducer from './productsSlice'
import cartReducer from './cartSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
  },
})

export default store
