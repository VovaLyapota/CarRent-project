import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './advertsOperations';

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        const carsArray = action.payload.data;
        state.isLoading = false;
        state.error = null;

        state.items = action.payload.isNewRequest
          ? carsArray
          : [...state.items, ...carsArray];
      });
  },
});

function handlePending(state) {
  state.isLoading = true;
}

function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const advertsReducer = advertsSlice.reducer;
export default advertsReducer;
