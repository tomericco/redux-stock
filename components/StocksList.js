import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import Stock from './Stock'
import { removeStock } from '../actions'

export default class StocksList extends Component {
    handleRemoveStock(e) {
        const symbol = e.target.parentElement.attributes['data-symbol'].value
        this.props.dispatch(removeStock(symbol))
    }

    render() {
        const stocks = this.props.stocks

        return (
            <ul>
                {Object.keys(stocks).map((stock, i) =>
                    <li key={i}>
                        <Stock symbol={stocks[stock].symbol}
                               currentPrice={stocks[stock].currentPrice}
                               change={stocks[stock].change}
                               handleRemoveStock={this.handleRemoveStock.bind(this)} />
                    </li>
                )}
            </ul>
        )
    }
}

StocksList.propTypes = {
    stocks: PropTypes.object
}