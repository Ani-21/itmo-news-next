import { RootState } from './store';

export const newsData = (state: RootState) => state.newsData.newsData;
export const page = (state: RootState) => state.newsData.page;
export const locale = (state: RootState) => state.newsData.locale;
