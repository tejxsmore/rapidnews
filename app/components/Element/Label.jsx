import { categories } from "@/public/categories";
import Link from "next/link";

export default function Label() {
  const date = new Date().toDateString();
  return (
    <div className="flex justify-between text-dark w-full overflow-x-auto border-b-2">
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
    </div>
  );
}
