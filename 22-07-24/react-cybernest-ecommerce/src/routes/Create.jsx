import { useState } from "react";
import { addItem } from "../api/clientProduct";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ProductForm from "../components/ProductForm";
import { labels } from "../data/labels";

//stato iniziale del form
const initialState = {
  title: "",
  category: "",
  quantity: "",
  isbn: "",
  description: "",
  image: "",
};

function Create() {
  const navigate = useNavigate();

  const [form, setForm] = useState(initialState);
  const [isError, setIsError] = useState({
    message: "Try again or reload the page",
    isError: false,
  });

  // genstisce l'invio del form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addItem(form);
      setForm(initialState);
      console.log(res);
      toast("🦄 Item successfully added!", {
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
      setIsError({ message: "", isError: false });
    } catch (error) {
      console.log(error);
      setIsError({ message: error.message, isError: true });
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            {labels.createInsertNewItem}
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            item, category, quantity, isbn, description, image
          </p>

          <ProductForm onSubmit={handleSubmit} form={form} setForm={setForm} />
          {isError.isError && (
            <div
              role="alert"
              className="rounded border-s-4 border-red-500 bg-red-50 p-4"
            >
              <strong className="block font-medium text-red-800">
                {" "}
                Something went wrong{" "}
              </strong>

              <p className="mt-2 text-sm text-red-700">{isError.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Create;
