import React from 'react';

// eslint-disable-next-line react/prop-types
const Square = ({ value, onSquareClick }) => (
  // eslint-disable-next-line react/button-has-type
  <button className="square" onClick={onSquareClick}>
    {value}
  </button>
);

export default Square;
