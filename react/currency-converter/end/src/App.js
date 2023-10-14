import React, {Component} from "react";
import CurrencyInput from "./CurrencyInput";
import openRates from "./services/openRates";

class App extends Component {
  state = {
    from: "USD",
    to: "INR",
    rate: 1,
    fromAmt: 1,
    toAmt: 1
  };
  componentDidMount() {
    this.fetchRates(this.state.from, this.state.to);
  }
  componentDidUpdate(_, prevState) {
    if (prevState.from !== this.state.from || prevState.to !== this.state.to) {
      this.fetchRates(this.state.from, this.state.to);
    }
  }
  fetchRates = async (base = "USD", symbol = "INR") => {
    const {rate} = await openRates(base, symbol);
    this.setState({
      rate
    });
  };
  computeResult = key => {
    let {fromAmt, toAmt} = this.state;

    if (fromAmt !== null) {
      toAmt = parseFloat(fromAmt * this.state.rate).toFixed(2);
    } else {
      fromAmt = parseFloat(toAmt / this.state.rate).toFixed(2);
    }
    return key === "from" ? fromAmt : toAmt;
  };
  setAmount = (amt, field) => {
    if (field === "from") {
      this.setState({
        fromAmt: amt,
        toAmt: null
      });
    } else {
      this.setState({
        fromAmt: null,
        toAmt: amt
      });
    }
  };
  render() {
    return (
      <div className="currency-converter">
        <CurrencyInput
          symbol={this.state.from}
          selectSymbol={sym => this.setState({from: sym})}
          setAmount={amt => this.setAmount(amt, "from")}
          amount={this.computeResult("from")}
        />
        <CurrencyInput
          symbol={this.state.to}
          selectSymbol={sym => this.setState({to: sym})}
          setAmount={amt => this.setAmount(amt, "to")}
          amount={this.computeResult("to")}
        />
      </div>
    );
  }
}

export default App;
