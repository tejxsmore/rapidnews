import Link from "next/link";

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
      <div className="flex flex-col justify-center items-center bg-blue-100">
        {data.articles.map((article) =>
          article.urlToImage ? (
            <div className="p-3 py-6 sm:flex border-b-2 border-gray-300">
              <div>
                <img
                  src={article.urlToImage}
                  alt="poster"
                  className="aspect-video sm:w-96 mr-3 rounded-sm border-2 border-blue-300"
                />
              </div>
              <div>
                <h1 className="sm:max-w-2xl text-2xl font-bold text-gray-700 sm:text-justify pt-3 sm:pt-0 pb-3">
                  {article.title}
                </h1>
                <p className="sm:max-w-2xl pb-6 sm:text-justify">
                  {`${article.content}...`}
                </p>
                <Link
                  href={article.url}
                  target="_blank"
                  className="px-2 py-1 rounded-sm bg-gradient-to-br bg-white hover:bg-blue-400 hover:text-white"
                >
                  Read More
                </Link>
              </div>
            </div>
          ) : (
            <div></div>
          )
        )}
      </div>
    );
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
