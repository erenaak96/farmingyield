import React from 'react';

const Button = ({ label, handleClick, disabled}) => (
  <button
    className="btn"
    onClick={handleClick}
    disabled={disabled}
  >
    {label}
  </button>
);

export default Button;