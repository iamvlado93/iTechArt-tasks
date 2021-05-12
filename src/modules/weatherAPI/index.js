import React, { useState } from 'react';

import { fetchWeather } from './API';
import './index.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async () => {
    const data = await fetchWeather(query);
    setWeather(data);
    setQuery('');
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="button" onClick={search} type="button">
        Search
      </button>
      {weather.main && (
        <div className="card">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">{Math.round(weather.main.temp)}&deg;</div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>Wind Speed: {weather.wind.speed}</p>
            <p>Wind Degree: {weather.wind.deg}</p>
            <p>Weather Description: {weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
