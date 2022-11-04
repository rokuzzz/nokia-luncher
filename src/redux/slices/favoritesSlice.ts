import { ItemAtFavorites } from './../../types/menuItems';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ItemAtFavorites[] = []

const favoritesSlice = createSlice({
  name: 'favorites slice',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {

  }
})

export const favoritesReducer = favoritesSlice.reducer