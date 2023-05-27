import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-between p-1.5 bg-red text-beige">
      <div className="flex">
        <Link
          href="https://linkedin.com/in/tejxsmore"
          target="_blank"
          className="w-7 mr-1"
        >
          <img src="img/linkedin.jpg" alt="LinkedIn" />
        </Link>
        <Link
          href="https://github.com/tejxsmore/rapidnews"
          target="_blank"
          className="w-7"
        >
          <img src="img/github.jpg" alt="Github" />
        </Link>
      </div>
      <div className="mx-1.5">
        <h1>© {year}</h1>
      </div>
    </div>
  );
}
