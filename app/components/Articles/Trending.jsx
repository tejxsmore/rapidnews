import TrendingCard from "./TrendingCard";

export default async function Trending() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=d829471bf6a544f484c80a39eef483d5`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error(`Data fetch unsuccessfull`);
    }
    const data = await res.json();

    return (
      <div className="bg-violet-900">
        <h1 className="p-3 font-semibold text-gray-200 text-center">
          TRENDING
        </h1>
        <div className="sm:flex p-3 sm:gap-x-3">
          {data.articles
            .slice(0, 3)
            .map((article) =>
              article.urlToImage ? (
                <TrendingCard
                  key={article.url}
                  img={article.urlToImage}
                  title={article.title}
                  url={article.url}
                />
              ) : (
                <div></div>
              )
            )}
        </div>
      </div>
    );
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
