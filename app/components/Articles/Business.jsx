import Link from "next/link";
import BusinessCard from "./BusinessCard";

export default async function Business() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d829471bf6a544f484c80a39eef483d5`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error(`Data fetch unsuccessfull`);
    }
    const data = await res.json();

    return (
      <div className="bg-blue-100 p-1.5 sm:border-l-2 sm:border-gray-300">
        <Link
          href="/business"
          className="p-1.5 text-3xl text-gray-700 font-bold"
        >
          Business
        </Link>
        <div className="">
          {data.articles
            .slice(0, 8)
            .map((article) =>
              article.urlToImage ? (
                <BusinessCard
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
