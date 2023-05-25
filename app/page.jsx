import Business from "./components/Articles/Business";
import Entertainment from "./components/Articles/Entertainment";
import Science from "./components/Articles/Science";
import Sports from "./components/Articles/Sports";
import Trending from "./components/Articles/Trending";

export default async function Home() {
  return (
    <>
      <Trending />
      <Business />
      <Sports />
      <Science />
      <Entertainment />
    </>
  );
}
