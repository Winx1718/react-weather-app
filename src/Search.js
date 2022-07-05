import React from "react";

export default function Search() {
  return (
    <div className="clearfix">
      <form className="float-left search-form mb-3" id="search-form">
        <input
          type="search"
          placeholder="Type a city.."
          autoFocus="on"
          autoComplete="off"
          id="city-input"
          className="shadow-sm"
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-primary shadow-sm"
        />
      </form>
      <button className="float-left btn btn-success shadow-sm">Current</button>
    </div>
  );
}
