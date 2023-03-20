import Link from "next/link";

export default function Content({ title, content, url, img }) {
  return (
    <div className="p-3">
      <h1 className="max-w-lg py-1 ">{title}</h1>
      <img src={img} alt="Image" style={{ width: 500 }} />
      <h6 className="max-w-lg py-1">{content}</h6>
      <Link href={url}>Read more</Link>
    </div>
  );
}
