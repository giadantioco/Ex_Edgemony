import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import { labels } from "../../data/labels";

function Form({ input, handleChange, handleSubmit }) {
  const capitalizeFirstLetter = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const onInputChange = (e) => {
    const { id, value } = e.target;
    const capitalisedValue = capitalizeFirstLetter(value);
    handleChange({ target: { id, value: capitalisedValue } });
  };

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
      <select id="category" value={input.category} onChange={onInputChange}>
        <option value="">{labels.optCategory}</option>
        <option value="Clothes">{labels.optClothes}</option>
        <option value="Personalcare">{labels.optPersonalCare}</option>
        <option value="Babycare">{labels.optBabyCare}</option>
        <option value="Breastcfeeding">{labels.optBreastfeeding}</option>
        <option value="Equipment">{labels.optEquipment}</option>
        <option value="Toys">{labels.optToys}</option>
      </select>

      <label>{labels.productName}</label>
      <input
        id="productName"
        placeholder={labels.addProductName}
        value={input.productName}
        onChange={onInputChange}
      />

      <label>{labels.description}</label>
      <textarea
        id="description"
        placeholder={labels.addDescription}
        value={input.description}
        onChange={onInputChange}
      />

      <label>{labels.price}</label>
      <input
        id="price"
        type="number"
        placeholder={labels.addPrice}
        value={input.price}
        onChange={onInputChange}
      />

      <label>{labels.brand}</label>
      <input
        id="brand"
        placeholder={labels.addBrand}
        value={input.brand}
        onChange={onInputChange}
      />

      <label>{labels.availability}</label>
      <select
        id="availability"
        value={input.availability}
        onChange={onInputChange}
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
