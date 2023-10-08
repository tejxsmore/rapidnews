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
    <div className="flex justify-between p-3 bg-violet-900 text-white">
      <div id="left" className="flex">
        <Link href="/" className="flex">
          <img
            src="img/india.png"
            alt="India"
            className="h-6 mr-3 rounded-sm"
          />
          <h1 className="mr-3 font-semibold">NEWS</h1>
        </Link>
        <div className="flex px-2 bg-gray-200 text-violet-900 font-semibold rounded-2xl text-sm text-center items-center">
          <h1 className="pr-3">{`${date} / ${month} `}</h1>
          <h1 className="">
            Mum {temp.current_weather.temperature.toFixed(1)}° C
          </h1>
        </div>
      </div>

      <div id="right" className="">
        <Subscribe />
      </div>
    </div>
  );
}
