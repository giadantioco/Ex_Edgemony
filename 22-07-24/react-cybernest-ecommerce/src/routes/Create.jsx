import { useState, useEffect } from "react";
import { addItem } from "../api/clientProduct";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();

  const [form, setForm] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    message: "Try again or reload the page",
    isError: false,
  });

  const handleSubmit = async (value) => {
    try {
      setIsLoading(true);
      const res = await addItem(value);
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
            Insert new item
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            item, category, quantity, isbn, description, image
          </p>

          <BookForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Create;
