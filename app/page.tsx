export async function getData() {
  const response = await fetch('https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&per_page=9', {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
}

export default async function Home() {
  const posts = await getData();
  return (
    <div className="container">
      <h1>Новости и события</h1>
      <ul>
        {posts.news.map((post: any) => (
          <li key={post.title}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
