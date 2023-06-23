import { IPost } from '@/models';

import { formatDateWithTime } from '../date/formatDate';

type PostCategory = {
  parent_category: string;
  category: string;
};

type TransdformedPost = Omit<IPost, 'id' | 'image_small' | 'url' | 'category' | 'parent_category' | 'date'> &
  PostCategory;

export const formatPost = (post: IPost, locale: number): TransdformedPost => {
  const transformedPost = {
    title: post.title,
    creation_date: formatDateWithTime(post.creation_date, locale),
    view_count: post.view_count,
    category: post.category.category_title,
    parent_category: post.parent_category.category_title,
    image_big: post.image_big,
    lead: post.lead,
  };

  return transformedPost;
};
