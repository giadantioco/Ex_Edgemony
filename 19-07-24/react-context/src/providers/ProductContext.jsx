import { useState, createContext } from "react";

export const ProductContext = createContext();
export const SetProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  return (
    <ProductContext.Provider value={{ products }}>
      <SetProductContext.Provider value={{ setProducts }}>
        {children}
      </SetProductContext.Provider>
    </ProductContext.Provider>
  );
}

export default ProductProvider;
