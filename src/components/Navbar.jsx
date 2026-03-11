// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white p-4 sticky top-0 z-50 shadow-lg transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          TechStore
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/shop" className="hover:text-blue-500 transition">Shop</Link>
          <Link to="/cart" className="hover:text-blue-500 transition">Cart (0)</Link>
          
          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;