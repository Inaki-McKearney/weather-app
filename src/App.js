import React, { useState, useEffect } from 'react';
const api = {
  key: '79313e325d1f563d35fc3c61b805604a',
  base: 'https://api.openweathermap.org/data/2.5/weather',
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  // const [coords, setCoords] = useState({});

  // Get initial user coordinates
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(loadLocalWeather);
  }, []);

  const loadLocalWeather = (pos) => {
    let url = new URL(api.base);
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
  };

  const search = (evt) => {
    if (evt.key === 'Enter') {
      let url = new URL(api.base);
      url.search = new URLSearchParams({
        q: query,
        units: 'metric',
        APPID: api.key,
      });

      // fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
          console.log(result); //delete
        });
    }
  };

  const getDate = () => {
    let date = new Date();
    return date.toLocaleString('en-GB', {
      dateStyle: 'full',
    });
  };

  return (
    <div
      className={
        weather.main ? `app ${weather.weather[0].main.toLowerCase()}` : 'app'
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyUp={search}
          />
        </div>
        <div>
          <div className="location-box">
            {weather.name ? (
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
            ) : (
              ''
            )}
            <div className="date">{getDate()}</div>
          </div>
          {weather.main ? (
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          ) : (
            ''
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
