import React from "react";
import axios from "axios";

export default function Weather() {
  function showWeather(response) {
    alert(`the Weather is ${response.data.main.temp}`);
  }
  let apiKey = "913b7ac1ecf2018545f41afe76c8aad3";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=imperial`;
  axios.get(url).then(showWeather);
  console.log(url);
}
