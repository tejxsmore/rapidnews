export default function Navbar() {
  let date = new Date().toDateString();
  date = date.slice(0, -4);
  return (
    <div className="flex justify-between h-14 border-b-4 border-dotted border-gray">
      <div className="text-2xl">{date}</div>
      <div>
        <h1 className="items-center text-5xl">RAPID NEWS</h1>
      </div>
      <div>
        <button className="text-white bg-black hover:text-black hover:bg-white hover:duration-300 px-5 py-2.5 text-center mx-2 mt-1">
          Sign In
        </button>
      </div>
    </div>
  );
}
