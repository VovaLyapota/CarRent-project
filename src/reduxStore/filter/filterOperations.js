import { createAsyncThunk } from '@reduxjs/toolkit';

export const addFilters = createAsyncThunk(
  'filters/addFilters',
  async (filters, thunkAPI) => {
    try {
      return filters;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetFilters = createAsyncThunk(
  'filters/resetFilters',
  async (filters, thunkAPI) => {
    try {
      return filters;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
