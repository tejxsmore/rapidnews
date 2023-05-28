import Link from "next/link";
import EntertainmentCard from "./EntertainmentCard";

export default async function Entertainment() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=572c42439a7947dda44e89dd90d6e511`
    );
    if (!res.ok) {
      throw new Error(`Data fetch unsuccessfull`);
    }
    const data = await res.json();

    return (
      <div className="p-1.5">
        <Link href="/entertainment" className="p-1.5 text-3xl font-bold">
          Entertainment
        </Link>
        <div className="sm:flex sm:flex-wrap sm:justify-evenly  border-b-2 border-gray-300">
          {data.articles
            .slice(9, 16)
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
