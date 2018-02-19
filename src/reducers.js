import { combineReducers } from "redux";
import * as Actions from "./actions";
import FBdata from "./data/FBclose.json";
import GOOGLEdata from "./data/GOOGLEclose.json";

const initialState = {
  stocks: ["FB", "GOOGL"],
  stockData: {
    stocksArray: [FBdata.datatable.data, GOOGLEdata.datatable.data],
    isFetching: false,
    error: null
  },
  date: "2018-01-04",
  currentDatePhrase: "",
  stocksRows: [],
  filterValue: "",
  transactions: [],
  currentBalance: 20000
};

const stocks = (state = initialState.stockData, action) => {
  switch (action.type) {
    case Actions.GET_SUCCESS:
      return {
        ...state,
        stocks: action.data,
        isFetching: false
      };
    case Actions.GET_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_FAILURE:
      console.log("Error:", action.error);
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

const currentBalance = (state = initialState.currentBalance, action) => {
  switch (action.type) {
    case Actions.CHANGE_BALANCE:
      return state + action.data;
    default:
      return state;
  }
};

const filter = (state = initialState.filterValue, action) => {
  switch (action.type) {
    case Actions.NEW_FILTER:
      return action.data;
    case Actions.RESET_FILTER:
      return "";
    default:
      return state;
  }
};

const setDate = (state = initialState.date, action) => {
  switch (action.type) {
    case Actions.NEW_DATE:
      return action.data;
    default:
      return state;
  }
};

const transactions = (state = initialState.transactions, action) => {
  switch (action.type) {
    case Actions.NEW_TRANSACTION:
      return [...state, action.data];
    default:
      return state;
  }
};

export const stockApp = combineReducers({
  stocks,
  currentBalance,
  filter,
  setDate,
  transactions
});
