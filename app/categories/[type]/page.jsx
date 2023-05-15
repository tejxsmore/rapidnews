"use client";
import { usePathname } from "next/navigation";

export default function page() {
  const path = usePathname();
  const pathname = path.slice(12);

  const data = fetch(
    `https://inshorts.deta.dev/news?category=${pathname}`
  ).then((res) => res.json());

  data.then((value) => console.log(value));

  return (
    <div>
      <h>{data}</h>
    </div>
  );
}
