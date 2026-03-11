import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = () => {
  return (
    <div className="container mx-auto py-12 px-4 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">All Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;