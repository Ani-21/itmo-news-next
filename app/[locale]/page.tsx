import { useTranslations } from 'next-intl';

import { PostList } from '@/components/PostList';

export default function News() {
  const t = useTranslations('News');

  return (
    <div className="container">
      <h1 className="title">{t('title')}</h1>
      <PostList />
    </div>
  );
}
