import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="container mx-auto py-12 px-4 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">Shopping Cart</h1>
      
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 transition-colors duration-300">
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400 mb-4">Your cart is currently empty.</p>
          <Link 
            to="/shop" 
            className="text-blue-500 hover:underline font-bold"
          >
            Continue Shopping →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;