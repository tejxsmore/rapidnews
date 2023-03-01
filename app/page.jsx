import Article from "./Article";

export default async function Home() {
  const res = await fetch(`https://inshorts.deta.dev/news?category=india`);
  const data = await res.json();

  const news = data.data;
  return (
    <main>
      <h1>Welcome to Rapid NEWS</h1>
      {news.map((article) => (
        <Article
          key={article.id}
          date={article.date}
          title={article.title}
          content={article.content}
          url={article.readMoreUrl}
          img={article.imageUrl}
        />
      ))}
    </main>
  );
}
