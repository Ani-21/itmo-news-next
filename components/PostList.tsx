'use client';
import { useState } from 'react';
import { IPost } from '@/models';
import { Post } from './Post';

import { useGetNewsListQuery } from '@/redux/services/newsService';
import styles from '../styles/PostList.module.scss';
import { publicConfig } from '@/const/vars';

export const PostList = () => {
  const [page, setPage] = useState(1);
  const { data: news, isLoading } = useGetNewsListQuery(page);

  const posts = news?.news;

  return (
    <>
      <ul className={styles.newsContainer}>
        {posts?.map((post: IPost) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};
