'use client';
import { formatDate } from '@/services/date/formatDate';
import { formatString } from '@/services/string/formatString';
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
}

export const Post = ({ post }: Props) => {
  return (
    <li className={styles.post}>
      <Link href={`/${post.id}`} style={{ textDecoration: 'none' }}>
        <div className={styles.header}>
          <Image src={post.image_big} alt={post.title} width={382} height={224} />
        </div>
        <div className={styles.body}>
          <p className={styles.date}>{post.date}</p>
          <p className={styles.text}>{post.lead}</p>
        </div>
      </Link>
    </li>
  );
};
