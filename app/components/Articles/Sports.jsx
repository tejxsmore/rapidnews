import Link from "next/link";
import SportsCard from "./SportsCard";

export default async function Sports() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=d829471bf6a544f484c80a39eef483d5`
    );
    if (!res.ok) {
      throw new Error(`Data fetch unsuccessfull`);
    }
    const data = await res.json();

    return (
      <div className="p-1.5 bg-gradient-to-br from-yellow-400 to-red-400 border-b-2 border-gray-200">
        <Link href="/sports" className="p-1.5 text-3xl font-bold">
          Sports news
        </Link>
        <div className="sm:flex">
          {data.articles.slice(9, 14).map((article) => (
            <SportsCard
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
