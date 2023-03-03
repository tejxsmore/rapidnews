import Navbar from "../Navbar";
import Article from "./Article";

export default async function Home() {
  try {
    const res = await fetch(`https://inshorts.deta.dev/news?category=india`);
    if (!res.ok) {
      throw new Error(`Data fetch unsuccessfull`);
    }
    const { data } = await res.json();

    return (
      <div>
        <Navbar />
        {data.map((article) => (
          <Article
            key={article.id}
            date={article.date}
            title={article.title}
            content={article.content}
            url={article.readMoreUrl}
            img={article.imageUrl}
          />
        ))}
      </div>
    );
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
