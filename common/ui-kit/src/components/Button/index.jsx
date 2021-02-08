import React from 'react';

const BASE_BUTTON =
  'rounded outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg';
const CONTAINED_BUTTON = `${BASE_BUTTON} bg-green-400 border border-green-400 text-white`;
const OUTLINED_BUTTON = `${BASE_BUTTON} border border-green-400 text-green-400`;

export const Button = ({ onClick, label = 'Some label', outlined }) => {
  return (
    <button
      onClick={onClick}
      className={outlined ? OUTLINED_BUTTON : CONTAINED_BUTTON}
    >
      <span>{label}</span>
    </button>
  );
};
