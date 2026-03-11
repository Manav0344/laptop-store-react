import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="bg-white dark:bg-black transition-colors duration-300">

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-28">
        <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Ultimate <span className="text-yellow-300">Laptop Store</span>
            </h1>

            <p className="text-lg mb-8 text-gray-200">
              Discover powerful laptops for gaming, development, and work.
              Premium performance with unbeatable prices.
            </p>

            <div className="flex gap-4 flex-wrap">

              <Link
                to="/shop"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:scale-110 hover:shadow-2xl transition duration-300"
              >
                Shop Now
              </Link>

              <Link
                to="/shop"
                className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition duration-300"
              >
                Explore
              </Link>

            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
              alt="Laptop"
              className="rounded-xl shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </section>


      {/* CATEGORY */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Browse Categories
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {["Gaming", "Business", "Student", "Accessories"].map((item) => (
            <div
              key={item}
              className="bg-gray-100 dark:bg-slate-900 p-6 rounded-xl text-center hover:scale-105 hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <h3 className="font-bold text-lg dark:text-white">{item}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore products
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* FEATURED PRODUCTS */}
      <section className="py-16 bg-gray-50 dark:bg-slate-950">
        <div className="container mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div className="hover:scale-105 transition duration-300">
                <ProductCard key={product.id} product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/shop"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 hover:shadow-xl transition duration-300"
            >
              View All Products
            </Link>
          </div>

        </div>
      </section>


      {/* GAMING SECTION */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Next Level Gaming
            </h2>

            <p className="text-gray-300 mb-6">
              Ultra powerful gaming laptops with RTX graphics,
              high refresh displays and blazing fast performance.
            </p>

            <Link
              to="/shop"
              className="bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600 hover:shadow-lg transition"
            >
              Explore Gaming
            </Link>
          </div>

          <img
            src="https://images.unsplash.com/photo-1603302576837-37561b2e2302"
            alt="Gaming Laptop"
            className="rounded-xl shadow-xl hover:scale-105 transition duration-500"
          />

        </div>
      </section>


      {/* BRANDS */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Top Brands
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 text-center text-gray-600 dark:text-gray-400 font-bold text-xl">

          <div className="hover:text-orange-500 transition">Apple</div>
          <div className="hover:text-orange-500 transition">Dell</div>
          <div className="hover:text-orange-500 transition">HP</div>
          <div className="hover:text-orange-500 transition">Lenovo</div>
          <div className="hover:text-orange-500 transition">Asus</div>

        </div>
      </section>


      {/* NEWSLETTER */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white text-center">
        <div className="container mx-auto px-6">

          <h2 className="text-3xl font-bold mb-4">
            Get Latest Laptop Deals
          </h2>

          <p className="mb-8 text-gray-200">
            Subscribe to receive special discounts and offers.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-black w-72"
            />

            <button className="bg-black px-6 py-3 rounded-lg hover:bg-gray-800 hover:scale-105 transition">
              Subscribe
            </button>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;