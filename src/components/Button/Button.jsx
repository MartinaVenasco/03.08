import './index.css'
import React from 'react';

const Button = ({ onClick, children }) => {
	return (
	  <button className="btn-add" onClick={onClick}>
		{children="+"}
	  </button>
	);
  };

export default Button