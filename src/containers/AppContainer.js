import React, { Component } from "react";
import { connect } from "react-redux";
import App from "../components/App";
import serialize from "form-serialize";
import { getStockData } from "../actions";
import FBdata from "../data/FBclose.json";
import GOOGLEdata from "../data/GOOGLEclose.json";

class AppContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      stocks: ["FB", "GOOGL"],
      stocksArray: [FBdata.datatable.data, GOOGLEdata.datatable.data],
      date: "2018-01-04",
      currentDatePhrase: "",
      stockRows: []
    };
    this.dateChange = this.dateChange.bind(this);
  }

  componentDidMount() {
    // this.setState({
    //   stocksArray: this.state.stocksArray.push(
    //     FBdata.datatable.data,
    //     GOOGLEdata.datatable.data
    //   )
    // });
    this.props.getStockData();
  }

  dateChange(e) {
    this.setState({ date: e.target.value });
  }

  selectPanel(e) {
    this.setState({});
  }

  render() {
    return (
      <div>
        <App dateChange={this.dateChange} data={this.state} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stocks: state.stocks.stocksArray
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStockData: () => {
      dispatch(getStockData("AAPL"));
    }
  };
};

const AppContainerConnected = connect(mapStateToProps, mapDispatchToProps)(
  AppContainer
);
export default AppContainerConnected;
