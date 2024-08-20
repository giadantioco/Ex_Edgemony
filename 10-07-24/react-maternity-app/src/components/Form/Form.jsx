import styles from "./Form.module.css";
import { labels } from "../../data/labels";

function Form({ input, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>{labels.category}</label>
      <select id="category" value={input.category} onChange={handleChange}>
        <option value="">{labels.optCategory}</option>
        <option value="abbigliamento">{labels.optClothes}</option>
        <option value="cura-personale">{labels.optPersonalCare}</option>
        <option value="igiene">{labels.optBabyCare}</option>
        <option value="allattamento">{labels.optBreastfeeding}</option>
        <option value="attrezzature">{labels.optEquipment}</option>
        <option value="giocattoli">{labels.optToys}</option>
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
        <option value="disponibile">{labels.optAvailable}</option>
        <option value="non-disponibile">{labels.optNotAvailable}</option>
      </select>

      <button type="submit">{labels.submit}</button>
    </form>
  );
}

export default Form;
