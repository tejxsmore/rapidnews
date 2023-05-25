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
      <div className="bg-beige text-choco border-b-2 border-choco text-lg font-semibold p-1.5">
        <Link href="/entertainment" className="p-1.5 text-3xl font-bold">
          Entertainment
        </Link>
        <div className="sm:flex">
          {data.articles
            .slice(9, 12)
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
