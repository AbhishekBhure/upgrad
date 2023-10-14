import React from "react";

const CurrencyInput = ({symbol, selectSymbol, amount, setAmount}) => (
  <div className="field">
    <div className="currency-picker">
      <select onChange={e => selectSymbol(e.target.value)} value={symbol}>
        <option>USD</option>
        <option>INR</option>
        <option>EUR</option>
        <option>SGD</option>
        <option>GBP</option>
        <option>CAD</option>
        <option>AUD</option>
        <option>CNY</option>
        <option>JPY</option>
        <option>NZD</option>
      </select>
    </div>
    <div className="currency-input">
      <input
        type="number"
        className="number-input"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
    </div>
  </div>
);

export default CurrencyInput;
