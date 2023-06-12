import Link from "next/link";

export default function SportsCard({ title, url, img }) {
  return (
    <div className="sm:max-w-sm w-full p-1.5 py-4">
      <img
        src={img}
        alt="Img"
        className="aspect-video border-2 border-blue-200 rounded-sm"
      />
      <h1 className="my-1.5">{`${title.slice(0, 70)}...`}</h1>
      <div className="py-1.5">
        <Link
          href={url}
          target="_blank"
          className="px-3 py-1 bg-white rounded-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
