import { MenuState } from '../../types/menu';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: MenuState = {
  weeklyMenu: {
    meta: {
      generated_timestamp: undefined,
      ref_url: '',
      ref_title: ''
    },
    timeperiod: '', 
    mealdates: []
  },
  dailyMenu: {
    meta: {
      generated_timestamp: undefined,
      ref_url: '',
      ref_title: ''
    },
    courses: {}
  },
  dmIsLoading: false,
}

export const fetchWeeklyMenu = createAsyncThunk(
  'fetchWeeklyMenuEn',
  async () => {
    try {
      const response = await axios.get('https://www.sodexo.fi/en/ruokalistat/output/weekly_json/80')
      return response.data
    } catch (e) {
      console.log('Fetching Weekly Menu went wrong: ', e)
    }
  }
)

export const fetchDailyMenu = createAsyncThunk(
  'fetchDailyMenu',
  async (date:String) => {
    try{
      const response = await axios.get(`https://www.sodexo.fi/ruokalistat/output/daily_json/80/${date}`)
      return response.data
    } catch (e) {
      console.log('Fetching Daily Menu went wrong: ', e)
    }
  }
)

const menuSlice = createSlice({
  name: 'menu slice',
  initialState: initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchDailyMenu.pending, (state) => {
      state.dmIsLoading = true
    }) 
    .addCase(fetchDailyMenu.fulfilled, (state, action) => {
      state.dmIsLoading = false
      state.dailyMenu = action.payload
      return state
    })
    .addCase(fetchWeeklyMenu.fulfilled, (state, action) => {
      state.weeklyMenu = action.payload
      return state
    }) 
  }
})

export const menuReducer = menuSlice.reducer