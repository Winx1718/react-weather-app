import React from "react";

export default function Search() {
  return (
    <form className="search-form mb-3" id="search-form">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type a city.."
            autoFocus="on"
            autoComplete="off"
            id="city-input"
            className="form-control shadow-sm"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="form-control btn btn-primary shadow-sm w-100"
          />
        </div>
      </div>
    </form>
  );
}