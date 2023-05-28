import Link from "next/link";

export default function TrendingCard({ title, content, url, img }) {
  return (
    <div className="sm:max-w-lg w-full p-1.5 py-4">
      <img
        src={img}
        alt="Img"
        className="aspect-video rounded-lg border-2 border-gray-300"
      />
      <h1 className="my-1.5">{`${title.slice(0, 100)}...`}</h1>
      <div className="py-1.5">
        <Link
          href={url}
          target="_blank"
          className="px-3 py-1 bg-gradient-to-br from-yellow-400 to-red-400 rounded-md"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
