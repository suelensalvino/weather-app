import React from 'react';

function WeatherIcon({ iconCode }) {
  return (
    <img src={`https://openweathermap.org/img/wn/${iconCode}.png`} alt="Weather Icon" />
  );
}

export default WeatherIcon;
