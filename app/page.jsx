import Sports from "./components/Articles/Sports";
import Trending from "./components/Articles/Trending";
import Science from "./components/Articles/Science";
import Entertainment from "./components/Articles/Entertainment";
import Business from "./components/Articles/Business";

export default async function Home() {
  return (
    <div className="">
      <Trending />
      <Sports />
      <Science />
      <Entertainment />
      <Business />
    </div>
  );
}
