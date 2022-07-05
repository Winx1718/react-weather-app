import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="d-flex">
          <ReactAnimatedWeather
            icon={"CLOUDY"}
            color={"#000000"}
            size={50}
            animate={true}
          />
          <div className="float-left weather-temperature">
            <strong>19</strong>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>
            Humidity: <span id="humidity">80</span>%
          </li>
          <li>
            Wind: <span id="wind">10</span> km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
