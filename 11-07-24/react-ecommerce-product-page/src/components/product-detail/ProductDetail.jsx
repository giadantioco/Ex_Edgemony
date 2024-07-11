import React from "react";
import classNames from "classnames";
import styles from "./ProductDetail.module.css";
import Button from "../button/Button";
import Counter from "../counter/Counter";

function ProductDetail() {
  return (
    <div className={classNames(styles.productDetail)}>
      <h1>Fall Limited Edition Sneakers</h1>
      <h4>SNEAKER COMPANY</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo,
        enim similique reprehenderit repellendus dolore necessitatibus facere
        neque ratione odio sit pariatur consequuntur.
      </p>
      <p>$125.00</p>
      <div className={classNames(styles.actions)}>
        <Counter />
        <Button>{/* <IconCart fill="#000" /> */}</Button>
      </div>
    </div>
  );
}

export default ProductDetail;
