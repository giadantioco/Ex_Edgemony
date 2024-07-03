import styles from "./app.module.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState({
    name: "",
    surname: "",
    email: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInput((prevState) => ({ prevState, [name]: value }));
  };
  return (
    <>
      <form className={styles.form}>
        <div className={styles.container}>
          <h1 className={styles.title}>Contact Us</h1>
          <div className={styles.subcontainer}>
            <div className={styles.nameContainer}>
              <label for="first name">First Name *</label>
              <input
                type="text"
                name="name"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={styles.surnameContainer}>
              <label for="last name">Last Name *</label>
              <input
                type="text"
                name="surname"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className={styles.subcontainer}>
            <label for="email">Email Address *</label>
            <input type="text" name="email" onChange={(e) => handleChange(e)} />
          </div>
          <div className={`${styles.subcontainer} ${styles.thirdContainer}`}>
            <label for="query" className={styles.query}>
              Query Type *
            </label>
            <div className={styles.radioContainerWrapper}>
              <div className={styles.radioContainer}>
                <input type="radio" /> General Enquiry
              </div>
              <div className={styles.radioContainer}>
                <input type="radio" /> Support Request
              </div>
            </div>
          </div>
          <div className={styles.subcontainer}>
            <label for="message">Message *</label>
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className={`${styles.subcontainer} ${styles.checkbox}`}>
            <input type="checkbox" />
            <p>I consent to being contacteed by the team *</p>
          </div>
          <div className={`${styles.subcontainer} ${styles.submit}`}>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <p>{input.name}</p>
      <p>{input.surname}</p>
      <p>{input.email}</p>
    </>
  );
}

export default App;
