import { PostList } from '@/components/PostList';

export default async function News() {
  return (
    <>
      <h1 className="title">Новости и события</h1>
      <PostList />
    </>
  );
}
