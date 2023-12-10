import { createSlice } from '@reduxjs/toolkit';
import { addFilters } from './filterOperations';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: { brand: '', maxTrafik: '', minMileage: '', maxMileage: '' },

  extraReducers: builder => {
    builder.addCase(addFilters.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

const filtersReducer = filtersSlice.reducer;
export default filtersReducer;
