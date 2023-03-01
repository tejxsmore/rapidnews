import Link from "next/link";

export default function Article({ date, title, content, url, img }) {
  return (
    <div>
      <h1>
        {date} - {title}
      </h1>
      <img src={img} alt="Image" style={{ width: 400 }} />
      <p>{content}</p>
      <Link href={url}>Read more</Link>
    </div>
  );
}
