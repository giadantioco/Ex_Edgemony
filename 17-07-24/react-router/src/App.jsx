import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 10)));
  }, []);

  // useEffect(() => {
  //   if (!products) return;
  //   localStorage.setItem("user", JSON.stringify(products));
  // }, [products]);

  return (
    <>
      <div>
        <h1>Home</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <p>{product.title}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
