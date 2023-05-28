import Link from "next/link";

export default async function Sports() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=572c42439a7947dda44e89dd90d6e511`
    );
    if (!res.ok) {
      throw new Error(`Data fetch unsuccessfull`);
    }
    const data = await res.json();

    return (
      <div className="flex flex-col justify-center items-center ">
        {data.articles.map((article) => (
          <div className="p-3 sm:flex border-b-2 border-gray-300">
            <div>
              <img
                src={article.urlToImage}
                alt=""
                className="aspect-video sm:w-96 mr-3 rounded-xl border-4 border-gray-300"
              />
            </div>
            <div>
              <h1 className="sm:max-w-2xl text-2xl font-bold sm:text-justify">
                {article.title}
              </h1>
              <p className="sm:max-w-2xl pb-3 sm:text-justify">
                {`${article.content}`}
              </p>
              <p className="font-semibold pb-3">
                Published - {`${article.publishedAt.slice(0, 10)}`}
              </p>
              <Link
                href={article.url}
                target="_blank"
                className="p-2 rounded-md bg-gradient-to-br from-yellow-400 to-red-400"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
