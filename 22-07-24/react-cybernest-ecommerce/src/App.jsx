import { labels } from "./data/labels";
import { useEffect, useState } from "react";
import { getProductList, deleteItem } from "./api/clientProduct";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");

  const getProducts = async () => {
    try {
      const data = await getProductList();
      setProductList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteItem(id);
      console.log(res);
      toast.success(`${res.title} succesfully deleted!`, {
        position: "top-right",
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
          <div className="p-4">
            <h1 className="">{labels.productList}</h1>
          </div>
          {/* creo filtro */}
          <div className="flex flex-col gap-2 p-2 ">
            <h2>{labels.filterItem}</h2>
            <input
              className="border-orange-600 border-2 w-[250px] rounded-2xl p-1"
              type="text"
              onChange={handleChange}
              value={filter}
              placeholder={labels.filterByItem}
            />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.productTableItem}
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

              <tbody className="divide-y divide-gray-200">
                {isLoading
                  ? Array.from({ length: 5 }).map((_, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          <Skeleton width={100} />
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          <Skeleton width={80} />
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          <Skeleton width={50} />
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
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
                        product.item.toLowerCase().includes(filter)
                      )
                      .map((product) => {
                        return (
                          <tr key={product.id}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                              {product.item}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                              {product.category}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                              {product.quantity}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                              {product.isbn}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 flex gap-2">
                              <Link
                                to={`/edit/${product.id}`}
                                className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
                              >
                                {labels.productTableBtnEdit}
                              </Link>

                              <Link
                                to={`/products/${product.id}`}
                                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                              >
                                {labels.productTableBtnView}
                              </Link>

                              <button
                                onClick={() => handleDelete(product.id)}
                                className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                              >
                                {labels.productTableBtnDelete}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
