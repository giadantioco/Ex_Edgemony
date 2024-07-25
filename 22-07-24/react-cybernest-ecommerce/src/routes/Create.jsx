import { useState, useEffect } from "react";
import { addItem } from "../api/clientProduct";
import { useNavigate } from "react-router-dom";

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
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    message: "Try again or reload the page",
    isError: false,
  });

  const titleValidation = !form.title.length;
  const categoryValidation = !form.category.length;
  const quantityValidation = !form.quantity.length;
  const isbnValidation = !form.isbn.length;
  const descriptionValidation = !form.description.length;
  const imageValidation = !form.image.length;

  const formValidation =
    titleValidation ||
    categoryValidation ||
    quantityValidation ||
    isbnValidation ||
    descriptionValidation ||
    imageValidation;

  // gestisce cambiamento input del form
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prevState) => {
      // restituisce il nuovo stato basato sul precedente
      return {
        ...prevState, // copia tutte le proprietà dello stato precedente
        [name]: value,
      }; // sovrascrive il valore della prop specificata con il nuovo valore
    });
  };

  // effetto che osserva il form ogni volta che cambia
  // useEffect(() => {
  //   console.log(form);
  // }, [form]);

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

    // chiamata POST (in attesa dell'API dal BE)
    // const body = JSON.stringify(form);
    // fetch("", {
    //   method: "POST",
    //   body: body,
    // });
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

          <form
            onSubmit={handleSubmit}
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <div>
              <label className="sr-only">Title</label>

              <div className="relative">
                <input
                  name="title"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter item title"
                />
              </div>
            </div>

            <div>
              <label className="sr-only">Category</label>

              <div className="relative">
                <input
                  name="category"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter category"
                />
              </div>
            </div>

            <div>
              <label className="sr-only">Quantity</label>

              <div className="relative">
                <input
                  name="quantity"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter quantity"
                />
              </div>
            </div>

            <div>
              <label className="sr-only">Isbn</label>

              <div className="relative">
                <input
                  name="isbn"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter isbn"
                />
              </div>
            </div>

            <div>
              <label className="sr-only">Description</label>

              <div className="relative">
                <input
                  name="description"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter description"
                />
              </div>
            </div>

            <div>
              <label className="sr-only">Image</label>

              <div className="relative">
                <input
                  name="image"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Add image"
                />
              </div>
            </div>

            {isError.isError && (
              <div
                role="alert"
                className="rounded border-s-4 border-red-500 bg-red-50 p-4"
              >
                <div className="flex items-center gap-2 text-red-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <strong className="block font-medium">
                    {" "}
                    Something went wrong{" "}
                  </strong>
                </div>

                <p className="mt-2 text-sm text-red-700">{isError.message}</p>
              </div>
            )}

            {!isLoading ? (
              <button
                disabled={formValidation}
                type="submit"
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              >
                Submit
              </button>
            ) : (
              <button disabled> Is loading... </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
