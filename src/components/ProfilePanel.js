import React, { Component } from "react";

const ProfilePanel = () => (
  <div className="panel">
    <div className="row">
      <div className="col">
        <h2>Profile</h2>
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
            <th>Cost Basis</th>
            <th>Current Value</th>
            <th>Profit/Loss</th>
            <th>1d</th>
            <th>7d</th>
            <th>30d</th>
          </tr>
        </thead>
        <tbody />
      </table>
    </div>
    <div className="row">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Quantity</th>
            <th>Cost Basis</th>
            <th>Current Value</th>
            <th>Profit/Loss</th>
            <th>Current Price</th>
            <th>1d</th>
            <th>7d</th>
            <th>30d</th>
            <th>Trade?</th>
          </tr>
        </thead>
        <tbody />
      </table>
    </div>
  </div>
);

export default ProfilePanel;
