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
      <div id="trending" className="p-2.5 border-b-[1px] border-gray-700">
        <h1 className="px-2.5 py-5 font-semibold text-black">TRENDING</h1>
        <div className="md:flex ">
          {data.articles
            .slice(4, 8)
            .map((article) =>
              article.urlToImage ? (
                <TrendingCard
                  key={article.url}
                  img={article.urlToImage}
                  title={article.title}
                  description={article.description}
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
