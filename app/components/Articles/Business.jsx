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
      <div className="bg-violet-900 pt-10 flex flex-col justify-center items-center">
        <div className="p-3">
          <Link
            href="/business"
            className="font-semibold text-gray-200 text-center"
          >
            BUSINESS
          </Link>
        </div>
        <div className="p-3 sm:gap-x-3 sm:flex">
          {data.articles
            .slice(7, 12)
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
