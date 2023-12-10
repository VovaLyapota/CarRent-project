import { createAsyncThunk } from '@reduxjs/toolkit';

export const addFilters = createAsyncThunk(
  'filters/addFilters',
  async (filtersObj, thunkAPI) => {
    try {
      return filtersObj;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
