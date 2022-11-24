import { MenuItemInFavorites } from './../../types/menu';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: MenuItemInFavorites[] = []

const favoritesSlice = createSlice({
  name: 'favorites slice',
  initialState: initialState,
  reducers: {
    addRemoveFavorites: (state, action: PayloadAction<MenuItemInFavorites>) => {
      const findItem = state.find((item) => item.title_fi === action.payload.title_fi)

      if (findItem) {
        findItem.isLiked = false
        state = state.filter((item) => (
          item.title_fi !== action.payload.title_fi
        ))
      } else {
        action.payload.isLiked = true
        state.push(action.payload)
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