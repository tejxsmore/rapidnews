import Link from "next/link";

export default function ScienceCard({ title, url }) {
  return (
    <div className="p-1.5 py-3.5 pt-3 sm:border-l-2 border-b-2 border-gray-300">
      {/* <img
        src={img}
        alt="Img"
        className="aspect-video border-2 border-white rounded-lg"
      /> */}
      <h1 className="my-1.5 sm:text-justify">{`${title.slice(0, 80)}...`}</h1>
      <div className="py-1.5">
        <Link
          href={url}
          className="px-3 py-1 bg-gradient-to-br from-yellow-400 to-red-400 rounded-md"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
