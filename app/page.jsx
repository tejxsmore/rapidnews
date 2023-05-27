import Sports from "./components/Articles/Sports";
import Trending from "./components/Articles/Trending";
import Compartment from "./components/Articles/Compartment";

export default async function Home() {
  return (
    <div className="">
      <Trending />
      <Sports />
      <Compartment />
    </div>
  );
}
