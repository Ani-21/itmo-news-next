'use client';
import { useEffect } from 'react';

import { IPost, Language } from '@/models';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import { page, locale } from '@/redux/selectors';
import { useGetPosts } from '@/hooks/useGetPosts';

import styles from '@/styles/PostList.module.scss';

import { setNewsData } from '@/redux/slices/newsSlice';

import { PostCard } from './PostCard';
import { Pagination } from './Pagination';

export const PostList = () => {
  const curPage = useAppSelector(page);
  const curLocale = useAppSelector(locale);
  const dispatch = useAppDispatch();
  const { data: news, isLoading } = useGetPosts(curPage, curLocale);

  const posts = news?.news;
  useEffect(() => {
    dispatch(setNewsData(posts ?? []));
  }, [dispatch, posts]);

  return (
    <>
      <Pagination />
      <ul className={styles.cards_container}>
        {(isLoading ? Array(9).fill(0) : posts)?.map((post: IPost) => (
          <PostCard key={post.id} post={post} isLoading={isLoading} />
        ))}
      </ul>
    </>
  );
};
