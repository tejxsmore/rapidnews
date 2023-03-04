import Link from "next/link";

export default function MostRead({ title, content, url }) {
  return (
    <div className="p-3">
      <h1 className="text-lg">{title}</h1>
      <p className="text-xs">{content}</p>
      <Link href={url} className="underline text-blue-600">
        Continue Reading
      </Link>
    </div>
  );
}
``;
