import React, { Component } from "react";
import emptyPockets from "./money.jpg";

const StockPanel = ({ data }) => {
  let dateIndex = undefined;
  for (let i = 0; i < data.stocksArray[0].length; i++) {
    if (data.stocksArray[0][i][0] === data.date) {
      dateIndex = i;
    }
  }

  let currentDatePhrase = (
    <p className="warningText">
      The stock market was not open on this date. Please select a new date.
    </p>
  );
  let stockRows = [];
  if (dateIndex !== undefined) {
    currentDatePhrase = (
      <h3>{`Stocks for ${data.stocksArray[0][dateIndex][0]}`}</h3>
    );
    for (let i = 0; i < data.stocks.length; i++) {
      stockRows.push(
        <tr>
          <th scope="row">{data.stocks[i]}</th>
          <td>{data.stocksArray[i][dateIndex][1]}</td>
          <td>{data.stocksArray[i][dateIndex - 2][1]}</td>
          <td>{data.stocksArray[i][dateIndex - 7][1]}</td>
          <td>{data.stocksArray[i][dateIndex - 30][1]}</td>
          <td>Trade</td>
        </tr>
      );
    }
  }

  return (
    <div className="panel">
      <div className="row">
        <div className="col">{currentDatePhrase}</div>
        <div className="col">
          <label htmlFor="stockFilter">Filter:</label>
          <br />
          <input type="text" name="stockFilter" />
        </div>
      </div>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Price</th>
              <th>1d</th>
              <th>7d</th>
              <th>30d</th>
              <th>Trade?</th>
            </tr>
          </thead>
          <tbody>{stockRows}</tbody>
        </table>
      </div>
      <h5>
        Need more money? <br />Invest in stocks now!
      </h5>
      <img src={emptyPockets} className="smImg" />
    </div>
  );
};

export default StockPanel;
