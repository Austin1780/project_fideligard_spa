import React, { Component } from "react";

const TransactionsPanel = () => (
  <div className="panel">
    <div className="row">
      <div className="col">
        <h2>Transactions</h2>
      </div>
      <div className="col">
        <label htmlFor="stockFilter">Filter:</label>
        <br />
        <input type="text" name="stockFilter" />
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
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Symbol</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody />
      </table>
    </div>
  </div>
);

export default TransactionsPanel;
