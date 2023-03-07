import Navbar from "./Navbar";
import Article from "./components/Article";
import Shorts from "./components/Shorts";
import MostRead from "./components/MostRead";

export default async function Home() {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=india&apiKey=d829471bf6a544f484c80a39eef483d5`
  );
  const { articles } = await res.json();
  return (
    <div className="h-full">
      <Navbar />
      {/* <div className="flex flex-row h-full">
        <div className="basis-1/3 border-r-2 border-dotted border-black ">
          <p className="p-3 text-xl">Articles</p>
          
        </div>
        <div className="basis-1/3  border-r-2 border-dotted border-black">
          
        </div>
        <div className="basis-1/3">
          <p className="p-3 text-xl">Most Read</p>
          
        </div>
      </div> */}
      <div className="float-left h-full w-1/3 overflow-auto">
        <p className="p-3 text-xl">Articles</p>
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
      <div className="float-left h-full w-1/3 overflow-auto">
        <Shorts />
      </div>

      <div className="float-left h-full w-1/3 overflow-auto">
        <p className="p-3 text-xl">Most Read</p>
        {articles.map((article) =>
          article.urlToImage ? (
            <MostRead
              key={article.publishedAt}
              title={article.title}
              img={article.urlToImage}
              url={article.url}
            />
          ) : (
            <div></div>
          )
        )}
      </div>
    </div>
  );
}
