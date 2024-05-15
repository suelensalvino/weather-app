import React, { useState } from "react";
import Home from "./Home";
import City from "./City";


function WeatherApp() {
    const [selectedCity, setSelectedCity] = useState(null);

    const handleCitySelect = (city) => {
        setSelectedCity(city);
    };

    return (
        <div className="weather-app">
            <Home onSelectCity={handleCitySelect} />
            {selectedCity && <City selectedCity={selectedCity} />}
        </div>
    );
}

export default WeatherApp;
