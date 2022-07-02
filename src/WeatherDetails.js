import React from "react";

export default function WeatherDetails() {
  return (
    <ul>
      <li>
        Humidity: <span id="humidity">80</span>%
      </li>
      <li>
        Wind: <span id="wind">10</span> km/h
      </li>
    </ul>
  );
}
