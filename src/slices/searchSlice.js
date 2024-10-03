// src/redux/slices/searchSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { supabase } from '../config/supaBase';

// Async action to fetch cars from Supabase
export const searchVehicle = createAsyncThunk(
  'search/searchVehicle',
  async (searchCriteria) => {
    const { makeId, modelId, price, year, vehicleType } = searchCriteria;

    let query = supabase.from('Car').select('*, Models ( model_name ), Makes ( make_name )');
    
    // Apply filters based on form inputs
    if (makeId) query = query.eq('make_id', makeId);
    if (modelId) query = query.eq('model_id', modelId);
    if (price) query = query.lte('price', price);
    if (year) query = query.eq('year', year);
    if (vehicleType) query = query.eq('vehicleType', vehicleType);

    const { data, error } = await query;

    if (error) throw error;
    return data;
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    cars: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchVehicle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchVehicle.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(searchVehicle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
