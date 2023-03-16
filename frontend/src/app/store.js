import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { tmdbApi } from '../services/TMDB';

export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});

setupListeners(store.dispatch);
