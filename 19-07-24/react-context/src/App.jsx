import { useEffect, useState, useContext } from "react";
import { SetProductContext } from "./providers/ProductContext";

function App() {
  const [productList, setProductList] = useState([]);
  const { setProducts } = useContext(SetProductContext);
  // const { products } = useContext(ProductContext);

  const handleAdd = (product) => {
    console.log("clicked");
    // setProducts(products + 1);
    setProducts((prevState) => [...prevState, product]);
  };

  useEffect(() => {
    // fetch al nostro fake server url
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, []);

  return (
    <>
      <div>
        <ul className="flex gap-10 min-h-screen">
          {productList.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>{product.price},00 €</p>
              <button
                className="bg-yellow-400 p-2 rounded"
                onClick={() => handleAdd(product)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
