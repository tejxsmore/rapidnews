import Link from "next/link";
import Label from "./Label";

export default async function Navbar() {
  // Fetch date
  const datadate = await fetch(
    `http://worldtimeapi.org/api/timezone/Asia/Kolkata`
  );
  const { datetime } = await datadate.json();
  const date = datetime.slice(8, 10);
  const month = datetime.slice(5, 7);
  const year = datetime.slice(0, 4);

  // Fetch temp
  const datatemp = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=19.076090&longitude=72.877426&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
  );
  const temp = await datatemp.json();

  return (
    <div className="text-lg">
      <div className="flex justify-between p-3 bg-black text-white ">
        <Link href="/" className="flex">
          <img
            src="img/india.png"
            alt="India"
            className="h-6 mr-3 rounded-md"
          />
          <h1>NEWS</h1>
        </Link>

        <div>
          <p>Subscribe ↦</p>
        </div>
      </div>
      <div className="flex justify-between p-3 ">
        <div className="flex">
          <h1 className="">{`${date} / ${month} / ${year}`}</h1>
        </div>

        <Label />

        <div>
          <h1>📍 Mum {temp.current_weather.temperature.toFixed(1)}° C</h1>
        </div>
      </div>
    </div>
  );
}
