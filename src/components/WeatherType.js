import React from 'react';

export default function WeatherType(props) {
  // const searchIcon = (id) => {
  //     let url = `http://openweathermap.org/img/wn/${id}@4x`;
  //     // url.search = new URLSearchParams({
  //     //   q: query,
  //     //   units: 'metric',
  //     //   APPID: props.api.key,
  //     // });

  //     fetch(url)
  //       .then((res) => res.blob())
  //       .then((result) => {
  //         console.log(result); //delete
  //       });

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
