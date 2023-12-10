import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import advertsReducer from './adverts/advertsSlice';
import favoritesReducer from './favorites/favoritesSlice';
import filtersReducer from './filter/filterSlice';

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
};

const persistedFavoritesReduser = persistReducer(
  favoritesPersistConfig,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    filters: filtersReducer,
    favorites: persistedFavoritesReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
