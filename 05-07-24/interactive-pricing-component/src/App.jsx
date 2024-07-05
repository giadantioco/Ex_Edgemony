// import { useState } from 'react'
import { useState } from "react";
import styles from "./app.module.css";

function App() {
  // array of object for page views and prices
  const pageViewsPricing = [
    { views: 10, price: 8 },
    { views: 50, price: 12 },
    { views: 100, price: 16 },
    { views: 500, price: 24 },
    { views: 1000, price: 36 },
  ];
  // state for current rangeinput index
  const [rangeInput, setRangeInput] = useState(0);

  // function to handle change of rangeinput
  const handleChange = (e) => {
    const index = e.target.value;
    setRangeInput(index);
  };

  return (
    <>
      <header>
        <h1>Simple, traffic based pricing</h1>
        <h3>Sing-up for our 30-day trial. No credit card required.</h3>
      </header>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <p>
            <span>{pageViewsPricing[rangeInput].views}</span>
            PAGE VIEWS
          </p>
          <p>
            <span>${pageViewsPricing[rangeInput].price}</span>
            /month
          </p>
        </div>
        <div className={styles.container}>
          <input
            type="range"
            min="0"
            max={pageViewsPricing.length - 1}
            // step="1"
            value={rangeInput}
            onChange={handleChange}
          />
        </div>
        <div className={styles.container}>
          <p>Monthly Billing</p>
          <label className="switch">
            <input type="radio" />
            <span className="slider round"></span>
          </label>
          <p>Yearly Billing</p>
        </div>
      </div>
    </>
  );
}

export default App;
