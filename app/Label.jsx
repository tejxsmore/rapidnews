export default function Label() {
  const date = new Date().toDateString();

  return (
    <div className="m-2 text-sm border-b-2 border-dotted border-black">
      <h1>{date}</h1>
    </div>
  );
}
