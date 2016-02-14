import fetch from 'isomorphic-fetch'

export const ADD_STOCK = 'ADD_STOCK'
export const REMOVE_STOCK = 'REMOVE_STOCK'
export const REQUEST_STOCKS = 'REQUEST_STOCKS'
export const RECEIVE_STOCKS = 'RECEIVE_STOCKS'

export function addStock(symbol) {
  return {
    type: ADD_STOCK,
    symbol
  }
}

export function removeStock(symbol) {
  return {
    type: REMOVE_STOCK,
    symbol
  }
}

export function fetchStocks(symbols) {
  var symbolsStr = symbols.map(function (symbol) {
    return "'" + symbol + "'";
  }).toString()

  var url = `https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quote where symbol in (${symbolsStr})&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys`;

  return dispatch => {
    return fetch(url)
        .then(response => response.json())
        .then(json => {
          let stocks = null;
          if (json.query.results) {
            if (json.query.count == 1) {
              stocks = [json.query.results.quote];
            } else {
              stocks = json.query.results.quote;
            }
          } else {
            console.error("Update stocks failed");
          }
          dispatch(receiveStocks(stocks))
        })
  }
}

export function receiveStocks(json) {
  return {
    type: RECEIVE_STOCKS,
    stocks: json
  }
}