import News from "./News";

export default async function Home() {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=pub_18101d6df6b5614321bba7c87c6ad012fa0d8&language=en`
  );
  const { results } = await res.json();
  return (
    <div>
      <h1>NEWS</h1>
      {results.map((news) =>
        news.image_url ? (
          <News
            key={news.description}
            title={news.title}
            content={news.content}
            img={news.image_url}
            url={news.link}
          />
        ) : (
          <div></div>
        )
      )}
    </div>
  );
}
