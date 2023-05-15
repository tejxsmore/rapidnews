import Label from "./Label";

export default async function Navbar() {
  const date = new Date().toDateString();
  const data = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=19.076090&longitude=72.877426&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
  );
  const temp = await data.json();

  return (
    <div>
      <div className="flex justify-between p-3 bg-dark w-full border-b-2 border-light">
        <div className="text-4xl text-light">
          <a href="/">NEWS</a>
        </div>

        <div>
          <Label />
        </div>

        <div>
          <button
            className="text-light bg-red px-5 py-2 
          text-center rounded-lg hover:bg-light hover:text-dark"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="p-3 text-dark flex justify-between border-b-2 border-dark">
        <div className="flex">
          <img
            src="img/india.png"
            alt="India"
            className="h-6 mr-3 rounded-md"
          />
          <h1 className="">{date}</h1>
        </div>
        <div className="flex">
          <img src="img/location.jpg" alt="pin" className="h-6" />
          <h1>Mumbai {temp.current_weather.temperature.toFixed(1)}° C</h1>
        </div>
      </div>
    </div>
  );
}
