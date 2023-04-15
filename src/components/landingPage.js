import React from "react";
import { ReactDOM } from "react";
import { useState, useEffect } from "react";
import "../css/landingPage.css";
import { ResultsContainer } from "./resultsContainer";

export function LandingPage() {

  const banner = document.querySelector(".banner");

  

  return (
    <>
      <div className="bannerCont">
        <div className="banner">
          <h1>
            Get the results you
            <span style={{ color: "green" }}>
              <strong> need</strong>{" "}
            </span>
            , <br />
            straight from the front line.
          </h1>
        </div>
      </div>
      
    
     
    </>
  );
}
