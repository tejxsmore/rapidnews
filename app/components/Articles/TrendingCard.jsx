import Link from "next/link";

export default function TrendingCard({ title, url, img }) {
  return (
    <div className="text-black rounded-sm mb-5  sm:mb-0 justify-center p-2.5">
      <img src={img} alt="Img" className="aspect-video rounded-md" />
      <h1 className=" font-semibold py-5">{`${title.slice(0, 120)}...`}</h1>
      <div className="">
        <Link
          href={url}
          target="_blank"
          className="px-2.5 py-1 rounded-md bg-white hover:bg-saffron text-saffron border-2 border-saffron hover:text-white font-semibold"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
