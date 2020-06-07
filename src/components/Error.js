import React, { Fragment } from 'react';

export default function Error(props) {
  return (
    <Fragment>
      {props.weather.cod === '404' ? (
        <div className="error-box">
          <div className="error">{props.weather.message}</div>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
}
