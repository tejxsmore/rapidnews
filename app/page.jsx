import Navbar from "./components/Navbar";
import Article from "./components/Article";
import Shorts from "./components/Shorts";

export default async function Home() {
  return (
    <>
      <Navbar />
      <Article />
      <Shorts />
    </>
  );
}
