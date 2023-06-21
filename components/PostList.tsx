'use client';
import { useState, useEffect } from 'react';

import { useGetNewsListQuery } from '@/redux/api/newsService';
import { IPost } from '@/models';
import { useAppDispatch } from '@/redux/hooks';

import { setNewsData } from '../redux/slices/newsSlice';
import styles from '../styles/PostList.module.scss';

import { PostCard } from './PostCard';

export const PostList = () => {
  const [page, setPage] = useState(1);
  const { data: news, isLoading } = useGetNewsListQuery(page);

  const posts = news?.news;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setNewsData(posts ?? []));
  }, [dispatch, posts]);

  // if (isLoading) return <h1>Loading</h1>;

  return (
    <>
      <button onClick={() => setPage(page + 1)}>next</button>
      <h1>{page}</h1>
      <ul className={styles.cards_container}>
        {(isLoading ? Array(9).fill(0) : posts)?.map((post: IPost) => (
          <PostCard key={post.id} post={post} isLoading={isLoading} />
        ))}
      </ul>
    </>
  );
};
