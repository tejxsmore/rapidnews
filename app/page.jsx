import Navbar from "./components/Navbar";
import Label from "./components/Label";
import Article from "./components/Article";
import Shorts from "./components/Shorts";

export default async function Home() {
  return (
    <>
      <Navbar />
      <Label />
      <Article />
      <Shorts />
    </>
  );
}
