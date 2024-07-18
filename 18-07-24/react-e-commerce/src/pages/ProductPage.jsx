import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  // destructuring del parametro id con use parms, che c permette di andare aprendere le informazioni specificate per visualizzarle nel path
  const { id } = useParams();
  console.log(useParams());

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
    console.log(product);
  }, []);

  return (
    <div>
      {/* la condizione product && product.title va messa sempre perche a primo render product risulta null (come dichiarato nel useState) quindi ci darebbe errore */}
      Ciao sono prodotto id: {id} {product && product.title}
    </div>
  );
}

export default ProductPage;
