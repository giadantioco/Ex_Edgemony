import { useState, useEffect, useRef } from "react";
import DefaultImage from "../assets/defImage.jpg";
import EditIcon from "../assets/icon_edit.svg";

function ProductForm({ form, onChange, onSubmit, onUpload }) {
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

  const uploadImageDisplay = async (e) => {
    try {
      const uploadedFile = e.target.files[0];
      if (!uploadedFile) return;
      const imageUrl = URL.createObjectURL(uploadedFile);
      setImageURL(imageUrl);
      onUpload(uploadedFile);
    } catch (error) {
      console.log("Image upload failed", error);
    }
  };

  useEffect(() => {
    console.log(form);
    setImageURL(form.image || DefaultImage);
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
            name="title"
            value={form.title}
            onChange={onChange}
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter title"
          />
        </div>
      </div>

      <div>
        <label className="sr-only">Category</label>

        <div className="relative">
          <input
            name="categoryName"
            value={form.category}
            onChange={onChange}
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter category"
          />
        </div>
      </div>

      <div>
        <label className="sr-only">Price</label>

        <div className="relative">
          <input
            name="price"
            value={form.price}
            onChange={onChange}
            type="number"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter price"
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
