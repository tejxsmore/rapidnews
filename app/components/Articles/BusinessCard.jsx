import Link from "next/link";

export default function BusinessCard({ title, content, url, img }) {
  return (
    <div className="p-1.5 border-b-2 border-gray-300">
      <Link href={url} target="_blank">
        {/* <img src={img} alt="" className=" aspect-video rounded-md" /> */}
        <h1 className="py-1.5">{title}</h1>
      </Link>
    </div>
  );
}
