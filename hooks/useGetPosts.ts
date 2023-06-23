import { useState, useEffect } from 'react';

import { publicConfig } from '@/const/vars';
import { IPost } from '@/models';

import { formatString } from '@/services/string/formatString';
import { formatDate } from '@/services/date/formatDate';

import { NewsResponse } from './types';

export const useGetPosts = (page: number, locale: number) => {
  const [data, setData] = useState<NewsResponse<IPost>>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState();

  useEffect(() => {
    const fetchData = async (page: number) => {
      setIsLoading(true);
      try {
        const response = await fetch(`${publicConfig.baseUrl}page=${page}&language_id=${locale}`);
        const data: NewsResponse<IPost> = await response.json();
        const preparedPosts = data.news.map((res: IPost) => ({
          ...res,
          lead: formatString(res.lead),
          date: formatDate(res.date, locale),
        }));
        setData({ ...data, news: preparedPosts });
        setIsLoading(false);
      } catch (err: any) {
        setIsError(err);
        throw new Error('Что-то пошло не так', { cause: err });
      }
    };
    fetchData(page);
  }, [page, locale]);

  return { data, isLoading, isError };
};
