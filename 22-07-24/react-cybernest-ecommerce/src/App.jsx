import "./app.css";
import { labels } from "./data/labels";
import { useEffect, useState } from "react";
import { getProductList, deleteItem } from "./api/clientProduct";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");

  const getProducts = async () => {
    try {
      const data = await getProductList();
      console.log(data);
      setProductList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFilter(e.target.value.toLowerCase() || "");
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteItem(id);

      console.log("item deleted: ", res);
      toast.success(`${res.item} succesfully deleted!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setIsLoading(true);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <main className="w-[1209px] ">
          <div className="p-20">
            <h1 className="text-center text-[70px] p-4 text-gray-600">
              {labels.productList}
            </h1>
          </div>
          {/* filter start */}
          <div className="flex flex-row items-center gap-5 p-2 ">
            <h2>{labels.filterItem}</h2>
            <input
              className="bg-gray-200 border-none w-[250px] p-2 placeholder-gray-500 placeholder-font-syne"
              type="text"
              onChange={handleChange}
              value={filter}
              placeholder={labels.filterByItem}
            />
          </div>
          {/* filter end */}
          {/* table start */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm font-syne">
              <thead className="text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.productTableItem}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.productTableEmpty}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.productTableCategory}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.productTableQuantity}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.productTableIsbn}
                  </th>
                </tr>
              </thead>
              {/* table content */}
              <tbody className="divide-y divide-gray-200">
                {isLoading
                  ? Array.from({ length: 6 }).map((_, index) => (
                      <tr key={index}>
                        {/* <td className="whitespace-nowrap px-4 py-2  text-gray-900">
                          <Skeleton width={50} />
                        </td> */}
                        <td className="whitespace-nowrap px-4 py-2  text-gray-900">
                          <Skeleton width={100} />
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                          <Skeleton width={80} />
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                          <Skeleton width={50} />
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                          <Skeleton width={100} />
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 flex gap-2">
                          <Skeleton width={60} height={30} />
                          <Skeleton width={60} height={30} />
                          <Skeleton width={60} height={30} />
                        </td>
                      </tr>
                    ))
                  : productList
                      .filter((product) =>
                        (product.item || "")
                          .toLowerCase()
                          .includes(filter?.toLowerCase())
                      )
                      .map((product) => {
                        return (
                          <tr key={product.id}>
                            <td className="whitespace-nowrap px-4 py-2 font-large text-gray-900">
                              <img
                                src={product.image}
                                alt={product.item}
                                className="w-12 h-12 object-cover rounded-lg"
                              />
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                              {product.item}
                            </td>
                            <td
                              className="whitespace-nowrap px-4 py-2 
                            font-medium text-gray-700"
                            >
                              {product.category}
                            </td>
                            <td
                              className="whitespace-nowrap px-4 py-2 
                            font-medium text-gray-700"
                            >
                              {product.quantity}
                            </td>
                            <td
                              className="whitespace-nowrap px-4 py-2 
                            font-medium text-gray-700"
                            >
                              {product.isbn}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 flex gap-2">
                              <Link
                                to={`/edit/${product.id}`}
                                className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
                              >
                                {labels.productTableBtnEdit}
                                <i className="fa-solid fa-pen ml-2 "></i>
                              </Link>

                              <Link
                                to={`/products/${product.id}`}
                                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                              >
                                {labels.productTableBtnView}
                                <i className="fa-solid fa-eye ml-2 "></i>
                              </Link>

                              <button
                                onClick={() => handleDelete(product.id)}
                                className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                              >
                                {labels.productTableBtnDelete}
                                <i className="fa-solid fa-trash-can ml-2 "></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
              </tbody>
            </table>
            {/* table end */}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
