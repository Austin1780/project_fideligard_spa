import api_key from "./private.js";
export const GET_REQUEST = "GET_REQUEST";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILURE = "GET_FAILURE";
export const NEW_DATE = "NEW_DATE";
export const NEW_TRANSACTION = "NEW_TRANSACTION";
export const CHANGE_BALANCE = "CHANGE_BALANCE";
export const NEW_FILTER = "NEW_FILTER";
export const RESET_FILTER = "RESET_FILTER";

export function getRequest() {
  return {
    type: GET_REQUEST
  };
}

export function getSuccess(data) {
  return {
    type: GET_SUCCESS,
    data
  };
}

export function getFailure(error) {
  return {
    type: GET_FAILURE,
    error
  };
}

export function getStockData(query) {
  return dispatch => {
    dispatch(getRequest());
    fetch(
      `https://www.quandl.com/api/v3/datatables/WIKI/PRICES.json?ticker=${query}&qopts.columns=date,close&api_key=${api_key}`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response}`);
        }
        return response.json();
      })
      .then(response => {
        console.log(response);
        dispatch(getSuccess(response));
      })
      .catch(e => {
        dispatch(getFailure(e));
      });
  };
}

export function newDate(data) {
  return {
    type: NEW_DATE,
    data
  };
}

export function newTransaction(data) {
  return {
    type: NEW_TRANSACTION,
    data
  };
}

export function changeBalance(data) {
  return {
    type: CHANGE_BALANCE,
    data
  };
}

export function newFilter(data) {
  return {
    type: NEW_FILTER,
    data: data.toUpperCase()
  };
}

export function resetFilter(data) {
  return {
    type: RESET_FILTER
  };
}
