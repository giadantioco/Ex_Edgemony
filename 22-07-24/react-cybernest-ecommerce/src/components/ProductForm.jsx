import { useState, useEffect } from "react";

function ProductForm({ value, onSubmit }) {
  console.log(value);
  const initialState = {
    title: value?.title || "",
    category: value?.category || "",
    quantity: value?.quantity || "",
    isbn: value?.isbn || "",
    description: value?.description || "",
  };

  const [form, setForm] = useState(initialState);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setForm({
      title: value?.title || "",
      category: value?.category || "",
      quantity: value?.quantity || "",
      isbn: value?.isbn || "",
      description: value?.description || "",
    });
  }, [value]);

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

  return (
    <form
      onSubmit={onSubmit}
      action="#"
      className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
    >
      <div>
        <label className="sr-only">Title</label>

        <div className="relative">
          <input
            name="title"
            value={form.title}
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
            value={form.category}
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
            value={form.quantity}
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
            value={form.isbn}
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
            value={form.description}
            onChange={handleChange}
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter description"
          />
        </div>
      </div>

      {/* <div>
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
      </div> */}

      <button
        // disabled={formValidation}
        type="submit"
        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        Submit
      </button>
    </form>
  );
}

export default ProductForm;
