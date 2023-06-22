'use client';
import Image from 'next/image';
import Link from 'next/link';

import { IPost } from '@/models';
import { useAppSelector } from '@/redux/hooks';
import { newsData } from '@/redux/selectors';

import styles from '@/styles/PostPage.module.scss';
import { PrevIcon, ViewsIcon } from '@/components/icons';
import { TabInfo } from '@/components/TabInfo';
import { formatPost } from '@/services/posts/formatPost';

type Props = {
  params: {
    id: string;
  };
};

export default function Post({ params: { id } }: Props) {
  const data = useAppSelector(newsData);

  const foundPost = data.find((post: IPost) => post.id === Number(id))!;

  const transformedPost = formatPost(foundPost);

  return (
    <div className={styles.wrapper}>
      <h1 className="title">{transformedPost.title}</h1>
      <div className={styles.content}>
        <header className={styles.post_header}>
          <p>{transformedPost.creation_date}</p>
          <div className={styles.post_summary}>
            <Link href="/">
              <PrevIcon />
            </Link>
            <TabInfo text={String(transformedPost.view_count)}>
              <ViewsIcon />
            </TabInfo>
            <TabInfo text={transformedPost.category} />
            <TabInfo text={transformedPost.parent_category} />
          </div>
        </header>
        <div className={styles.body}>
          {transformedPost.image_big !== null ? (
            <Image fill src={transformedPost.image_big} alt={foundPost.title} priority={false} />
          ) : (
            <div></div>
          )}
        </div>
        <p>{foundPost.lead}</p>
      </div>
    </div>
  );
}
