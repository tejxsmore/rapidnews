import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-between p-5 text-black">
      <div className="flex">
        <Link href="https://github.com/tejxsmore/rapidnews" target="_blank">
          <div className="flex items-center border-2 border-saffron rounded-md">
            <span className="text-2xl bg-saffron text-white border-r-2 border-saffron">
              <FaGithub />
            </span>{" "}
            <span className="px-2.5 font-semibold text-saffron hover:bg-saffron hover:text-white">
              Leave a star
            </span>
          </div>
        </Link>
      </div>
      <div className="mx-1.5 font-semibold">
        <h1>© {year}</h1>
      </div>
    </div>
  );
}
