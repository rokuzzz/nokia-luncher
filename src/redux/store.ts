import { favoritesReducer } from './slices/favoritesSlice';
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    favoritesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
