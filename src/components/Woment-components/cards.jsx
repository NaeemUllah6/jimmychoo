import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css"; 

const Card = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full bg-neutral-700 border p-4 border-gray-300 rounded-lg shadow-amber-50 overflow-hidden transition-transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[300px] overflow-hidden">
        <img
          src={product.image || "https://via.placeholder.com/300x400"}
          alt={product.title}
          className="w-full h-full object-cover"
        />

        {isHovered && (
          <>
            <button className="absolute top-1/2 left-2 transform -translate-y-1/2 text-[#DFB83B] p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 text-[#DFB83B] p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
              <i className="fas fa-chevron-right"></i>
            </button>
          </>
        )}
      </div>

      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-[#DFB83B]">{product.title}</h3>
        <p className="text-md font-medium text-[#DFB83B]">${product.price}</p>
      </div>

      {isHovered && (
        <div className="absolute top-3 left-3 right-3 flex justify-between">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
            <i className="fas fa-heart text-red-500"></i>
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
            <i className="fas fa-shopping-cart text-[#DFB83B]"></i>
          </button>
        </div>
      )}
    </div>
  );
};

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.data.length === 0) {
          throw new Error("No products found.");
        }
        setProducts(response.data);
      })
      .catch((error) => {
        setError(error.message || "Failed to fetch products.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full mx-auto p-4 shadow-md shadow-amber-100">
      {loading && <p className="text-center text-[#DFB83B]">Loading products...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      
      {!loading && !error && (
        <>
          <p className="text-center text-[#DFB83B] pb-5">
            Total Products: {products.length}
          </p>

          <Link to="/addtoCart">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default ProductGrid;
