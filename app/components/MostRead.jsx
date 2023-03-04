import Link from "next/link";

export default function MostRead({ title, url, img }) {
  return (
    <div className="p-3">
      <div className="flex flex-row rounded ">
        <div className="basis-2/3">
          <h1>{title}</h1>
          <Link href={url} className="underline text-blue-600">
            Continue Reading
          </Link>
        </div>
        <div className="bg-slate-900 basis-1/3">
          <img src={img} alt="img" style={{ width: 200 }} />
        </div>
      </div>
    </div>
  );
}
