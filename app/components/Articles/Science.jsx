import Link from "next/link";
import ScienceCard from "./ScienceCard";

export default async function Science() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=572c42439a7947dda44e89dd90d6e511`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error(`Data fetch unsuccessfull`);
    }
    const data = await res.json();

    return (
      <div className="p-1.5 bg-blue-100 sm:border-b-2 border-gray-300">
        <Link
          href="/science"
          className="p-1.5 text-3xl text-gray-700 font-bold"
        >
          Science
        </Link>
        <div className="sm:flex">
          {data.articles.slice(0, 4).map((article) => (
            <ScienceCard
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
