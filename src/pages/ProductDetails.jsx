import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div className="text-center py-20 text-gray-800 dark:text-white">Product not found</div>;

  return (
    <div className="container mx-auto py-12 px-4 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <Link to="/shop" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Shop
      </Link>
      
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8 transition-colors duration-300">
        <div className="md:w-1/2">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full rounded-lg shadow-md" 
          />
        </div>
        
        <div className="md:w-1/2 flex flex-col justify-center">
          <span className="text-blue-500 font-semibold uppercase tracking-wide">
            {product.category}
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-4 text-gray-800 dark:text-white">{product.name}</h1>
          <p className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">${product.price}</p>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {product.description} This is a premium device designed for high performance. 
            It features the latest technology to ensure you stay ahead of the curve.
          </p>
          
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition w-fit">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;