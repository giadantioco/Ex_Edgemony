import { useContext } from "react";
import { SetProductContext, ProductContext } from "./providers/ProductContext";

function App() {
  const { setProducts } = useContext(SetProductContext);
  const { products } = useContext(ProductContext);

  const handleAdd = () => {
    console.log("clicked");
    setProducts(products + 1);
  };

  return (
    <>
      <div>
        <p>product count: {products}</p>
        <button onClick={handleAdd}>Add</button>
      </div>
    </>
  );
}

export default App;
