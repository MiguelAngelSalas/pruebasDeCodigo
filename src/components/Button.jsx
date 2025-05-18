import React from 'react';


const Button = ({ children, type = 'button', variant = 'primary', ...props }) => {
  return (
    <button type={type} className={`btn btn-${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
