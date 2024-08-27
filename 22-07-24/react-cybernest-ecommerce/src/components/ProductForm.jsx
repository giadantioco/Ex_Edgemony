import { useState, useEffect, useRef } from "react";
import DefaultImage from "../assets/defImage.jpg";
import EditIcon from "../assets/icon_edit.svg";

function ProductForm({ form, onChange, onSubmit, onImageChange }) {
  // // console.log(value);
  // const initialState = {
  //   item: value?.item || "",
  //   category: value?.category || "",
  //   quantity: value?.quantity || "",
  //   isbn: value?.isbn || "",
  //   description: value?.description || "",
  // };

  // const [form, setForm] = useState(initialState);
  const [imageURL, setImageURL] = useState(form.image || DefaultImage);

  const fileUploadRef = useRef();

  const handleImageUpload = (e) => {
    e.preventDefault();
    fileUploadRef.current.click();
  };

  const uploadImageDisplay = (e) => {
    const uploadedFile = fileUploadRef.current.files[0];
    const cachedURL = URL.createObjectURL(uploadedFile);
    setImageURL(cachedURL);
    onImageChange(e);
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <form
      onSubmit={onSubmit}
      action="#"
      className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
    >
      {/* add image */}
      <div className="relative w-25 h-48">
        <label htmlFor="image"></label>
        {imageURL && (
          <img
            src={imageURL}
            alt="Default Image"
            className="w-25 h-48 object-cover mt-4"
          />
        )}
        <button
          type="submit"
          onClick={handleImageUpload}
          className="absolute bottom-1 right-15 h-10 w-20 bg-white"
        >
          {" "}
          Upload Picture
          <img src={EditIcon} alt="Edit" className="object-cover bg-black" />
        </button>
        <input
          id="file"
          encType="multipart/form-data"
          type="file"
          name="image"
          ref={fileUploadRef}
          onChange={uploadImageDisplay}
          hidden
        />
      </div>

      {/* add form inputs */}
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
            type="textarea"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter description"
            rows="4"
          />
        </div>
      </div>
      {/* FORM SUBMIT */}
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
