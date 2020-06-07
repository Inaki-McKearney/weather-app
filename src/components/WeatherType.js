import React from 'react';

export default function WeatherType(props) {
  return (
    <div>
      <div className="weather">
        {props.type.main}
        <img
          src={`http://openweathermap.org/img/wn/${props.type.icon}@2x.png`}
          alt="Weather icon"
        ></img>
      </div>
    </div>
  );
}
