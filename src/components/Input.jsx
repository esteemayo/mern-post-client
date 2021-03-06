import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-outline mb-2">
      <label className="form-label" htmlFor={name}>
        {label} <span style={labelStyling}>*</span>
      </label>
      <input {...rest} id={name} name={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

const labelStyling = { color: "red" };

export default Input;
