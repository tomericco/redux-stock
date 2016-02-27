import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addStock, fetchStocks } from '../actions'
import StocksList from '../components/StocksList'

import 'bootstrap/dist/css/bootstrap.css'
import 'css/App'

class App extends Component {
  constructor() {
    super()
    this.state = getInitialState()
  }

  handleAddStockInputChange(e) {
    this.setState({ inputSymbol: e.target.value })
  }

  handleAddStockClick() {
    var symbol = this.state.inputSymbol

    if (symbol.length > 0) {
      this.props.dispatch(fetchStocks([symbol]))
      this.setState({ inputSymbol: '' })
    }
  }

  render() {
    const { myStocks } = this.props

    return (
      <div className="appContainer">
        <input type="text" value={this.state.inputSymbol} onChange={this.handleAddStockInputChange.bind(this)} placeholder="Enter a symbol" />
        <button onClick={this.handleAddStockClick.bind(this)}>+</button>
        <StocksList dispatch={this.props.dispatch} stocks={myStocks} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function getInitialState() {
  return {
    inputSymbol: ''
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(App)
