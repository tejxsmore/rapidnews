import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-between p-3 bg-red text-beige">
      <div className="flex">
        <Link
          href="https://linkedin.com/in/tejxsmore"
          target="_blank"
          className="w-5 mr-3"
        >
          <img src="img/linkedin.png" alt="LinkedIn" />
        </Link>
        <Link
          href="https://github.com/tejxsmore/rapidnews"
          target="_blank"
          className="w-5"
        >
          <img src="img/github.png" alt="Github" />
        </Link>
      </div>
      <div>
        <h1>© {year}</h1>
      </div>
    </div>
  );
}
