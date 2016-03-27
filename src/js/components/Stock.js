import React, { PropTypes, Component } from 'react'

var classNames = require('classnames');

export default class Stock extends Component {
    render() {
        var changeClass = classNames({
            'change': true,
            'down': this.props.change.charAt(0) === '-'
        });

        return (
            <div data-symbol={this.props.symbol}>
                <span className="symbol">{this.props.symbol}</span>
                <span className="removeStock" onClick={this.props.handleRemoveStock}>X</span>
                <span className={changeClass}>{this.props.change}%</span>
                <span className="currentPrice">{this.props.currentPrice}</span>
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