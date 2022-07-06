import React from "react";

export default function Search() {
  return (
    <form className="mb-3">
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            placeholder="Type a city.."
            autoFocus="on"
            autoComplete="off"
            id="city-input"
            className=" form-control shadow-sm"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="form-control btn btn-primary shadow-sm"
          />
        </div>
        <div className="col-3">
          <button
            type="button"
            className="float-left form-control btn btn-success shadow-sm"
          >
            Current
          </button>
        </div>
      </div>
    </form>
  );
}
