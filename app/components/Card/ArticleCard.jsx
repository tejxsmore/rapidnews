import Link from "next/link";

export default function Content({ title, content, url, img }) {
  return (
    <div className="m-2">
      <h1 className="">{title}</h1>
      <img src={img} alt="Image" style={{ width: 500 }} />
      <h6 className="">{content}</h6>
      <Link href={url}>Read more</Link>
    </div>
  );
}
