import { menuReducer } from '../../redux/slices/menuSlice';
import { configureStore } from "@reduxjs/toolkit";

const createTestStore = () => {
  const store = configureStore({
    reducer: {
      menuReducer
    }
  })
  return store
}

export default createTestStore