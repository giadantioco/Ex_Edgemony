import React from "react";
import styles from "./Form.module.css";
import { useState } from "react";

function Form({ setSearchPokemon }) {
  // take input value
  const handleChange = (e) => {
    const target = e.target.value;
    console.log(target);
    setSearchPokemon(target);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onClick={handleChange}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="pokemon"
          placeholder="Search Pokemon"
          // pass the function to get the value to input
          onChange={handleChange}
        />
        <button type="submit" className={styles.submit}>
          refresh
        </button>
      </form>
    </div>
  );
}

export { Form };
