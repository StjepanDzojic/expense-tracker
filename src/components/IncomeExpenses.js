import React from "react";

const IncomeExpenses = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h3>Income</h3>
        <p id="money-plus" className="money plus">
          +0.00
        </p>
      </div>
      <div>
        <h3>Expenses</h3>
        <p id="money-minus" className="money minus">
          -0.00
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
