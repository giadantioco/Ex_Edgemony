import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import { labels } from "../../data/labels";

function Form({ input, handleChange, handleSubmit }) {
  const isFormValid = () => {
    return (
      input.category &&
      input.productName &&
      input.description &&
      input.price &&
      input.brand &&
      input.availability
    );
  };

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    setIsSubmitDisabled(!isFormValid());
  }, [input]);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>{labels.category}</label>
      <select id="category" value={input.category} onChange={handleChange}>
        <option value="">{labels.optCategory}</option>
        <option value="Clothes">{labels.optClothes}</option>
        <option value="Personal Care">{labels.optPersonalCare}</option>
        <option value="Baby Care">{labels.optBabyCare}</option>
        <option value="Breast Feeding">{labels.optBreastfeeding}</option>
        <option value="Equipment">{labels.optEquipment}</option>
        <option value="Toys">{labels.optToys}</option>
      </select>

      <label>{labels.productName}</label>
      <input
        id="productName"
        placeholder={labels.addProductName}
        value={input.productName}
        onChange={handleChange}
      />

      <label>{labels.description}</label>
      <textarea
        id="description"
        placeholder={labels.addDescription}
        value={input.description}
        onChange={handleChange}
      />

      <label>{labels.price}</label>
      <input
        id="price"
        placeholder={labels.addPrice}
        value={input.price}
        onChange={handleChange}
      />

      <label>{labels.brand}</label>
      <input
        id="brand"
        placeholder={labels.addBrand}
        value={input.brand}
        onChange={handleChange}
      />

      <label>{labels.availability}</label>
      <select
        id="availability"
        value={input.availability}
        onChange={handleChange}
      >
        <option value="">{labels.addAvailability}</option>
        <option value="Available">{labels.optAvailable}</option>
        <option value="Not Available">{labels.optNotAvailable}</option>
      </select>

      <button type="submit" disabled={isSubmitDisabled}>
        {labels.submit}
      </button>
    </form>
  );
}

export default Form;
