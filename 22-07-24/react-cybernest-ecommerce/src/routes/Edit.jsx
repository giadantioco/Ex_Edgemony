import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductDetail } from "../api/clientProduct";

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
  }, []);

  return <div>Edit {id}</div>;
}

export default Edit;
