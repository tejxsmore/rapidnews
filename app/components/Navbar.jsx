export default async function Navbar() {
  return (
    <div>
      <div className="flex justify-between p-2 bg-bg">
        <div className="text-4xl text-light">
          <a href="/">NEWS</a>
        </div>

        <div>
          <button className="text-light hover:text-bg hover:bg-light hover:duration-300 border-2 border-light px-5 py-2 text-center mr-2">
            Sign In
          </button>
          <button className="text-bg bg-light hover:text-light hover:bg-bg hover:duration-300 border-2 border-light px-5 py-2 text-center">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
