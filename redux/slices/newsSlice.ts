import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPost } from '@/models';

export interface NewsState {
  page: number;
  locale: number;
  newsData: IPost[];
}

const initialState: NewsState = {
  page: 1,
  locale: 1,
  newsData: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setNewsData: (state, action: PayloadAction<IPost[]>) => {
      state.newsData = action.payload;
    },
    setLocale: (state, action: PayloadAction<number>) => {
      state.locale = action.payload;
    },
  },
});

export const { setPage, setNewsData, setLocale } = newsSlice.actions;

export const newsReducer = newsSlice.reducer;
