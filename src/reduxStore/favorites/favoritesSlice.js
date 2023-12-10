import { createSlice } from '@reduxjs/toolkit';
import { addFavoriteAdvert } from './favoritesOperations';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  extraReducers: builder => {
    builder.addCase(addFavoriteAdvert.fulfilled, (state, action) => {
      state.items = [...action.payload, ...state.items];
    });
  },
});

const favoritesReducer = favoritesSlice.reducer;
export default favoritesReducer;
