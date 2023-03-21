import Navbar from "./components/Navbar";
import Label from "./components/Label";
import Article from "./components/Content/Article";
import Shorts from "./components/Content/Shorts";

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
