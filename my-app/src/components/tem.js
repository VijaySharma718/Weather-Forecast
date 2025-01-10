import React, { useState, useEffect } from "react";


function WeatherForecast() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("kanpur");
  const apiKey = "16363a892c0e6e838b8507dd85ac0b97";

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;
        const response = await fetch(url);
        const resJson = await response.json();

        if (response.ok) {
          setCity(resJson);
        } else {
          setCity(null); // Handle invalid response
          console.error("Error fetching data:", resJson.message);
        }
      } catch (error) {
        console.error("API fetch error:", error);
        setCity(null);
      }
    };

    fetchApi();
  }, [search, apiKey]);

  return (
    <div className="bg-custom-pattern bg-cover h-screen w-full flex justify-center items-center ">
      <div className="bg-gray-600 rounded-md shadow-lg shadow-gray-950 ">
        <h1 className=" text-4xl text-center font-semibold text-white p-5 ">
          Weather Forecast
        </h1>
        <div className="bg-white sm:h-[500px] sm:w-[450px] p-5 rounded-lg shadow-lg shadow-gray-950 h-[400px] w-[370px] ">
          <input
            type="text"
            className="w-full h-10 border-2 border-gray-400 rounded-md p-2"
            placeholder="Search location"
            onChange={(e) => setSearch(e.target.value)}
          />

          {city && city.main ? (
            <div className="mt-14">
              <div className="flex justify-center items-center gap-5">
                <svg
                  className="h-[50px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
                <h1 className="text-5xl text-center font-semibold text-gray-800">
                  {search.toLowerCase()}
                </h1>
              </div>

              <div className="bg-gray-600 h-[16vh] rounded-lg flex-col text-center pt-24 mt-5 sm:h-[40vh]">
                <h2 className="text-white text-5xl font-semibold">
                  {city.main.temp}°C
                </h2>
                <h3 className="text-white text-lg">
                  Min: {city.main.temp_min}°C | Max: {city.main.temp_max}°C
                </h3>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-700 mt-10">
              {city === null ? "Enter a valid city name" : "Loading..."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
