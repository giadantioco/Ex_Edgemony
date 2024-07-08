// import { useState } from 'react'
import { useState } from "react";
import styles from "./app.module.css";
import classNames from "classnames";

function App() {
  // array of object for page views and prices
  const pageViewsPricing = [
    { views: 10, price: 8, discount: 6 },
    { views: 50, price: 12, discount: 9 },
    { views: 100, price: 16, discount: 12 },
    { views: 500, price: 24, discount: 18 },
    { views: 1000, price: 36, discount: 27 },
  ];
  // state for current rangeinput index
  const [rangeIndex, setRangeIndex] = useState(0);

  // function to handle change of rangeinput
  const handleChange = (e) => {
    const index = e.target.value;
    console.log(index);
    setRangeIndex(index);
  };

  // state to handle toggle
  const [toggle, setToggle] = useState(false); // type checkbox -> boolean
  // function to handle toggle change
  const handleToggleChange = (e) => {
    console.log(e.target.value);
    console.log("ciao");
    console.log(toggle);
    setToggle((prevToggle) => !prevToggle);
  };

  // states to get mouse coordinates
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // function to handle mouse move event and states
  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  // logic for true toggle
  const currentPrice = pageViewsPricing[rangeIndex];
  const displayPrice = toggle ? currentPrice.discount : currentPrice.price;

  return (
    <>
      <div className={styles.mainContainer} onMouseMove={handleMouseMove}>
        <header>
          <h1>Simple, traffic based pricing</h1>
          <h3>Sing-up for our 30-day trial. No credit card required.</h3>
        </header>
        <main className={styles.display}>
          <div className={styles.displayContainer}>
            <div className={styles.content}>
              <p>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "28px",
                    paddingRight: "10px",
                    color: "var(--lilla)",
                  }}
                >
                  {pageViewsPricing[rangeIndex].views}
                </span>
                PAGE VIEWS
              </p>
              <p>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "56px",
                    paddingRight: "10px",
                    color: "var(--lilla)",
                  }}
                >
                  ${displayPrice.toFixed(2)}
                </span>
                /MONTH
              </p>
            </div>
            <div className={styles.content}>
              <input
                className={styles.range}
                type="range"
                min="0"
                max={pageViewsPricing.length - 1}
                // step="1"
                value={rangeIndex}
                onChange={handleChange}
              />
            </div>
            <div className={classNames(styles.content, styles.switchContainer)}>
              <div className={styles.monthly}>
                <p style={{ opacity: toggle ? 0.5 : 1 }}>Monthly Billing</p>
              </div>
              {/* <label className={styles.switch}> */}
              <input
                type="checkbox"
                className={styles.togglesw}
                // value="monthly"
                checked={toggle}
                onChange={handleToggleChange}
              />
              {/* </label> */}
              <div className={styles.yearly}>
                <p style={{ opacity: toggle ? 1 : 0.5 }}>Yearly Billing</p>
                <p style={{ opacity: toggle ? 1 : 0.5 }}>25% discount</p>
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
