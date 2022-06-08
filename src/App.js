import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Converter from "./components/Converter";

import Header from "./components/Header";

function App() {
  const [rates, setRates] = useState([]);
  const [amountTo, setAmountTo] = useState();
  const [amountFrom, setAmountFrom] = useState();
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [currencyFrom, setCurrencyFrom] = useState("EUR");
  const currentRates = Object.keys(rates).filter(rate => rate === 'UAH' || rate === 'EUR' || rate === 'USD' || rate === 'PLN');

  useEffect(() => {
    axios
      .get(
        "https://v6.exchangerate-api.com/v6/9506ad0383b010b50fca3d99/latest/USD"
      )
      .then((response) => {
        setRates(response.data.conversion_rates)
      });
  }, []);

  const handleAmountTo = (amountTo) => {
    setAmountFrom(format((amountTo * rates[currencyFrom]) / rates[currencyTo]));
    setAmountTo(amountTo);
  };

  const handleCurrencyTo = (currencyTo) => {
    setAmountFrom(format((amountTo * rates[currencyFrom]) / rates[currencyTo]));
    setCurrencyTo(currencyTo);
  };

  const handleAmountFrom = (amountFrom) => {
    setAmountTo(format((amountFrom * rates[currencyTo]) / rates[currencyFrom]));
    setAmountFrom(amountFrom);
  };

  const handleCurrencyFrom = (currencyFrom) => {
    setAmountTo(format((amountFrom * rates[currencyTo]) / rates[currencyFrom]));
    setCurrencyFrom(currencyFrom);
  };

  const format = (number) => {
    return number.toFixed(2);
  };

  return (
    <div className="main">
      <Header rates={rates} />
      <div className="container">
        <h2>Currency Converter</h2>
        <Converter
          rates={currentRates}
          amount={amountTo}
          currency={currencyTo}
          onChangeAmount={handleAmountTo}
          onChangeCurrency={handleCurrencyTo}
        />
        <Converter
          rates={currentRates}
          amount={amountFrom}
          currency={currencyFrom}
          onChangeAmount={handleAmountFrom}
          onChangeCurrency={handleCurrencyFrom}
        />
      </div>
    </div>
  );
}

export default App;
