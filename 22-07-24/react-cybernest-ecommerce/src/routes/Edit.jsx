import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductDetail } from "../api/clientProduct";
import ProductForm from "../components/ProductForm";

function Edit() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isError, setIsError] = useState({ messagge: "", isError: false });
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = async (id) => {
    try {
      const data = await getProductDetail(id);
      setProduct(data);
    } catch (error) {
      console.log(error);
      setIsError((prevState) => {
        return { prevState, message: error.message, isError: true };
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    //prendo il prodotto
    //lo salvo in uno stato
    getProduct(id);
  }, []);

  // genstisce l'invio del form
  const handleSubmit = async (e) => {
    try {
      e.preventDefault(); // previene comportamento form predef
      setIsLoading(true);
      // chiama funzione asinc addItemper aggiungere un nuovo elemento
      const res = await addItem(form); // passa attuale stato del form con i dati inseriti dal'utente come argomento
      console.log(res);
      navigate("/");
    } catch (error) {
      console.log(error);
      setIsError((prevState) => {
        return { ...prevState, message: error.message, isError: true };
      });
    } finally {
      setIsLoading(false);
    }
  };

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

          <ProductForm
            value={product}
            onSubmit={(e) => {
              e.preventDefault();
              console.log(e);
            }}
          ></ProductForm>
        </div>
      </div>
    </div>
  );
}

export default Edit;