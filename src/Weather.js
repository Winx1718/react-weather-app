import React from "react";
import WeatherTemp from "./WeatherTemp";
import WeatherDetails from "./WeatherDetails";

export default function Weather() {
  return (
    <div className="row">
      <div className="col-6">
        <WeatherTemp />
      </div>
      <div className="col-6">
        <WeatherDetails />
      </div>
    </div>
  );
}
