// import { useState } from 'react'
import { useState } from "react";
import styles from "./app.module.css";
import classNames from "classnames";

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
      <div className={styles.mainContainer}>
        <header>
          <h1>Simple, traffic based pricing</h1>
          <h3>Sing-up for our 30-day trial. No credit card required.</h3>
        </header>
        <main className={styles.display}>
          <div className={styles.displayContainer}>
            <div className={styles.content}>
              <p>
                <span>{pageViewsPricing[rangeInput].views}</span>
                PAGE VIEWS
              </p>
              <p>
                <span>${pageViewsPricing[rangeInput].price}</span>
                /month
              </p>
            </div>
            <div className={styles.content}>
              <input
                className={styles.range}
                type="range"
                min="0"
                max={pageViewsPricing.length - 1}
                // step="1"
                value={rangeInput}
                onChange={handleChange}
              />
            </div>
            <div className={classNames(styles.content, styles.switchContainer)}>
              <p>Monthly Billing</p>
              <label className={styles.switch}>
                <input type="radio" />
                <span className="slider round"></span>
              </label>
              <div className={styles.discount}>
                <p>Yearly Billing</p>
                <p>25% discount</p>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <button className={styles.ctaBtn}>SUBSCRIBE NOW</button>
        </footer>
      </div>
    </>
  );
}

export default App;
