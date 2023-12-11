import { createSlice } from '@reduxjs/toolkit';
import { addFilters, resetFilters } from './filterOperations';

const initialState = {
  brand: '',
  maxTrafik: '',
  minMileage: '',
  maxMileage: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(addFilters.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(resetFilters.fulfilled, () => {
        return initialState;
      });
  },
});

const filtersReducer = filtersSlice.reducer;
export default filtersReducer;
