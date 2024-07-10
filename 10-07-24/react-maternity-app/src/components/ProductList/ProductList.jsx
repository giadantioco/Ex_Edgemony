import Product from "../Product/Product";

function ProductList({ products, filter, handleFilter, handleDelete }) {
  return (
    <div>
      <input
        placeholder="Filtra per categoria"
        value={filter}
        onChange={handleFilter}
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
