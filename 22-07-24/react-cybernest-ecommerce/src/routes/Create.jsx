import { useState } from "react";
// import { addItem } from "../api/clientProduct";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ProductForm from "../components/ProductForm";
import { labels } from "../data/labels";

//stato iniziale del form
const initialState = {
  title: "",
  categoryName: "",
  price: "",
  description: "",
  imageURL: "",
};

function Create() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    message: "Try again or reload the page",
    isError: false,
  });

  // genstisce l'invio del form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      let imageUrl = form.imageURL;
      if (typeof form.imageURL === "object") {
        imageUrl = await uploadImage(form.imageURL);
      }

      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("price", parseFloat(form.price));
      formData.append("description", form.description);
      formData.append("categoryId", parseInt(form.categoryName, 10));
      formData.append("images", form.imageURL); // Append the image URL

      const response = await fetch("https://api.escuelajs.co/api/v1/products", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error Data:", errorData);
        throw new Error("Failed to add item");
      }

      const res = await addItem(formData);
      console.log("response-data:", res);
      setForm(initialState);

      toast.success(`${form.title} added successfully!`, {
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
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     setForm((prevState) => ({
  //       ...prevState,
  //       image: imageUrl,
  //     }));
  //   }
  // };

  const handleImageUpload = (file) => {
    const imageUrl = URL.createObjectURL(file);
    setForm((prev) => ({ ...prev, imageURL: imageUrl }));
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            {labels.createInsertNewItem}
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            title, category-name, price, description and category-image
          </p>

          <ProductForm
            form={form}
            onSubmit={handleSubmit}
            onChange={handleChange}
            onUpload={handleImageUpload}
          />

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
