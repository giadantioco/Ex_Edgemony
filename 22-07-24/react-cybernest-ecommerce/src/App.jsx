import { labels } from "./data/labels";
import { useEffect, useState } from "react";
import { getProductList } from "./api/clientProduct";
import { Link } from "react-router-dom";

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
  //  creo funzione per gestire evento
  const handleChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) return <p>Is loading...</p>;

  return (
    <>
      <div className="flex justify-center">
        <main className="w-[1209px] ">
          <div className="p-4">
            <h1 className="">{labels.productList}</h1>
          </div>
          {/* creo filtro */}
          <div className="flex flex-col gap-2 p-2 ">
            <h2>Filter item</h2>
            <input
              className="border-orange-600 border-2 w-[250px] rounded-2xl p-1"
              type="text"
              onChange={handleChange}
              value={filter}
              placeholder="filter by item"
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
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {productList
                  // aggiungo filter al map
                  .filter((product) => product.item.includes(filter))
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
                        <td className="whitespace-nowrap px-4 py-2">
                          <Link
                            to={`/products/${product.id}`}
                            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                          >
                            {labels.productTableBtnView}
                          </Link>
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
