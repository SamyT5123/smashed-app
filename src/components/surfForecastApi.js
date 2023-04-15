import { React, ReactDOM, useEffect, useState } from "react";
import { ResultsContainer } from "./resultsContainer";



  export function SurfForecastApi({surfLocation, setSurfLocation}) {

    


    fetch(``).then().then();

    return (
    <>
        <div>
        <form>
          <input
            type="text"
            className="searchInput"
            id="searchInput"
            placeholder="Search surf"
            onChange={(event) => setSurfLocation(event.target.value)}
          />
          <button type="button" className="surfSearch">
            Get Surf Forecast
          </button>
        </form>
      </div>
    </>
    )


  }