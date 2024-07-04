import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState({
    loanAmount: "",
    interestRate: "",
    loanTerm: "",
    mortgageType: "Repayment",
  });

  const [montlyPayment, setMontlyPayment] = useState(" £0.00");

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);
    console.log(value);

    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleMonthlyPayment = (e) => {
    e.preventDefault();
    console.log("ciao");
    const total = input.loanAmount * input.loanTerm;
    setMontlyPayment(total);
  };

  return (
    <>
      <div className="calculator-container">
        <h1>Mortgage Calculator</h1>
        <form className="calculator-form">
          <div className="form-group">
            <label for="loan-amount">Loan Amount</label>
            <input
              required
              type="number"
              id="loan-amount"
              name="loanAmount"
              placeholder="Enter loan amount"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="interest-rate">Interest Rate (%)</label>
            <input
              required
              type="number"
              id="interest-rate"
              name="interestRate"
              step="0.01"
              placeholder="Enter interest rate"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="loan-term">Loan Term (years)</label>
            <input
              required
              type="number"
              id="loan-term"
              placeholder="Enter loan term"
              name="loanTerm"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="mortgage-type" name="mortgageType">
              Mortgage Type
            </label>
            <div className="radio-container">
              <input
                type="radio"
                id="repayment"
                name="mortgageType"
                onChange={handleInputChange}
              />{" "}
              Repayment
            </div>
            <div className="radio-container">
              <input
                type="radio"
                id="interest-only"
                name="repayment"
                onChange={handleInputChange}
              />{" "}
              Interest Only
            </div>
          </div>
          <div className="form-group">
            <button type="submit" onClick={handleMonthlyPayment}>
              Calculate
            </button>
          </div>
        </form>
        <div className="result">
          <p>
            Monthly Payment: <span id="monthly-payment">{montlyPayment}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
