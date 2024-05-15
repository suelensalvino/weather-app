import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Arrow from "../../assets/img/arrow.png";
import ArrowWhite from "../../assets/img/arrow-white.png";
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import { fetchWeatherData } from '../../utils/api';
import { getTemperatureClass } from '../../utils/temperatureUtils';
import { formatTime } from '../../utils/timeUtils';
import "./style.css";

function City() {
  const { cityName } = useParams();
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await fetchWeatherData(cityName);
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [cityName]);

  useEffect(() => {
    document.body.className = getTemperatureClass(data.main?.temp || 0);
  }, [data]);

  const font = { fontSize: '20px', position: 'relative', top: '-20px' };

  return (
    <div className="weather-info">
      {isLoading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <Link to="/" className="back-link">
            <img src={getTemperatureClass() === "snowy" ? Arrow : ArrowWhite} alt="Arrow" />
          </Link>

          <h1>{data.name}</h1>
          <p className='description'>{data.weather && data.weather[0].description}</p>
          <div className="current-weather">
            <h1>{data.main && data.main.temp}
              <span style={font}>°C</span>
            </h1>
          </div>
          <div className='img'>
            <WeatherIcon iconCode={data.weather[0].icon} />
          </div>
          <div className='min-max'>
            <p>Min</p>
            <p>{data.main && data.main.temp_min}°C</p>
          </div>
          <div className='min-max'>
            <p>Max</p>
            <p>{data.main && data.main.temp_max}°C</p>
          </div>
          <div className="weather-details">
            <div className='time'>
              <div>
                <p>Dawn</p>
                <p>{data.main && data.main.temp}°C</p>
                <WeatherIcon iconCode={data.weather[0].icon} />
              </div>
              <div>
                <p>Morning</p>
                <p>{data.main && data.main.temp}°C</p>
                <WeatherIcon iconCode={data.weather[0].icon} />
              </div>
              <div>
                <p>Afternoon</p>
                <p>{data.main && data.main.temp}°C</p>
                <WeatherIcon iconCode={data.weather[0].icon} />
              </div>
              <div>
                <p>Night</p>
                <p>{data.main && data.main.temp}°C</p>
                <WeatherIcon iconCode={data.weather[0].icon} />
              </div>
            </div>
            <div className='feels-like'>
              <div>
                <p className='title'>wind speed</p>
                <p>{data.wind && data.wind.speed} m/s</p>
              </div>
              <div>
                <p className='title'>sunrise</p>
                <p>{data.sys && formatTime(data.sys.sunrise)} AM</p>
              </div>
              <div>
                <p className='title'>sunset</p>
                <p>{data.sys && formatTime(data.sys.sunset)} PM</p>
              </div>
              <div>
                <p className='title'>humidity</p>
                <p>{data.main && data.main.humidity}%</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default City;
