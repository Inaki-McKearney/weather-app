import React from 'react';

export default function Temperature(props) {
  return (
    <div>
      <div className="temp">{props.temp}°C</div>
    </div>
  );
}
