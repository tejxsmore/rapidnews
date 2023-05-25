import Label from "./Label";

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
    <div className="bg-beige text-choco">
      <div className="flex justify-between p-3 bg-beige border-b-2 border-choco">
        <div className="flex text-4xl text-choco">
          <img
            src="img/india.png"
            alt="India"
            className="h-10 mr-3 rounded-md"
          />
          <a href="/">NEWS</a>
        </div>

        <div>
          <Label />
        </div>

        <div>
          <button className="text-center rounded-md px-3 py-2 bg-red text-beige">
            Subscribe »
          </button>
        </div>
      </div>
      <div className="flex justify-between p-3 border-b-2 border-choco">
        <div className="flex">
          <h1 className="">{`${date} / ${month}`}</h1>
        </div>

        <div>
          <h1>📍 Mum {temp.current_weather.temperature.toFixed(1)}° C</h1>
        </div>
      </div>
    </div>
  );
}
