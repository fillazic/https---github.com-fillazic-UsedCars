import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../config/supaBase';

// Thunk to fetch car makers from Supabase
export const fetchCars = createAsyncThunk(
    'cars/fetchCars',
    async () => {
      const { data, error } = await supabase
        .from('Car')
        .select(` *, Models ( model_name ), Makes ( make_name )`); 
  
      if (error) {
        throw new (error.message);
      }
      
      return data; // Return the full car data
    }
  );
  
  const carsSlice = createSlice({
    name: 'cars',
    initialState: {
      cars: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCars.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchCars.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.cars = action.payload;
        })
        .addCase(fetchCars.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export default carsSlice.reducer;