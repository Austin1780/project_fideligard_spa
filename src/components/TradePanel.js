import React, { Component } from "react";

const TradePanel = () => (
  <div className="panel">
    <div className="row">
      <div className="col">
        <h2>Trade</h2>
      </div>
      <div className="col">
        <select name="panel-select">
          <option value="tradePanel">Trade</option>
          <option value="portfolioPanel">Portfolio</option>
          <option value="transactionsPanel">Transactions</option>
        </select>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <p>Symbol:</p>
        <div className="input-group">
          <form>
            <label htmlFor="buy-sell">Buy/Sell: </label>
            <br />
            <select name="buy-sell">
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
            <br />
            <label htmlFor="quantity">Quantity: </label>
            <br />
            <input type="text" name="quantity" />
            <p>Date:</p>
            <p>1/5/2018</p>
            <p>$100.00</p>
            <p>$1,000.00</p>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="col">
        <p>Cash Available:</p>
        <p>$100,000</p>
        <br />
        <p>Order Status:</p>
        <p className="status-color">VALID</p>
      </div>
    </div>
  </div>
);

export default TradePanel;
