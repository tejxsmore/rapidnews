import ScienceCard from "./ScienceCard";

export default async function Science() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=d829471bf6a544f484c80a39eef483d5`
    );
    if (!res.ok) {
      throw new Error(`Data fetch unsuccessfull`);
    }
    const data = await res.json();

    return (
      <div className="bg-beige text-choco border-b-2 border-choco text-lg font-semibold p-1.5">
        <h1 className="p-1.5 text-3xl font-bold">Science</h1>
        <div className="sm:flex">
          {data.articles
            .slice(9, 12)
            .map((article) =>
              article.urlToImage ? (
                <ScienceCard
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
