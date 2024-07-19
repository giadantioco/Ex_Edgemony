const ProductDetail = ({ product }) => {
  if (!product) return null;

  console.log(product);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-64 object-cover mb-4"
      />
      <div>
        <p className="text-xl font-bold mb-2">{product.title}</p>
        <p className="text-gray-700">{product.price}.00 €</p>
      </div>
    </div>
  );
};

export default ProductDetail;
