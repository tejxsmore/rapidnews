import Link from "next/link";

export default function TrendingCard({ title, content, url, img }) {
  return (
    <div className="sm:max-w-lg w-full p-1.5 py-4">
      <img
        src={img}
        alt="Img"
        className="aspect-video rounded-sm border-2 border-blue-200"
      />
      <h1 className="my-1.5">{`${title.slice(0, 100)}...`}</h1>
      <div className="py-1.5">
        <Link
          href={url}
          target="_blank"
          className="px-3 py-1 bg-white hover:bg-blue-400 rounded-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
