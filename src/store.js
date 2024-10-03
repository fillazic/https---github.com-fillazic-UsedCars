import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './slices/carSlice';
import searchReducer from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    search: searchReducer,
  },
});
