import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Location from './components/Location';
import CurrentDate from './components/CurrentDate';
import Temperature from './components/Temperature';
import WeatherType from './components/WeatherType';
import Error from './components/Error';
import Message from './components/Message';

const api = {
  key: '79313e325d1f563d35fc3c61b805604a',
  url: 'https://api.openweathermap.org/data/2.5/weather',
};

function App() {
  const [weather, setWeather] = useState({});

  // Get initial user coordinates
  useEffect(() => {
    loadLocalWeather();
  }, []);

  const loadLocalWeather = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      let url = new URL(api.url);
      url.search = new URLSearchParams({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
        units: 'metric',
        APPID: api.key,
      });

      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
        });
    });
  };

  return (
    <div
      className={
        weather.main ? `app ${weather.weather[0].main.toLowerCase()}` : 'app'
      }
    >
      <main>
        <SearchBar api={api} setWeather={setWeather} />
        <Location weather={weather} />
        <CurrentDate />

        {weather.main ? (
          <div className="weather-box">
            <Temperature temp={Math.round(weather.main.temp)} />
            <WeatherType type={weather.weather[0]} />
          </div>
        ) : !weather.cod ? (
          <Message message="Please enable location tracking or use the search bar above" />
        ) : (
          ''
        )}

        <Error weather={weather} />
      </main>
    </div>
  );
}

export default App;
