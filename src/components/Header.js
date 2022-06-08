import React from "react";

function Header({ rates }) {
  const currentUSD = Math.round(rates.USD * rates.UAH * 100) / 100;
  const currentEUR = Math.round((currentUSD / rates.EUR) * 100) / 100;
  return (
    <header>
      <div className="navbar">
        <h1>.Currency</h1>
        <div className="currency-bar">
          <ul>
            <li>
              USD <span>{currentUSD}</span>
            </li>
            <li>
              EUR <span>{currentEUR}</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
// USD = EUR (1.07 - 1)
export default Header;
