// rename css with module (create a js object) styles is a convention, it could be pippo
import React from "react";
import { useState } from "react";
import styles from "./card.module.css";
import image from "../../assets/horizontal-line.png";
import icon from "../../assets/dice.svg";
import advices from "../../../data.json";

function Card() {
  // function to get random advice
  const getRandomAdvice = () => {
    const randomIndex = Math.floor(Math.random() * advices.length); // advices.length takes array length

    return advices[randomIndex];
  };
  // destructuring after, to use getRandomValue as default state
  const [currentAdvice, setCurrentAdvice] = useState(getRandomAdvice);

  //function to pass getRandomAdvice to SetCurrentAdvice
  const handleClick = () => {
    const newAdvice = getRandomAdvice();
    setCurrentAdvice(newAdvice);
  };

  // pass the object style to classname and create an unique id class
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>ADVICE #{currentAdvice.id}</h1>
      <p className={styles.advice}>{currentAdvice.advice}</p>
      <div>
        <img className={styles.img} src={image} alt="horizontal line" />
      </div>
      <div className={styles.btn} onClick={handleClick}>
        <img src={icon} alt="dice icon" />
      </div>
    </div>
  );
}

export default Card;
