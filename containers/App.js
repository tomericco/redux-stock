import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addStock, fetchStocks } from '../actions'
import StocksList from '../components/StocksList'
import style from 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  handleAddStockInputChange(e) {
    this.setState({ inputSymbol: e.target.value })
  }

  handleAddStockClick(e) {
    var symbol = this.state.inputSymbol

    if (symbol) {
      this.props.dispatch(fetchStocks([symbol]))
      this.setState({ inputSymbol: null })
    }
  }

  render() {
    const { myStocks } = this.props

    return (
      <div>
        <input type="text" onChange={this.handleAddStockInputChange.bind(this)} placeholder="Enter a symbol" />
        <button onClick={this.handleAddStockClick.bind(this)}>+</button>
        <StocksList dispatch={this.props.dispatch} stocks={myStocks} />
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
