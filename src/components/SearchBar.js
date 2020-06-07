import React, { useState } from 'react';

export default function SearchBar(props) {
  const [query, setQuery] = useState('');
  const search = (evt) => {
    if (evt.key === 'Enter') {
      let url = new URL(props.api.url);
      url.search = new URLSearchParams({
        q: query,
        units: 'metric',
        APPID: props.api.key,
      });

      // fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          props.setWeather(result);
          setQuery('');
          console.log(result); //delete
        });
    }
  };
  return (
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
  );
}
