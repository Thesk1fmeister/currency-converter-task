import React from "react";
import '../App.css'

function Converter(props) {
  const { rates, amount, onChangeAmount, onChangeCurrency, currency } =
    props;

  return (
    <div className="group">
      <input
        type={"number"}
        value={amount}
        onChange={(e) => onChangeAmount(e.target.value)}
      ></input>
      <select
        value={currency}
        onChange={(e) => onChangeCurrency(e.target.value)}
      >
        {rates.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Converter;
