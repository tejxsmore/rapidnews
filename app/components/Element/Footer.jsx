import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-between p-4 bg-red text-light">
      <div className="flex">
        <Link
          href="https://github.com/tejxsmore/rapidnews"
          target="_blank"
          className="w-5 mx-2"
        >
          <img src="img/github.png" alt="Github" />
        </Link>
        <Link
          href="https://linkedin.com/in/tejxsmore"
          target="_blank"
          className="w-5 mx-2"
        >
          <img src="img/linkedin.png" alt="LinkedIn" />
        </Link>
        <Link
          href="https://instagram.com/tejxsmore"
          target="_blank"
          className="w-5 mx-2 pt-0.5"
        >
          <img src="img/instagram.png" alt="Instagram" />
        </Link>
      </div>
      <div>
        <h1>© {year}</h1>
      </div>
    </div>
  );
}
