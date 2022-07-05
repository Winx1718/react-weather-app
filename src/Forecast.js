import React from "react";
import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="row mt-3">
      <div className="col-sm-2">
        <div className="forecast-day">Monday</div>
        <div className="forecast-icon">
          <ReactAnimatedWeather
            icon={"CLOUDY"}
            color={"#000000"}
            size={20}
            animate={true}
          />
        </div>
        <div className="forecast-temp">{15}°</div>
      </div>
      <div className="col-sm-2">
        <div className="forecast-day">Tuesday</div>
        <div className="forecast-icon">
          <ReactAnimatedWeather
            icon={"CLOUDY"}
            color={"#000000"}
            size={20}
            animate={true}
          />
        </div>
        <div className="forecast-temp">{15}°</div>
      </div>
      <div className="col-sm-2">
        <div className="forecast-day">Wednesday</div>
        <div className="forecast-icon">
          <ReactAnimatedWeather
            icon={"CLOUDY"}
            color={"#000000"}
            size={20}
            animate={true}
          />
        </div>
        <div className="forecast-temp">{15}°</div>
      </div>
      <div className="col-sm-2">
        <div className="forecast-day">Thursday</div>
        <div className="forecast-icon">
          <ReactAnimatedWeather
            icon={"CLOUDY"}
            color={"#000000"}
            size={20}
            animate={true}
          />
        </div>
        <div className="forecast-temp">{15}°</div>
      </div>
      <div className="col-sm-2">
        <div className="forecast-day">Friday</div>
        <div className="forecast-icon">
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
