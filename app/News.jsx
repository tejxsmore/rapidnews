import Link from "next/link";

export default function News({ title, content, img, url }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={img} alt="img" style={{ width: 400 }} />
      <p>{content}</p>
      <Link href={url}>Readmore</Link>
    </div>
  );
}
