import { useState } from "react";
import { addItem } from "../api/clientProduct";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ProductForm from "../components/ProductForm";
import { labels } from "../data/labels";

//stato iniziale del form
const initialState = {
  title: "New Product",
  price: 10,
  description: "A description",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
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
      // const formData = new FormData();

      // formData.append("id", self.crypto.randomUUID());

      // formData.append("image", form.image);

      // for (const key in form) {
      //   if (key !== "image") {
      //     formData.append(key, form[key]);
      //   }
      // }

      const formData = new FormData();

      formData.append("id", self.crypto.randomUUID());

      if (form.imageFile) {
        formData.append("image", form.imageFile);
      } else if (form.imageURL) {
        formData.append("imageURL", form.imageURL);
      }

      for (const key in form) {
        if (key !== "imgeFile" && key !== "imageUrl") {
          formData.append(key, form[key]);
        }
      }

      const res = await addItem(form);
      console.log("response-data:", res);
      setForm(initialState);

      toast.success(`${form.item} added to cart!`, {
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prevState) => ({
        ...prevState,
        image: file,
      }));
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

          <ProductForm
            form={form}
            onSubmit={handleSubmit}
            onChange={handleChange}
            onImageChange={handleImageChange}
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
