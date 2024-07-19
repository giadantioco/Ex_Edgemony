import { useState, useEffect } from "react";
import Modal from "./Modal";
import ProductDetail from "./ProductDetail";

function Cart() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cart);
  }, []);

  const openModal = (id) => {
    setIsLoading(true);
    setIsError(false);

    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedProduct(data);
        setIsLoading(false);
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      });
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
              <p className="text-lg font-bold mb-2">{item.title}</p>
              <button
                onClick={() => openModal(item.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                View Details
              </button>
            </li>
          ))}
        </ul>
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Page loading error</p>}
        {selectedProduct && <ProductDetail product={selectedProduct} />}
      </Modal>
    </div>
  );
}

export default Cart;
