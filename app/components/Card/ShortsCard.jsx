import Link from "next/link";

export default function MostRead({ title, content, url, img }) {
  return (
    <div className="m-2">
      <h1 className="">{title}</h1>
      <p className="">{content}</p>
      <Link href={url} className="underline text-blue-600">
        Continue Reading
      </Link>
    </div>
  );
}
