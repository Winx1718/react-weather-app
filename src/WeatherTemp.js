import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
export default function WeatherTemp() {
  return (
    <div className="d-flex weather-temperature">
      <ReactAnimatedWeather
        icon={"CLEAR_DAY"}
        color={"black"}
        size={38}
        animate={true}
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
