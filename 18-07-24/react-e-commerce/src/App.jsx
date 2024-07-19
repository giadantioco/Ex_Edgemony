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
    // console.log(products);
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
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md overflow-hidden">
            <Link to={`product/${product.id}`}>
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-10">
                <p className="text-lg font-bold mb-2">{product.title}</p>
                <p className="text-gray-700">{product.price}.00 €</p>
              </div>
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="block mx-auto mt-2 bg-slate-800 hover:bg-slate-600 text-white text-sm py-2 px-4 rounded-lg focus:outline-none"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
