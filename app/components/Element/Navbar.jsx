import Link from "next/link";

export default async function Navbar() {
  // Fetch date
  const datadate = await fetch(
    `http://worldtimeapi.org/api/timezone/Asia/Kolkata`
  );
  const { datetime } = await datadate.json();
  const date = datetime.slice(8, 10);
  const month = datetime.slice(5, 7);

  // Fetch temp
  const datatemp = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=19.076090&longitude=72.877426&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
  );
  const temp = await datatemp.json();

  return (
    <div className="flex justify-between p-3 bg-black text-white ">
      <div id="left" className="flex">
        <Link href="/" className="flex">
          <img
            src="img/india.png"
            alt="India"
            className="h-6 mr-3 rounded-md"
          />
          <h1 className="mr-1.5">NEWS</h1>
        </Link>
        <div className="flex mx-1.5 px-2 bg-yellow-300 rounded- text-black rounded-2xl">
          <h1 className="px-1.5">{`${date} / ${month}`}</h1>
          <h1 className="px-1.5">
            Mumbai {temp.current_weather.temperature.toFixed(1)}° C
          </h1>
        </div>
      </div>

      <div id="right">
        <Link href="/subscribe" className="hover:text-yellow-300">
          Subscribe ↦
        </Link>
      </div>
    </div>
  );
}
