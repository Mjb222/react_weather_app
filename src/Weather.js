import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form className="search-form">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control shadow-sm"
              />
              <span>
                <input type="submit" value="🔍" className="searchbutton" />
                <input type="submit" value="📍" className="button" />
              </span>
            </div>
          </div>
        </form>

        <h1>Paris</h1>
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
          />{" "}
          <div className="units">15°C</div>
        </h2>
        <h5>
          <div className="description"></div>
        </h5>
        <ul>
          <li>
            Humidity: <span>30</span>%{" "}
          </li>
          <li>
            Windspeed: <span>70</span>km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
