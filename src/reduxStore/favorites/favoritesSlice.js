import { createSlice } from '@reduxjs/toolkit';
import { addFavoriteAdvert, removeFavoriteAdvert } from './favoritesOperations';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  extraReducers: builder => {
    builder
      .addCase(addFavoriteAdvert.fulfilled, (state, action) => {
        state.items = [action.payload, ...state.items];
      })
      .addCase(removeFavoriteAdvert.fulfilled, (state, action) => {
        state.items = state.items.filter(car => car.id !== action.payload);
      });
  },
});

const favoritesReducer = favoritesSlice.reducer;
export default favoritesReducer;
