import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; 

import product1 from "../../assets/BONBONBCKTEWHUT_000702_FRONT_vg443.webp";
import product2 from "../../assets/BONBONBCKTEWHUT_000702_FRONT_vg443.webp";
import product3 from "../../assets/BONBONBCKTEWHUT_000702_FRONT_vg443.webp";
import product4 from "../../assets/BONBONBCKTEWHUT_000702_FRONT_vg443.webp";
import { Link } from "react-router-dom";

const imagesArray = [product1, product2, product3, product4];

const cardData = Array.from({ length: 52 }, (_, index) => ({
  id: index + 1,
  images: [
    imagesArray[index % imagesArray.length], 
    `https://source.unsplash.com/300x400/?heels,${index}`, 
  ],
  title: `Product ${index + 1}`,
  price: `$${(index + 1) * 10}.00`,
}));

const Card = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden transition-transform "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[300px] overflow-hidden">
        <img
          src={product.images[0]} 
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
        <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
        <p className="text-gray-600 text-md font-medium">{product.price}</p>
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
  return (
   <Link to='/addtoCart'>
    <div className="w-full  mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {cardData.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div></Link>
  );
};

export default ProductGrid;
