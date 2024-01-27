import Link from "next/link";
import EntertainmentCard from "./EntertainmentCard";

export default async function Entertainment() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=d829471bf6a544f484c80a39eef483d5`
    );
    if (!res.ok) {
      throw new Error(`Data fetch unsuccessfull`);
    }
    const data = await res.json();

    return (
      <div className="p-2.5 items-center">
        <div className="px-2.5 py-5 font-semibold text-black">
          <Link href="/entertainment" className="hover:text-saffron">
            ENTERTAINMENT
          </Link>
        </div>
        <div className="md:flex">
          {data.articles
            .slice(8, 12)
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
