import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [message, setMessage] = useState("");

  function showTemperature(response) {
    setMessage({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweather.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventdefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=44a6c7aa330748f665b912f89a534a59&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <div className="container">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                onChange={updateCity}
                className="form-control shadow-sm"
              />
              <span>
                <input type="submit" value="🔍" className="searchbutton" />
                <input type="submit" value="📍" className="button" />
              </span>
            </div>
          </div>
        </form>
        <h1>{updateCity}</h1>
        <ul>
          <li>last updated: Tuesday</li>
          <li>Cloudy</li>
        </ul>
        <br />
        <br />
        <br />
        <h2>
          <div className="temperature"> </div>
          <div className="weather-icon"> </div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="Clear"
          />
          <div className="units">°C</div>
        </h2>
        <h5>
          <div className="description"></div>
        </h5>
        <ul>
          <li>humidity: {setMessage.humidity}%</li>
          <li>
            Windspeed: <span>{setMessage.wind}</span>km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
