import React, { useState } from "react";
import temp from "../component/images/temp.png";
import humudity from "../component/images/humudity.jpg";
import windSpeed from "../component/images/windSpeed.png";

export default function Weatherapp() {
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [temprature, setTemprature] = useState("");
  const [location, setLocation] = useState("");

  const api_key = "fe157ea1e367899c48539815b7882849";

  const search = async () => {
    const element = document.getElementsByClassName("cityinput");
    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    setHumidity(data.main.humidity);
    setWind(data.wind.speed);
    setTemprature(data.main.temp);
    setLocation(data.name);
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityinput"
          placeholder="enter your city.."
        />
        <button
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
      <div className="weatherLogo">
        <img src={temp} alt="" />
      </div>
      <div className="weather-temp">
        <strong>{temprature}°C</strong>
      </div>
      <div className="weather-location">{location}</div>
      <div className="weather-info">
        <img src={humudity} alt="" />
        <div className="col-md-6 humidity-percent">{humidity}%</div>
        <img src={windSpeed} alt="" />
        <div className="col-md wind-rate">{wind} m/s</div>
      </div>
      <span className="weather-humidity"> Humidity</span>
      <span className="weather-wind"> Wind Speed</span>
    </div>
  );
}
