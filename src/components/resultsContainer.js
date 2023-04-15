import React from "react";
import { useState } from "react";
import "../css/landingPage.css"


export function ResultsContainer ({cityDetails, city, temp, geoCode, minTemp, maxTemp}) {



    return(
        <>
        {temp ? 
        <div className="resultscontainer">
            <div className="weatherresults">
                <div className="resultscontainerheader">
                    <h2>{cityDetails.name}, {cityDetails.state}, {cityDetails.country}</h2>
                </div>
                <div className="resultscontainercontent">
                    <p>Temp: {temp}</p>
                    <p>Lows of: {minTemp}</p>
                    <p>Highs of: {maxTemp}</p>
                </div>
            </div>

            <div className="surfresults">

            </div>
                
        </div> : null
}
        
        </>
    )
}