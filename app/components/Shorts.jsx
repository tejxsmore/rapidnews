import ShortsCard from "./Card/ShortsCard";

export default async function Home() {
  try {
    // const res = await fetch(`https://inshorts.me/news/all?offset=0&limit=10`);
    const res = await fetch(`https://inshorts.deta.dev/news?category=science`);
    if (!res.ok) {
      throw new Error(`Data fetch unsuccessfull`);
    }
    const { data } = await res.json();

    return (
      <div>
        {data.map((article) =>
          article.readMoreUrl ? (
            <ShortsCard
              key={article.id}
              title={article.title}
              content={article.content}
              url={article.readMoreUrl}
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
