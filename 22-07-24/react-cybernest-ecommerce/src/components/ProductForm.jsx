import { useEffect } from "react";

function ProductForm({ form, onChange, onSubmit }) {
  // // console.log(value);
  // const initialState = {
  //   item: value?.item || "",
  //   category: value?.category || "",
  //   quantity: value?.quantity || "",
  //   isbn: value?.isbn || "",
  //   description: value?.description || "",
  // };

  // const [form, setForm] = useState(initialState);

  useEffect(() => {
    console.log(form);
  }, [form]);

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
            name="item"
            value={form.item}
            onChange={onChange}
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter item name"
          />
        </div>
      </div>

      <div>
        <label className="sr-only">Category</label>

        <div className="relative">
          <input
            name="category"
            value={form.category}
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
