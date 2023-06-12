import Link from "next/link";
import SportsCard from "./SportsCard";

export default async function Sports() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=572c42439a7947dda44e89dd90d6e511`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error(`Data fetch unsuccessfull`);
    }
    const data = await res.json();

    return (
      <div className="p-1.5 bg-blue-400">
        <Link href="/sports" className="p-1.5 text-3xl text-white font-bold">
          Sports
        </Link>
        <div className="sm:flex">
          {data.articles
            .slice(0, 5)
            .map((article) =>
              article.urlToImage ? (
                <SportsCard
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
