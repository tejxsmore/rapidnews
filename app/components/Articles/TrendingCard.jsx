import Link from "next/link";

export default function TrendingCard({ title, content, url, img }) {
  return (
    <div className="sm:max-w-lg w-full p-1.5">
      <Link href={url} target="_blank">
        <img src={img} alt="" className=" aspect-video rounded-md" />
        <h1 className="py-1.5">{title}</h1>
      </Link>
    </div>
  );
}
