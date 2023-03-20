import ArticleCard from "./Card/ArticleCard";

export default async function Article() {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=india&apiKey=d829471bf6a544f484c80a39eef483d5`
  );
  const { articles } = await res.json();
  return (
    <>
      {articles.map((article) =>
        article.urlToImage ? (
          <ArticleCard
            key={article.publishedAt}
            title={article.title}
            content={article.description}
            img={article.urlToImage}
            url={article.url}
          />
        ) : (
          <div></div>
        )
      )}
    </>
  );
}
