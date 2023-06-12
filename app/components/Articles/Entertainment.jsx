import Link from "next/link";
import EntertainmentCard from "./EntertainmentCard";

export default async function Entertainment() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=572c42439a7947dda44e89dd90d6e511`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error(`Data fetch unsuccessfull`);
    }
    const data = await res.json();

    return (
      <div className="p-1.5 bg-blue-100">
        <Link
          href="/entertainment"
          className="p-1.5 text-3xl text-gray-700 font-bold"
        >
          Entertainment
        </Link>
        <div className="sm:flex sm:flex-wrap sm:justify-between sm:border-b-0 border-b-2 border-gray-300">
          {data.articles
            .slice(0, 6)
            .map((article) =>
              article.urlToImage ? (
                <EntertainmentCard
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
