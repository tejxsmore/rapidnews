import Link from "next/link";

export default function SportsCard({ title, url, img }) {
  return (
    <div>
      <Link
        href={url}
        target="_blank"
        className="bg-gray-200 text-black rounded-sm w-full max-w-sm p-3 mb-3 sm:mb-0 flex flex-col justify-center items-center"
      >
        <div>
          <img src={img} alt="Img" className="aspect-video rounded-sm" />
          <h1 className="pt-1 text-justify font-semibold">{`${title.slice(
            0,
            80
          )}...`}</h1>
        </div>
      </Link>
    </div>
  );
}
