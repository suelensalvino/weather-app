import React from 'react';
import { Link } from 'react-router-dom';
import globeImage from "../../assets/img/globe.png";
import "./style.css";

function Home({ onSelectCity }) {
  const cities = ["Dallol", "Fairbanks", "London", "Recife", "Vancouver", "Yakutsk"];

  return (
    <div className="container">
      <div className="weather">
        <div className="title">
          <h1>WEATHER</h1>
          <p>select a city</p>
        </div>
        <div className="img">
          <img src={globeImage} alt="Globe" />
        </div>
        <div className="cities">
          <ul>
            {cities.map((city) => (
              <li key={city}>
                <Link to={`/city/${city}`} >{city}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
