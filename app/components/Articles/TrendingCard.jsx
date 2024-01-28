import Link from "next/link";

export default function TrendingCard({ title, url, img, description }) {
  return (
    <div>
      <Link
        href={url}
        target="_blank"
        className=" text-black rounded-md max-w-sm p-2.5 mb-5 sm:mb-0 flex flex-col justify-center items-center"
      >
        <div>
          <img src={img} alt="Img" className="aspect-video rounded-md" />
          <h1 className="py-2.5 font-semibold">{`${title.slice(0, 80)}...`}</h1>
          <p>{`${description.slice(0, 150)}...`}</p>
        </div>
      </Link>
    </div>
  );
}
