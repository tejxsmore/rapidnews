import Link from "next/link";

export default function EntertainmentCard({ title, url, img }) {
  return (
    <div className="sm:max-w-xs p-1.5 py-3">
      <Link href={url} target="_blank">
        <img src={img} alt="" className=" aspect-video rounded-md" />
        <h1 className="py-1.5">{`${title.slice(0, 70)}...`}</h1>
        <div className="py-1.5">
          <Link
            href={url}
            className="px-3 py-1 bg-gradient-to-br from-yellow-400 to-red-400 rounded-md"
          >
            Read More
          </Link>
        </div>
      </Link>
    </div>
  );
}
