import React from 'react';

export default function CurrentDate() {
  const getDate = () => {
    let date = new Date();
    return date.toLocaleString('en-GB', {
      dateStyle: 'full',
    });
  };

  return <div className="date">{getDate()}</div>;
}
