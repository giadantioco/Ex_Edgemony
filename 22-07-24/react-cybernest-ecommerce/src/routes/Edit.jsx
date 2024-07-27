import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductDetail, addItem } from "../api/clientProduct";
import ProductForm from "../components/ProductForm";

function Edit() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [isError, setIsError] = useState({ messagge: "", isError: false });
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = async (id) => {
    try {
      const data = await getProductDetail(id);
      setProduct(data);
    } catch (error) {
      console.log(error);
      setIsError({ message: error.message, isError: true });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    //prendo il prodotto
    //lo salvo in uno stato
    getProduct(id);
  }, [id]);

  // genstisce l'invio del form
  const handleSubmit = async (e) => {
    e.preventDefault(); // previene comportamento form predef
    try {
      setIsLoading(true);
      const formData = new FormData(e.target);
      const updatedProduct = Object.fromEntries(formData.entries());
      await addItem(updatedProduct);
      navigate("/");
      console.log("pippo");
    } catch (error) {
      console.log(error);
      setIsError({ message: error.message, isError: true });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError.isError) {
    return <div>Error: {isError.message}</div>;
  }

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Edit item
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            item, category, quantity, isbn, description, image
          </p>

          <ProductForm value={product} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Edit;
