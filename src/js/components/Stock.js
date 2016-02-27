import React, { PropTypes, Component } from 'react'

export default class Stock extends Component {
    render() {
        return (
            <div data-symbol={this.props.symbol}>
                <span>{this.props.symbol}</span>
                <span>{this.props.currentPrice}</span>
                <span>{this.props.change}</span>
                <span onClick={this.props.handleRemoveStock}>X</span>
            </div>
        )
    }
}

Stock.propTypes = {
    symbol: PropTypes.string,
    currentPrice: PropTypes.string,
    change: PropTypes.string,
    handleRemoveStock: PropTypes.func
}