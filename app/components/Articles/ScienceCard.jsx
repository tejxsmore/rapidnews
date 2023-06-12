import Link from "next/link";

export default function ScienceCard({ title, url }) {
  return (
    <Link href={url} target="_blank">
      <div className="p-1.5 py-3.5 pt-3 sm:border-l-2 sm:border-b-0 border-b-2 border-gray-300 hover:bg-blue-200 hover:delay-100 rounded-sm">
        <h1 className="my-1.5 sm:text-justify">{`${title.slice(0, 80)}...`}</h1>
      </div>
    </Link>
  );
}
