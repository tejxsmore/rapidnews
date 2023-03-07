import Latest from "./Latest";

export default async function Home({ category = "sports" }) {
  try {
    const res = await fetch(
      `https://inshorts.deta.dev/news?category=${category}`
    );
    if (!res.ok) {
      throw new Error(`Data fetch unsuccessfull`);
    }
    const { data } = await res.json();

    return (
      <div>
        <p className="p-3 text-xl">Latest</p>
        {data.map((article) =>
          article.readMoreUrl ? (
            <Latest
              key={article.id}
              title={article.title}
              content={article.content}
              url={article.readMoreUrl}
              img={article.imageUrl}
            />
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
