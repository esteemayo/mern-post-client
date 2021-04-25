import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, color, icon, onClick }) => {
  return (
    <button onClick={onClick} className={`btn btn-sm ${color}`} type="button">
      {text} {icon}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.any,
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
