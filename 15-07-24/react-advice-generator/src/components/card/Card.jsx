// rename css with module (create a js object) styles is a convention, it could be pippo
import React from "react";
import { useState, useEffect } from "react";
import styles from "./card.module.css";
import image from "../../assets/horizontal-line.png";
import icon from "../../assets/dice.svg";
// import advices from "../../../data.json";

const [currentAdvice, setCurrentAdvice] = useState("Loading..");

function Card() {
  // function to get random advice from API
  const getRandomAdvice = async () => {
    try {
      const resp = await fetch("https://api.adviceslip.com/advice");
      const data = await resp.json();
      return data.slip;
    } catch (error) {
      console.log("errore caricamento api", error);
    }
  };

  useEffect(() => {
    setCurrentAdvice();
  });

  // const handleClick = () => {
  //   const newAdvice = getRandomAdvice();
  //   setCurrentAdvice(newAdvice);
  // };

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
