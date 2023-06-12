import Link from "next/link";

export default function BusinessCard({ title, content, url, img }) {
  return (
    <Link href={url} target="_blank">
      <div className="p-1.5 border-b-2 border-gray-300 hover:bg-blue-200">
        <h1 className="py-1.5">{title}</h1>
      </div>
    </Link>
  );
}
