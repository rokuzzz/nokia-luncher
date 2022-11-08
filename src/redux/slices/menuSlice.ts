import { WeeklyMenu } from '../../types/weeklyMenuApiData';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: WeeklyMenu = {
  weeklyMenuEn: {
    meta: {
      generated_timestamp: undefined,
      ref_url: '',
      ref_title: ''
    },
    timeperiod: '', 
    mealdates: []
  },
  weeklyMenuFi: {
    meta: {
      generated_timestamp: undefined,
      ref_url: '',
      ref_title: ''
    },
    timeperiod: '', 
    mealdates: []
  }
}

export const fetchWeeklyMenuEn = createAsyncThunk(
  'fetchWeeklyMenuEn',
  async () => {
    try {
      const response = await axios.get('https://www.sodexo.fi/en/ruokalistat/output/weekly_json/80')
      return response.data
    } catch (e) {
      console.log('Fetching English Weekly Menu went wrong: ', e)
    }
  }
)

export const fetchWeeklyMenuFi = createAsyncThunk(
  'fetchWeeklyMenuFi',
  async() => {
    try {
      const response = await axios.get('https://www.sodexo.fi/ruokalistat/output/weekly_json/80')
      return response.data
    } catch (e) {
      console.log('Fetching Finnish Weekly Menu went wrong: ', e)
    }
  }
)

const menuSlice = createSlice({
  name: 'menu slice',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeeklyMenuEn.fulfilled, (state, action) => {
      state.weeklyMenuEn = action.payload
      return state
    })
    .addCase(fetchWeeklyMenuFi.fulfilled, (state, action) => {
      state.weeklyMenuFi = action.payload
      return state
    })
  }
})

export const menuReducer = menuSlice.reducer