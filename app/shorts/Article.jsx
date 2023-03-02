import Link from "next/link";

export default function Article({ date, title, content, url, img }) {
  return (
    <div className=" flex justify-center items-center ">
      <div className="items-center my-2 bg-stone-200">
        <p className="max-w-lg py-1">{date}</p>
        <h1 className="max-w-lg py-1 ">{title}</h1>
        <img src={img} alt="Image" style={{ width: 512 }} />
        <p className="max-w-lg py-1">{content}</p>
        <Link className="py-1" href={url}>
          Read more ➡️
        </Link>
      </div>
    </div>
  );
}
