import React from "react";
import { ReactDOM } from "react";
import { useState, useEffect } from "react";

export function API({
  geoCode,
  city,
  setCity,
  setTemp,
  minTemp,
  maxTemp,
  setMaxTemp,
  setMinTemp,
  temp,
  cityDetails,
}) {
  function getWeather() {
    // Fetch API goes here
    const options = {
      method: "GET",
      headers: {
        "X-Api-Key": "9bghXDYM2verAenR+Xoz2w==7llH0GEPA3U907k2",
      },
    };

    fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTemp(data.temp);
        setMinTemp(data.min_temp);
        setMaxTemp(data.max_temp);
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <div>
        <div>
          <form>
            <input
              value={city}
              type="text"
              className="searchInput"
              id="weatherInput"
              placeholder="Search weather"
              onChange={(event) => setCity(event.target.value)}
            />
            <button
              type="button"
              className="weatherSearch"
              onClick={(event) => {
                getWeather();
                geoCode();
              }}
            >
              Get Weather Forecast
            </button>
          </form>
        </div>
      </div>

      
    </>
  );
}
