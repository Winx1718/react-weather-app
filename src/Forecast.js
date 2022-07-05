import React from "react";
import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="row">
      <div className="col-sm-2">
        <div className="forecast-day">Monday</div>
        <div className="forecastIcon">
          <ReactAnimatedWeather
            icon={"CLOUDY"}
            color={"#000000"}
            size={20}
            animate={true}
          />
        </div>
        <div className="forecast-temp">{15}°</div>
      </div>
    </div>
  );
}
