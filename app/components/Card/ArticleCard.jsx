import Link from "next/link";

export default function Content({ title, content, url, img }) {
  return (
    <div className="flex justify-center bg-dark">
      <div className="bg-green mx-3 my-1.5 p-3 md:w-96 w-full rounded-lg">
        <h1 className="text-2xl font-medium py-1.5">{title}</h1>
        <img src={img} alt="Image" className="rounded-2xl py-1.5" />
        <h6 className="py-1.5">{content}</h6>
        <Link href={url} className="py-1.5">
          Read more 🔗
        </Link>
      </div>
    </div>
  );
}
