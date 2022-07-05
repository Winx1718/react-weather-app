import React from "react";

export default function Search() {
  return (
    <div className="clearfix">
      <form className="float-left mb-3">
        <input
          type="search"
          placeholder="Type a city.."
          autoFocus="on"
          autoComplete="off"
          id="city-input"
          className=" form-control-sm shadow-sm"
        />
        <input
          type="submit"
          value="Search"
          className="form-control-sm btn btn-primary shadow-sm"
        />
      </form>
      <button className="float-left form-control-sm btn btn-success shadow-sm">
        Current
      </button>
    </div>
  );
}
