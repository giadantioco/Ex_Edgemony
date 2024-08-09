import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductDetail, editItem } from "../api/clientProduct";
import ProductForm from "../components/ProductForm";
import { toast } from "react-toastify";

function Edit() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [isError, setIsError] = useState({ message: "", isError: false });
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = async (id) => {
    try {
      const data = await getProductDetail(id);
      setForm(data);
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
    getProduct(id);
  }, [id]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      const res = await editItem(id, form);

      console.log(res);
      toast("🦄 Item successfully edited!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      setIsError(() => {
        return { message: error.message, isError: true };
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
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

          <ProductForm
            form={form}
            onSubmit={handleSubmit}
            onChange={handleChange}
          ></ProductForm>
        </div>
      </div>
    </div>
  );
}

export default Edit;
