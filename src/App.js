import React from "react";
import { ReactDOM } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { API } from "./components/API";
import { SurfForecastApi } from "./components/surfForecastApi";
import { LoginPage } from "./components/loginPage";
import { LandingPage } from "./components/landingPage";
import { NavBar } from "./components/navBar";
import { Routes, Route } from "react-router-dom";
import { Register } from "./components/registrationPage";
import { ResultsContainer } from "./components/resultsContainer";

function App() {
  // GeoCode API variables
  const [city, setCity] = useState("");
  const [surfLocation, setSurfLocation] = useState();
  const [cityDetails, setCityDetails] = useState({});
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  useEffect(() => {}, ) 
  function geoCode() {
    const apiNinjasKey = "9bghXDYM2verAenR+Xoz2w==7llH0GEPA3U907k2";

    
    const options = {
      method: "Get",
      headers: {
        "X-API-KEY": apiNinjasKey,
      },
    };

    fetch(`https://api.api-ninjas.com/v1/geocoding?city=${city}`, options)
      .then((response) => response.json())
      .then((data) => {
        setCityDetails({
          name: data[0].name,
          country: data[0].country,
          state: data[0].state,
        });

        setLatitude(data[0].latitude);
        setLongitude(data[0].longitude)
        console.log(cityDetails.name);
        console.log(latitude);
        console.log(longitude);

        console.log(data);
      })
    

    }
  

  // Weather API variables
  const [temp, setTemp] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);

  return (
    <>
      <div className="header">
        <h1 style={{ color: "rgba(200, 250, 30, 0.5)" }}>
          <i>Smashed</i>
        </h1>
        <NavBar />
        <div className="searchBars">
          <API
            city={city}
            cityDetails={cityDetails}
            setCity={setCity}
            temp={temp}
            minTemp={minTemp}
            maxTemp={maxTemp}
            setTemp={setTemp}
            setMinTemp={setMinTemp}
            setMaxTemp={setMaxTemp}
            geoCode={geoCode}
          />

          {/* <SurfForecastApi
            surfLocation={surfLocation}
            setSurfLocation={setSurfLocation}
          /> */}
        </div>
      </div>
      <div className="resultsContainer">
        <ResultsContainer 
        cityDetails={cityDetails}
        city={city}
        temp={temp}
        geoCode={geoCode}
        minTemp={minTemp}
        maxTemp={maxTemp}
        />
      </div>

      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<Register />} />
      </Routes>


    </>
  );
}

export default App;
