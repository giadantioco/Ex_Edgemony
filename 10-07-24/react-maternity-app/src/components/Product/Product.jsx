import React from "react";

function Product({ product, onClick }) {
  return (
    <li>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price} €</p>
      <p>{product.brand}</p>
      <p>{product.availability}</p>
      <button id={product.id} onClick={onClick}>
        Delete
      </button>
    </li>
  );
}

export default Product;
