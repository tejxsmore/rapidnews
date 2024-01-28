import Link from "next/link";
import Subscribe from "./Subscribe";

export default async function Navbar() {
  // Fetch date
  const datadate = await fetch(
    `http://worldtimeapi.org/api/timezone/Asia/Kolkata`,
    { cache: "no-store" }
  );
  const { datetime } = await datadate.json();
  const date = datetime.slice(8, 10);
  const month = datetime.slice(5, 7);

  // Fetch temp
  const datatemp = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=19.076090&longitude=72.877426&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`,
    { cache: "no-store" }
  );
  const temp = await datatemp.json();

  return (
    <div className="flex justify-between items-center p-5 text-black ">
      <div id="left" className="flex items-center">
        <Link href="/" className="flex items-center">
          <img
            src="img/india.png"
            alt="India"
            className="h-6 mr-2.5 rounded-sm"
          />
          <h1 className="mr-5 font-semibold">NEWS</h1>
        </Link>
        <div className="flex px-2.5 py-1 border-[2px] border-gray-700 font-semibold rounded-full text-sm text-center items-center">
          <h1 className="pr-3">{`${date} / ${month} `}</h1>
          <h1 className="">
            Temp {temp.current_weather.temperature.toFixed(1)}° C
          </h1>
        </div>
      </div>

      <div className="">
        <Subscribe />
      </div>
    </div>
  );
}
