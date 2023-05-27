import TrendingCard from "./TrendingCard";

export default async function Trending() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=d829471bf6a544f484c80a39eef483d5`
    );
    if (!res.ok) {
      throw new Error(`Data fetch unsuccessfull`);
    }
    const data = await res.json();

    return (
      <div className="p-1.5 bg-white border-b-2 border-gray-200">
        <h1 className="p-1.5 text-3xl font-bold">Trending news</h1>
        <div className="sm:flex">
          {data.articles.slice(5, 8).map((article) => (
            <TrendingCard
              key={article.url}
              img={article.urlToImage}
              title={article.title}
              description={article.description}
              url={article.url}
            />
          ))}
        </div>
      </div>
    );
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
