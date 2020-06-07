import React from 'react';

export default function Location(props) {
  return (
    <div>
      <div className="location-box">
        {props.weather.name ? (
          <div className="location">
            {props.weather.name}, {props.weather.sys.country}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
