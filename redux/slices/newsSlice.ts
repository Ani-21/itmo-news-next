import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPost } from '@/models';

export interface NewsState {
  page: number;
  newsData: IPost[];
}

const initialState: NewsState = {
  page: 1,
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
  },
});

export const { setPage, setNewsData } = newsSlice.actions;

export const newsReducer = newsSlice.reducer;
