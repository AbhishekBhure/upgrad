import React, { useState, createRef } from "react";
import Weather from "./components/Weather";

const App = () => {
  const locationInput = createRef();
  const [location, setLocation] = useState("Bengaluru");
  return (
    <div className="weather-app">
      <input
        type="text"
        placeholder="Type a location..."
        ref={locationInput}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            setLocation(e.target.value);
            locationInput.current.value = "";
          }
        }}
      />
      <Weather
        location={location}
        render={({ error, isLoading, icon, place, temp, con }) =>
          !error ? (
            isLoading ? (
              <div className="loading"> Please wait... </div>
            ) : (
              <div className="result">
                <div className="place">{place}</div>
                <div className="temperature">{temp}</div>
                <div className="conditions">{con}</div>
                <img src={icon} alt={con} className="icon" />
              </div>
            )
          ) : (
            <div className="error">
              There was an error fetching the weather!
            </div>
          )
        }
      />
    </div>
  );
};

export default App;
