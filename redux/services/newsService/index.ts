'use client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { publicConfig } from '@/const/vars';
import { IPost } from '@/models';
import { NewsResponse } from './types';
import { formatString } from '@/services/string/formatString';
import { formatDate } from '@/services/date/formatDate';

export const newsServiceApi = createApi({
  reducerPath: 'newsServiceApi',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({ baseUrl: publicConfig.baseUrl }),
  endpoints: (builder) => ({
    getNewsList: builder.query<NewsResponse<IPost>, number>({
      query: (page) => `page=${page}`,

      transformResponse: (response: NewsResponse<IPost>): NewsResponse<IPost> => {
        const preparedPosts = response.news.map((res: IPost) => ({
          ...res,
          lead: formatString(res.lead),
          date: formatDate(res.date),
        }));
        return { ...response, news: preparedPosts };
      },
    }),
  }),
});

export const { useGetNewsListQuery } = newsServiceApi;
