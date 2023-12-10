import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6575da3f0febac18d4035e5e.mockapi.io/api';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async ({ brand, page, isNewRequest }, thunkAPI) => {
    const params = new URLSearchParams({ page, limit: 12 });

    brand && params.append('make', brand);

    try {
      const res = await axios.get('/adverts', { params });

      return { data: res.data, isNewRequest };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
