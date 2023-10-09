import Link from "next/link";

export default function TrendingCard({ title, url, img }) {
  return (
    <div className="bg-gray-200 text-black rounded-sm w-full p-3 mb-3 sm:mb-0 flex flex-col justify-center items-center">
      <img src={img} alt="Img" className="aspect-video rounded-sm" />
      <h1 className="pt-1 text-justify font-semibold">{`${title.slice(
        0,
        150
      )}...`}</h1>
      <div className="pt-3">
        <Link
          href={url}
          target="_blank"
          className="px-3 py-1 rounded-sm bg-violet-900 text-gray-200 hover:text-white font-semibold"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
