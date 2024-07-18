import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);

  // pulisci li local storage prima della fetch
  localStorage.clear();

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 10)));
    console.log(products);
  }, []);

  // useEffect per 'loggare' prodotti dopo primo render
  useEffect(() => {
    console.log(products);
  }, [products]);

  //  funzione che aggiunge prodotti al carrello
  const addToCart = (product) => {
    // tentativo di recupero del prodotto corrente dal local storage
    // se il carrello è vuoto restituisce null, ma con || [] evitoche questo accada ed aggiungo l'item all'array
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    // debugging
    console.log(localStorage);
    console.log(localStorage.getItem("cart"));
    console.log(cart);
    // il prodotto selezionato viene aggiunto all'array 'cart'
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <>
      <div>
        <h1>Home</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link className={"font-bold"} to={`product/${product.id}`}>
                <p>{product.title}</p>
                <img src={product.images[0]} alt="" />
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
