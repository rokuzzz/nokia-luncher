import { menuReducer } from './slices/menuSlice';
import { favoritesReducer } from './slices/favoritesSlice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root', 
  storage
} 

const reducers = combineReducers({
  menuReducer,
  favoritesReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
