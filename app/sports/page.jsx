import Link from "next/link";

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
      <div className="flex flex-col justify-center items-center bg-violet-900 pt-3 sm:pt-10">
        {data.articles.map((article) =>
          article.urlToImage ? (
            <div className="bg-gray-300 rounded-sm sm:w-2/5 mx-3 sm:mx-0 mb-3 sm:mb-10 p-3 sm:p-10 font-semibold">
              <div>
                <img
                  src={article.urlToImage}
                  alt="poster"
                  className="mb-3 rounded-sm"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl pb-3 text-justify">
                  {article.title}
                </h1>
                <p className="pb-5 text-justify">{`${article.content}...`}</p>
                <div className="flex flex-col justify-center items-center">
                  <Link
                    href={article.url}
                    target="_blank"
                    className="bg-violet-900 text-gray-200 hover:text-white rounded-sm px-3 py-2"
                  >
                    Read More
                  </Link>
                </div>
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
