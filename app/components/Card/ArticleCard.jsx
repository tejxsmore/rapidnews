import Link from "next/link";

export default function Content({ title, content, url, img }) {
  return (
    <div className="flex justify-center my-1.5">
      <div className="bg-green mx-3 my-1.5 p-2 md:w-96 w-full rounded-lg">
        <h1 className="text-2xl font-medium py-2">{title}</h1>
        <img src={img} alt="Image" className="rounded-lg py-2" />
        <h6 className="py-2">{content}</h6>
        <Link href={url} className="bg-green">
          Read more 🔗
        </Link>
      </div>
    </div>
  );
}
