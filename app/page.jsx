import Navbar from "./Navbar";
import Article from "./shorts/Article";

export default async function Home() {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=world&apiKey=d829471bf6a544f484c80a39eef483d5`
  );
  const { articles } = await res.json();
  return (
    <div>
      <Navbar />
      {articles.map((article) =>
        article.urlToImage ? (
          <Article
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
    </div>
  );
}
