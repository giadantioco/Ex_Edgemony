import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  // destructuring del parametro id con use parms, che c permette di andare aprendere le informazioni specificate per visualizzarle nel path
  const { id } = useParams();
  console.log(useParams());

  const [product, setProduct] = useState(null);
  // 1 per evitare di dover dichiarare tutte le volte 'product && product.title' definiamo un nuovo stato che in fase di caricamento dati verifica se la pagina e' stata caricata
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => {
        console.log(error);
        setIsError(true);
      })
      // 3 cambio il valore dopo il primo render
      .finally(() => setIsLoading(false));
    console.log(product);
  }, []);
  // 2 verifico lo stato
  if (isLoading) return <p>is loading..</p>;

  return (
    <div className="bg-white shadow-md overflow-hidden">
      {!isError ? (
        <>
          {/* La condizione product && product.title va mantenuta per evitare errori a primo render quando product è null */}
          {/* Eliminata la verifica 'product && product.title' */}
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <p className="text-xl font-bold mb-2">{product.title}</p>
            <p className="text-gray-700">{product.price}.00 €</p>
          </div>
        </>
      ) : (
        <p>Page loading error</p>
      )}
    </div>
  );
}

export default ProductPage;
