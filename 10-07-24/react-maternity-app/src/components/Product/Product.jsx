import styles from "./Product.module.css";
import { labels } from "../../data/labels";

function Product({ product, onClick }) {
  return (
    <li className={styles.product}>
      {/* <h2>{product.name}</h2> */}
      <p>
        <strong>{labels.category}</strong> {product.category}
      </p>
      <p>
        <strong>{labels.productName}</strong> {product.productName}
      </p>
      <p>
        <strong>{labels.description}</strong> {product.description}
      </p>
      <p>
        <strong>{labels.price}</strong> {product.price} €
      </p>
      <p>
        <strong>{labels.brand}</strong> {product.brand}
      </p>
      <p>
        <strong>{labels.availability}</strong> {product.availability}
      </p>
      <button id={product.id} onClick={onClick}>
        {labels.delete}
      </button>
    </li>
  );
}

export default Product;
