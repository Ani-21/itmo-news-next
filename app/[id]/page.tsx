'use client';
import Image from 'next/image';

import { IPost } from '@/models';
import { useAppSelector } from '@/redux/hooks';
import { newsData } from '@/redux/selectors';

import styles from '@/styles/PostPage.module.scss';
import { ViewsIcon } from '@/components/icons/Views';
import { TabInfo } from '@/components/TabInfo';
import { formatDateWithTime } from '@/services/date/formatDate';

type Props = {
  params: {
    id: string;
  };
};

export default function Post({ params: { id } }: Props) {
  const data = useAppSelector(newsData);

  const foundPost = data.find((post: IPost) => post.id === Number(id))!;

  return (
    <div>
      <h1 className="title">{foundPost.title}</h1>
      <div className={styles.content}>
        <header className={styles.postHeader}>
          <TabInfo text={formatDateWithTime(foundPost.creation_date)} />
          <TabInfo text={String(foundPost.view_count)}>
            <ViewsIcon />
          </TabInfo>
          <TabInfo text={foundPost.category.category_title} />
          <TabInfo text={foundPost.parent_category.category_title} />
        </header>
        <div className={styles.body}>
          <Image fill src={foundPost.image_big} alt={foundPost.title} />
        </div>
        <p>{foundPost.lead}</p>
      </div>
    </div>
  );
}
