import React from "react";

const Spinner = () => {
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <div
        className="spinner-grow text-primary"
        style={spinnerStyle}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow text-secondary"
        style={spinnerStyle}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow text-success"
        style={spinnerStyle}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow text-danger"
        style={spinnerStyle}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow text-warning"
        style={spinnerStyle}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow text-info"
        style={spinnerStyle}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow text-light"
        style={spinnerStyle}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow text-dark"
        style={spinnerStyle}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

const spinnerStyle = {
  width: "3rem",
  height: "3rem",
};

export default Spinner;
