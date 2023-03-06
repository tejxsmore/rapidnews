"use client";
import { categories } from "@/public/categories";

export default function Label() {
  const date = new Date().toDateString();

  return (
    <div className="flex p-2 text-sm border-b-2 border-dotted border-black">
      <h1 className="inline text-lg mr-1">{date}</h1>
      {categories.map((e) => (
        <button
          key={e.id}
          id={e.id}
          onClick={() => {
            console.log(e.topic);
          }}
          className="mx-1 px-3 py-1 border-2 border-black rounded-full cursor-pointer"
        >
          {e.topic}
        </button>
      ))}
    </div>
  );
}
