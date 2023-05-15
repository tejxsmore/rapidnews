import Navbar from "./components/Element/Navbar";
import Label from "./components/Element/Label";
import Article from "./components/Element/Article";
import Shorts from "./components/Element/Shorts";
import Footer from "./components/Element/Footer";

export default async function Home() {
  return (
    <>
      <Navbar />
      <Article />
      <Footer />
    </>
  );
}
