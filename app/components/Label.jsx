import { categories } from "@/public/categories";
import Link from "next/link";

export default function Label() {
  return (
    <div className="flex justify-between bg-dark text-light w-full overflow-x-auto mt-0.5">
      {categories.map((category) => (
        <div className="m-2">
          <Link key={category.id} href={category.topic}>
            {category.topic}
          </Link>
        </div>
      ))}
    </div>
  );
}
