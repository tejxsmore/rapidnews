import Navbar from "./components/Element/Navbar";
import Label from "./components/Element/Label";
import Article from "./components/Content/Article";
import Shorts from "./components/Content/Shorts";
import Footer from "./components/Element/Footer";

export default async function Home() {
  return (
    <>
      <Navbar />
      <Label />
      <Article />
      <Shorts />
      <Footer />
    </>
  );
}
