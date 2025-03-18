import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import CarouselImage from "../assets/d-hp-box4.webp";

function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false);
  const swiperRef = useRef(null);

  const products = [
    { name: "Product 1", price: "£1,395", image: CarouselImage },
    { name: "Product 2", price: "£595", image: CarouselImage },
    { name: "Product 3", price: "£395", image: CarouselImage },
    { name: "Product 4", price: "£495", image: CarouselImage },
    { name: "Product 5", price: "£185", image: CarouselImage },
    { name: "Product 6", price: "£750", image: CarouselImage },
  ];

  return (
    <div>
      {/* Cart Icon */}
      <i
        className={`hidden md:block fa fa-shopping-cart cursor-pointer transition-colors duration-300 ${
          isOpen ? "text-black" : "text-[#DFB83B]"
        }`}
        onClick={() => setIsOpen(true)}
      ></i>

      <div
        className={`fixed top-0 right-0 h-full max-w-[550px] w-full md:w-[550px] bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-white h-screen">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button onClick={() => setIsOpen(false)} className="text-2xl">
              &times;
            </button>
          </div>

          <div className="flex flex-col justify-center items-center p-6 w-full mx-auto bg-white">
            <h2 className="text-lg font-semibold text-center">
              Your shopping bag is empty.
            </h2>
            <button
              className="px-20 py-3 bg-white border border-black text-black hover:text-white hover:bg-black mt-4"
              onClick={() => setIsOpen(false)}
            >
              Continue Shopping
            </button>
          </div>

          <div className="w-fit pt-5 bg-white">
            <p className="border-b pb-4 font-bold text-black w-full mx-4">
              Especially for you
            </p>
          </div>

          <div className="p-4 relative">
            <Swiper
              ref={swiperRef}
              slidesPerView={5}
              spaceBetween={15}
              freeMode={true}
              navigation={false}
              modules={[FreeMode, Navigation]}
              className="mt-2"
            >
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-[100px] h-[100px] object-cover"
                    />
                    <p className="text-sm font-semibold mt-2">{product.name}</p>
                    <p className="text-sm">{product.price}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-start items-center mt-6 gap-9">
              <button
                className="custom-prev text-black text-sm p-1 cursor-pointer rounded-full"
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
                <i className="fa fa-chevron-left"></i>
              </button>
              <button
                className="custom-next text-black text-sm p-1 cursor-pointer rounded-full"
                onClick={() => swiperRef.current.swiper.slideNext()}
              >
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default ShoppingCart;
