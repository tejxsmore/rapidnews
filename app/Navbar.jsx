import Label from "./Label";

export default async function Navbar() {
  return (
    <div>
      <div className="flex justify-between m-2 h-14">
        <div className="text-4xl m-1">
          <h1>RAPID NEWS</h1>
        </div>
        <div className="flex text-xl">
          <div className="mx-4 pt-3 hover:underline">
            <a href="/">Home</a>
          </div>
          <div className="mx-4 pt-3 hover:underline">
            <a href="/india">India</a>
          </div>
          <div className="mx-4 pt-3 hover:underline">
            <a href="/sports">Sports</a>
          </div>
          <div className="mx-4 pt-3 hover:underline">
            <a href="/science">Science</a>
          </div>
          <div className="mx-4 pt-3 hover:underline">
            <a href="/politics">Politics</a>
          </div>
          <div className="mx-4 pt-3 hover:underline">
            <a href="/Shorts">Shorts</a>
          </div>
          <div className="mx-4 pt-3 hover:underline">
            <a href="/weather">Weather</a>
          </div>
        </div>

        <div>
          <button className="text-black bg-white hover:text-white hover:bg-black hover:duration-300 border-2 border-black px-5 py-2 text-center mx-1 mt-1">
            Sign In
          </button>
          <button className="text-white bg-black hover:text-black hover:bg-white hover:duration-300 border-2 border-black px-5 py-2 text-center mx-1 mt-1">
            Subscribe
          </button>
        </div>
      </div>
      <Label />
    </div>
  );
}
