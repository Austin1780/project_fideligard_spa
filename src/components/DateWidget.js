import React, { Component } from "react";

const DateWidget = ({ onChange }) => {
  return (
    <div className="panel">
      <h3>Select a Stock Date:</h3>
      <input type="date" name="dateSelect" onChange={onChange} />
    </div>
  );
};

export default DateWidget;
