import { useState, useEffect } from "react";
// import { Outlet } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cart);
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <p>{item.title}</p>
              {/* <p>{item.description}</p> */}
            </li>
          ))}
        </ul>
      )}
      {/* <Outlet /> */}
    </div>
  );
}

export default Cart;
