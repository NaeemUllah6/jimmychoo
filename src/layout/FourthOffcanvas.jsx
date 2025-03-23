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
      <div
        className={`cursor-pointer transition-colors duration-300 ${
          isOpen ? "text-[#DFB83B]" : "text-[#DFB83B]"
        }`}
        onClick={() => setIsOpen(true)}
      >
        <svg className={`${isOpen ? "!text-[#DFB83B]" : "!text-[#DFB83B]"}`} width="30" height="30" viewBox="0 0 24 24" fill="none" version="1.1" id="svg4">
  <defs id="defs8"></defs>
  <path fillRule="evenodd" clipRule="evenodd" d="m 9.06043,8.51081 v 1.82314 h 1 V 8.51081 h 3.874 v 1.82834 h 1 V 8.51081 h 1.2234 l 0.4672,9.30154 H 7.37496 L 7.84214,8.51081 Z m 5.7555,-1 h 1.8174 0.4756 l 0.0238,0.47491 0.5174,10.30153 0.0264,0.5251 H 17.15083 6.84922 6.32347 L 6.34984,18.28725 6.86725,7.98572 6.8911,7.51081 H 7.36662 9.15093 C 9.20913,7.26858 9.30615,6.96604 9.46835,6.65942 9.85454,5.92933 10.61263,5.18765 11.98703,5.18765 c 1.3863,0 2.1466,0.78446 2.5321,1.53709 0.1426,0.27829 0.2358,0.55333 0.2968,0.78607 z m -1.0452,0 c -0.0383,-0.10772 -0.0849,-0.21942 -0.1416,-0.33014 -0.2625,-0.51242 -0.7259,-0.99302 -1.6421,-0.99302 -0.928,0 -1.3832,0.46388 -1.6347,0.93935 -0.0685,0.12947 -0.1216,0.26042 -0.1625,0.38381 z" fill="#DFB83B" id="path2"></path>
</svg>
      </div>

      <div
        className={`fixed top-0 right-0 h-full max-w-[550px] w-full md:w-[550px] bg-neutal-600 shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-neutral-800 h-screen">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button onClick={() => setIsOpen(false)} className="text-2xl">
              &times;
            </button>
          </div>

          <div className="flex flex-col justify-center items-center p-6 w-full mx-auto bg-neutral-800">
            <h2 className="text-lg font-semibold text-center">
              Your shopping bag is empty.
            </h2>
            <button
              className="px-20 py-3 bg-[#DFB83B] border border-black text-white hover:text-white hover:bg-black mt-4"
              onClick={() => setIsOpen(false)}
            >
              Continue Shopping
            </button>
          </div>

          <div className="w-fit pt-5 bg-neutral-800">
            <p className="border-b pb-4 font-bold text-[#DFB83B] w-full mx-4">
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
                className="custom-prev text-white text-sm p-1 cursor-pointer rounded-full"
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
                <i className="fa fa-chevron-left"></i>
              </button>
              <button
                className="custom-next text-white text-sm p-1 cursor-pointer rounded-full"
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
