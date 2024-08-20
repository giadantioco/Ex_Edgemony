import { useState } from "react";
import Layout from "./components/Layout/Layout";
import Form from "./components/Form/Form";
import ProductList from "./components/ProductList/ProductList";

const initialState = [
  {
    id: self.crypto.randomUUID(),
    category: "Clothes",
    productName: "Body suit",
    description: "0 to 1 month old body suit",
    price: "19.99",
    brand: "Asos",
    availability: "Available",
  },
  {
    id: self.crypto.randomUUID(),
    category: "Personal Care",
    productName: "Stretch marks cream",
    description: "Prevent and reduce stretch marks during maternity",
    price: "14.99",
    brand: "Bio-Oil",
    availability: "Available",
  },
];

const initialInput = {
  category: "",
  productName: "",
  description: "",
  price: "",
  brand: "",
  availability: "",
};

function App() {
  const [products, setProducts] = useState(initialState);
  const [input, setInput] = useState(initialInput);
  const [filter, setFilter] = useState("");

  const formatPrice = (value) => {
    const cleanedValue = value.trim();

    if (!isNaN(cleanedValue) && cleanedValue !== "") {
      const numericValue = parseFloat(cleanedValue);

      if (Number.isInteger(numericValue)) {
        return numericValue.toFixed(2);
      }
      return cleanedValue;
    }

    return "";
  };

  /**
   * Aggiorna lo stato input ogni volta che viene digitato qualcosa negli input della form
   * @param {*} e
   */
  const handleChange = (e) => {
    const { id, value } = e.target;
    const formattedValue = id === "price" ? formatPrice(value) : value;
    setInput((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };

  /**
   * Crea un nuovo prodotto con i dati che vengono presi dagli input della form
   * @param {*} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    const id = self.crypto.randomUUID();
    const category = input.category;
    const productName = input.productName;
    const description = input.description;
    const price = formatPrice(input.price);
    const brand = input.brand;
    const availability = input.availability;
    setProducts([
      ...products,
      {
        id,
        category,
        productName,
        description,
        price,
        brand,
        availability,
      },
    ]);

    setInput(initialInput);
  };

  /**
   * Cancella un articolo dalla lista degli articoli e aggiorna lo stato
   * @param {*} e
   */
  const handleDelete = (e) => {
    const tmpProducts = products.filter(
      (product) => product.id !== e.target.id
    );

    setProducts(tmpProducts);
  };

  /**
   * Aggiorna lo stato che gestisce il filtering
   * @param {*} e
   */
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Layout>
      <Form
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ProductList
        products={products}
        filter={filter}
        handleFilter={handleFilter}
        handleDelete={handleDelete}
      />
    </Layout>
  );
}

export default App;
