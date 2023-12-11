import { createAsyncThunk } from '@reduxjs/toolkit';

export const addFavoriteAdvert = createAsyncThunk(
  'favorites/addFavoriteAdvert',
  async (car, thunkAPI) => {
    try {
      return car;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFavoriteAdvert = createAsyncThunk(
  'favorites/removeFavoriteAdvert',
  async (id, thunkAPI) => {
    try {
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
