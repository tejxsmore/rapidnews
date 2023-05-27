import Business from "./components/Articles/Business";
import Entertainment from "./components/Articles/Entertainment";
import Science from "./components/Articles/Science";
import Sports from "./components/Articles/Sports";
import Trending from "./components/Articles/Trending";

export default async function Home() {
  return (
    <div className="bg-gradient-to-br from-yellow-400 to-red-400">
      <Trending />
      <Sports />
      <Science />
      <Business />
      <Entertainment />
    </div>
  );
}
