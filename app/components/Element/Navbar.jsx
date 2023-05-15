export default async function Navbar() {
  const date = new Date().toDateString();
  const data = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=19.076090&longitude=72.877426&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
  );
  const temp = await data.json();

  return (
    <div>
      <div className="flex justify-between p-2 bg-dark w-full border-b-2 border-light border-double">
        <div className="text-4xl text-light">
          <a href="/">NEWS</a>
        </div>

        <div>
          <button
            className="text-light bg-red px-5 py-2 
          text-center rounded-md hover:bg-light hover:text-dark"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="py-1 px-2 text-dark flex justify-between">
        <div className="flex">
          <img src="img/india.png" alt="India" className="h-6 mr-4" />
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
