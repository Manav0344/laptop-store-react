import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <span className="text-xs text-gray-500 uppercase">{product.category}</span>
          <h3 className="text-lg font-semibold mt-1">{product.name}</h3>
          <p className="text-blue-600 font-bold mt-2">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;