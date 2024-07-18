import { useParams } from "react-router-dom";

function ProductPage() {
  // destructuring del parametro id
  const { id } = useParams();
  console.log(useParams());
  return <div>Ciao sono page id: {id}</div>;
}

export default ProductPage;
