import React from "react";

const Toast = ({ type, message }) => {
  return (
    <div className={`toast-container ${type}`}>
      <p className={`toast-text ${type}`}>{message}</p>
    </div>
  );
};

export default Toast;
