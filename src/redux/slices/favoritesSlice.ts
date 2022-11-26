import { MenuItemInFavorites, FavoritesState } from './../../types/menu';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const initialState: FavoritesState = {
  itemsInFavorites: []
}

const favoritesSlice = createSlice({
  name: 'favorites slice',
  initialState: initialState,
  reducers: {
    addRemoveFavorites: (state, action: PayloadAction<MenuItemInFavorites>) => {
      
      const itemIndex = state.itemsInFavorites.findIndex((item) => item.title_fi === action.payload.title_fi)

      if (itemIndex < 0) {
        const newItem = {...action.payload, isLiked: true}
        state.itemsInFavorites.push(newItem)
      } else if (itemIndex >= 0) {
        state.itemsInFavorites[itemIndex].isLiked = false
        state.itemsInFavorites.splice(itemIndex, 1)
      }
    }
  },
  extraReducers: (builder) => {

  }
})

export const favoritesReducer = favoritesSlice.reducer

export const {
  addRemoveFavorites,
} = favoritesSlice.actions