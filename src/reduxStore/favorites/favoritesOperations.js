import { createAsyncThunk } from '@reduxjs/toolkit';

export const addFavoriteAdvert = createAsyncThunk(
  'adverts/addFavoriteAdvert',
  async (car, thunkAPI) => {
    try {
      return car;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
