import { MenuItem, MenuOfTheDay } from './../../types/menuItems';
import { createSlice } from '@reduxjs/toolkit';

const initialState: MenuOfTheDay[] = []

const menuSlice = createSlice({
  name: 'menu slice',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {

  }
})

export const favoritesReducer = menuSlice.reducer