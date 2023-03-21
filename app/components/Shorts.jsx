import ShortsCard from "./Card/ShortsCard";

export default async function Home() {
  try {
    const res = await fetch(
      `https://inshorts.me/news/trending?offset=0&limit=10`
    );
    if (!res.ok) {
      throw new Error(`Data fetch unsuccessfull`);
    }
    const { data } = await res.json();

    return (
      <div>
        {data.articles.map((article) =>
          article.sourceUrl ? (
            <ShortsCard
              key={article.hashId}
              title={article.title}
              content={article.content}
              url={article.sourceUrl}
              img={article.imageUrl}
            />
          ) : (
            <div></div>
          )
        )}
      </div>
    );
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
