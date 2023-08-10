import React, { useState } from "react";
import classes from "./Weather.module.css";

import Card from "./Card";
import WeatherDetails from "./WeatherDetails";

const Weather = (props) => {
  const [temp, setTemp] = useState([]);
  const [time, setTime] = useState([]);
  const [isDataRetrived, setDataRetrived] = useState(false);

  const [currentTime, setCurrentTime] = useState([]);
  const [todaysDate, setTodaysDate] = useState([]);

  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [city, setCity] = useState([]);

  let timeInfo;

  const cityName = (event) => {
    //console.log(event.target.value);
    setCity(event.target.value);
  };

  async function getCityDetails() {
    //console.log(city);
    //console.log("Getting Longitude and Lattitude");
    const response = await fetch(
      // "http://api.openweathermap.org/geo/1.0/direct?q=Munich&limit=5&appid=aa4ffbe76703602900ae17e7f3bf361e"
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        city +
        "&limit=5&appid=aa4ffbe76703602900ae17e7f3bf361e"
    );

    const data = await response.json();

    setLatitude(data[0].lat.toFixed(2));
    setLongitude(data[0].lon.toFixed(2));
  }

  async function getWeatherData() {
    await getCityDetails();
    console.log("Getting Weather Details");

    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=" +
        parseFloat(latitude) +
        "&longitude=" +
        parseFloat(longitude) +
        "&hourly=temperature_2m&current_weather=true"
    );

    const data = await response.json();

    setTemp(data.current_weather.temperature);
    setTime(data.current_weather.time);

    setDataRetrived(true);
  }

  return (
    <div>
      <h1>Weather App</h1>
      {/* <Weather onGettingWeatherInfo={getWeatherData} /> */}
      <section>
        <div className="SearchBar">
          <input
            className={classes.searchInput}
            type="text"
            placeholder="Search"
            size="30"
            // value={city}
            onChange={cityName}
          ></input>
          <button className={classes.WeatherBtn} onClick={getWeatherData}>
            Get Weather Details
          </button>
        </div>
      </section>
      <section>
        {isDataRetrived && (
          <Card>
            <WeatherDetails tempData={temp} timeData={time} cityData={city} />
          </Card>
        )}
      </section>
    </div>
    // <div className="SearchBar">
    //   <input
    //     className={classes.searchInput}
    //     type="text"
    //     placeholder="Search"
    //     size="30"
    //     value={props.city}
    //   ></input>
    //   <button
    //     className={classes.WeatherBtn}
    //     onClick={props.onGettingWeatherInfo}
    //   >
    //     Get Weather Details
    //   </button>
    // </div>
  );
};

export default Weather;
