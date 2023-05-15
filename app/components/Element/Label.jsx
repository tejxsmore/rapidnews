import { categories } from "@/public/categories";
import Link from "next/link";

export default function Label() {
  return (
    <div className="text-light text-4xl hidden">
      <h1 className="">Topics</h1>
      <div className="">
        <Link href="topic/sports">Sports</Link>
        <Link href="topic/science">Science</Link>
        <Link href="topic/finance">Finance</Link>
        <Link href="topic/politics">Politics</Link>
      </div>
    </div>
  );
}

{
  /* <div className="flex justify-between text-dark w-full overflow-x-auto border-b-2">
      {categories.map((category) => (
        <div className="my-1 mx-2">
          <Link
            className="hover:text-green hover:delay-100"
            key={category.id}
            href={category.url}
          >
            {category.topic}
          </Link>
        </div>
      ))}
    </div> */
}
