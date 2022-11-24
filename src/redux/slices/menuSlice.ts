import { MenuState } from '../../types/menu';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: MenuState = {
  // weeklyMenuEn: {
  //   meta: {
  //     generated_timestamp: undefined,
  //     ref_url: '',
  //     ref_title: ''
  //   },
  //   timeperiod: '', 
  //   mealdates: []
  // },
  // weeklyMenuFi: {
  //   meta: {
  //     generated_timestamp: undefined,
  //     ref_url: '',
  //     ref_title: ''
  //   },
  //   timeperiod: '', 
  //   mealdates: []
  // },
  isLoading: false,
  dailyMenu: {
    meta: {
      generated_timestamp: undefined,
      ref_url: '',
      ref_title: ''
    },
    courses: {}
  },
  error: ''
}

// export const fetchWeeklyMenuEn = createAsyncThunk(
//   'fetchWeeklyMenuEn',
//   async () => {
//     try {
//       const response = await axios.get('https://www.sodexo.fi/en/ruokalistat/output/weekly_json/80')
//       return response.data
//     } catch (e) {
//       console.log('Fetching English Weekly Menu went wrong: ', e)
//     }
//   }
// )

// export const fetchWeeklyMenuFi = createAsyncThunk(
//   'fetchWeeklyMenuFi',
//   async() => {
//     try {
//       const response = await axios.get('https://www.sodexo.fi/ruokalistat/output/weekly_json/80')
//       return response.data
//     } catch (e) {
//       console.log('Fetching Finnish Weekly Menu went wrong: ', e)
//     }
//   }
// )

export const fetchDailyMenu = createAsyncThunk(
  'fetchDailyMenuEn',
  async (date:String) => {
    try{
      const response = await axios.get(`https://www.sodexo.fi/ruokalistat/output/daily_json/80/${date}`)
      return response.data
    } catch (e) {
      console.log('Fetching English Daily Menu went wrong: ', e)
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
      state.isLoading = true
    }) 
    .addCase(fetchDailyMenu.fulfilled, (state, action) => {
      state.isLoading = false
      state.dailyMenu = action.payload
      state.error = ''
      return state
    })
    .addCase(fetchDailyMenu.rejected, (state, action) => {
      state.isLoading = false
      state.dailyMenu = {
        meta: {
          generated_timestamp: undefined,
          ref_url: '',
          ref_title: ''
      },
      courses: {} 
    }
    state.error = action.error.message
  })
    
  }
})

export const menuReducer = menuSlice.reducer