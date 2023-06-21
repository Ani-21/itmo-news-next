'use client';
import { cnb } from 'cnbuilder';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Post.module.scss';

interface IPost {
  id: number;
  title: string;
  image_big: string;
  date: string;
  lead: string;
}

interface Props {
  post: IPost;
  isLoading: boolean;
}

export const PostCard = ({ post, isLoading }: Props) => {
  return (
    <li
      className={cnb(styles.card_container, {
        [styles.loading]: isLoading,
      })}
    >
      <Link href={`/${post.id}`} style={{ textDecoration: 'none' }}>
        <div className={styles.card_header}>
          <Image src={post.image_big} alt={post.title} fill style={{ ...(isLoading ? { display: 'none' } : {}) }} />
        </div>
        <div className={styles.card_body}>
          <p className={styles.card_date}>{post.date}</p>
          <p className={styles.card_text}>{post.lead}</p>
        </div>
      </Link>
    </li>
  );
};
