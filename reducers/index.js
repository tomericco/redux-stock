import * as _ from 'lodash'
import { combineReducers } from 'redux'
import {
    REMOVE_STOCK,
    ADD_STOCK,
    RECEIVE_STOCKS
} from '../actions'

function myStocks(state = {}, action = {}) {
    switch (action.type) {
        case ADD_STOCK:
            return Object.assign({}, state, {
                [action.symbol]: { symbol: action.symbol }
            })

        case REMOVE_STOCK:
            return _.omit(state, action.symbol)

        case RECEIVE_STOCKS:
            var updatedStocks = {}
            action.stocks.forEach(stock => {
                updatedStocks[stock.Symbol] =  {
                    symbol: stock.Symbol,
                    currentPrice: stock.LastTradePriceOnly,
                    change: stock.Change
                }
            })
            return Object.assign({}, state, updatedStocks)

        default:
            return state
    }
}

const rootReducer = combineReducers({
    myStocks
})

export default rootReducer
