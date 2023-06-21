import { configureStore } from '@reduxjs/toolkit';

import { newsReducer } from './slices/newsSlice';
import { newsServiceApi } from './api/newsService';

export const store = configureStore({
  reducer: {
    newsData: newsReducer,
    [newsServiceApi.reducerPath]: newsServiceApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsServiceApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
