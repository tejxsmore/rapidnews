import Science from "./Science";
import Business from "./Business";
import Entertainment from "./Entertainment";

function Compartment() {
  return (
    <div className="sm:flex bg-blue-100">
      <div className="">
        <Science />
        <Entertainment />
      </div>
      <div className="">
        <Business />
      </div>
    </div>
  );
}

export default Compartment;
