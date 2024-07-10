import Product from "../Product/Product";
import styles from "./ProductList.module.css";

function ProductList({ products, filter, handleFilter, handleDelete }) {
  return (
    <div className={styles.productList}>
      <input
        placeholder="Filtra per categoria"
        value={filter}
        onChange={handleFilter}
        className={styles.filterInput}
      />

      <ul>
        {products
          .filter((product) => product.category.includes(filter))
          .map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                onClick={handleDelete}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default ProductList;
