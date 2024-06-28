import React, { useState, useEffect } from 'react';
import LocationInput from './component/LocationInput';
import CurrentWeather from './component/CurrentWeather';
import WeatherForecast from './component/WeatherForecast';
import weatherLogo from "./image/weather.jpeg"
import "./App.css"

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const App = () => {
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city) {
      fetchWeatherData(city);
    }
  }, [city]);

  const fetchWeatherData = async (city) => {
    try {
      const currentWeatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const currentWeatherData = await currentWeatherResponse.json();

      if (currentWeatherResponse.ok) {
        setCurrentWeather(currentWeatherData);
        setError(null);
      } else {
        throw new Error(currentWeatherData.message);
      }

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );
      const forecastData = await forecastResponse.json();

      if (forecastResponse.ok) {
        setForecast(forecastData);
        setError(null);
      } else {
        throw new Error(forecastData.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSearch = (city) => {
    setCity(city);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-4">
        <img src={weatherLogo} alt="Weather Logo" className="mx-auto w-20 h-20 border-r-gray-700 rounded-lg" />
        <h1 className="text-3xl font-bold ">Weather Forecast</h1>
      </div>
      <LocationInput onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <WeatherForecast data={forecast} />}
    </div>
  );
};

export default App;
