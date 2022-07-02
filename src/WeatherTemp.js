import React from "react";

export default function WeatherTemp() {
  return (
    <div className="d-flex weather-temperature">
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="Cloudy"
        className="float-left"
      />
      <div className="float-left">
        <strong>19</strong>
        <span className="units">
          <a href="/">°C</a> | <a href="/">°F</a>
        </span>
      </div>
    </div>
  );
}
