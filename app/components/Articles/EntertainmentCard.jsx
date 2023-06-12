import Link from "next/link";

export default function EntertainmentCard({ title, url, img }) {
  return (
    <Link href={url} target="_blank">
      <div className="sm:max-w-xs p-1.5 py-3 hover:bg-blue-200 hover:delay-100 rounded-sm">
        <img
          src={img}
          alt=""
          className=" aspect-video rounded-sm border-2 border-blue-200"
        />
        <h1 className="py-1.5">{`${title.slice(0, 70)}...`}</h1>
      </div>
    </Link>
  );
}
