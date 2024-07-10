import styles from "./Product.module.css";

function Product({ product, onClick }) {
  return (
    <li className={styles.product}>
      {/* <h2>{product.name}</h2> */}
      <p>
        <strong>Categoria:</strong> {product.category}
      </p>
      <p>
        <strong>Descrizione:</strong> {product.description}
      </p>
      <p>
        <strong>Prezzo:</strong> {product.price} €
      </p>
      <p>
        <strong>Marca:</strong> {product.brand}
      </p>
      <p>
        <strong>Disponibilità:</strong> {product.availability}
      </p>
      <button id={product.id} onClick={onClick}>
        Elimina
      </button>
    </li>
  );
}

export default Product;
