import React, { Component } from "react";
import Navbar from "./Navbar";
import StockPanel from "./StockPanel";
import DateWidget from "./DateWidget";
import TradePanel from "./TradePanel";
import ProfilePanel from "./ProfilePanel";
import TransactionsPanel from "./TransactionsPanel";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = ({ dateChange, data }) => (
  <Router>
    <div>
      <Navbar />
      <div className="row">
        <div className="col">
          <StockPanel data={data} />
        </div>
        <div className="col">
          <DateWidget onChange={dateChange} />
          <Switch>
            <Route exact path="/" component={TradePanel} />
            <Route path="/transactions" component={TransactionsPanel} />
            <Route path="/profile" component={ProfilePanel} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
