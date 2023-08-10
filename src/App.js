import React, { useState } from "react";

import "./App.css";

import Weather from "./Components/Weather";

function App() {
  // const [temp, setTemp] = useState([]);
  // const [time, setTime] = useState([]);
  // const [isDataRetrived, setDataRetrived] = useState(false);

  // const [currentTime, setCurrentTime] = useState([]);
  // const [todaysDate, setTodaysDate] = useState([]);

  // const [latitude, setLatitude] = useState([]);
  // const [longitude, setLongitude] = useState([]);
  // const [city, setCity] = useState([]);

  // let timeInfo;

  // async function getCityDetails() {
  //   console.log("Getting Longitude and Lattitude");
  //   const response = await fetch(
  //     "http://api.openweathermap.org/geo/1.0/direct?q=Munich&limit=5&appid=aa4ffbe76703602900ae17e7f3bf361e"
  //   );

  //   const data = await response.json();

  //   setLatitude(data[0].lat.toFixed(2));
  //   setLongitude(data[0].lon.toFixed(2));
  // }

  // async function getWeatherData() {
  //   await getCityDetails();
  //   console.log("Getting Weather Details");

  //   const response = await fetch(
  //     "https://api.open-meteo.com/v1/forecast?latitude=" +
  //       parseFloat(latitude) +
  //       "&longitude=" +
  //       parseFloat(longitude) +
  //       "&hourly=temperature_2m&current_weather=true"
  //   );

  //   const data = await response.json();

  //   setTemp(data.current_weather.temperature);
  //   setTime(data.current_weather.time);

  //   setDataRetrived(true);
  // }

  return (
    <div className="App">
      <Weather />
      {/* <h1>Weather App</h1>
      <Weather onGettingWeatherInfo={getWeatherData} />
      <section>
        {isDataRetrived && (
          <Card>
            <WeatherDetails tempData={temp} timeData={time} />
          </Card>
        )}
      </section> */}
    </div>
  );
}

export default App;
