import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import OffcanvasImg from "../assets/d-hp-box2.webp";

const SearchOffCanvas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    { name: "Cinch M", price: "£1,395", image: OffcanvasImg },
    { name: "Aella Wedge 60", price: "£595", image: OffcanvasImg },
    { name: "Zip Top Pouch", price: "£395", image: OffcanvasImg },
    { name: "Aciel Sandal", price: "£495", image: OffcanvasImg },
    { name: "Product 5", price: "£185", image: OffcanvasImg },
    { name: "Product 6", price: "£750", image: OffcanvasImg },
    { name: "Cinch M", price: "£1,395", image: OffcanvasImg },
    { name: "Aella Wedge 60", price: "£595", image: OffcanvasImg },
    { name: "Zip Top Pouch", price: "£395", image: OffcanvasImg },
    { name: "Aciel Sandal", price: "£495", image: OffcanvasImg },
    { name: "Product 5", price: "£185", image: OffcanvasImg },
    { name: "Product 6", price: "£750", image: OffcanvasImg },

  ];

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <i className={`fa fa-magnifying-glass ${isScrolled ? "text-[#DFB83B]" : "text-[#DFB83B]"}`}></i>
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-full md:max-w-[450px] bg-neutral-700 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="bg-neutral-800 h-screen">
          <div className="p-4 flex justify-between items-center border-b">
            <input
              type="text"
              placeholder="Search for New Arrivals"
              className="border-none outline-none text-lg w-full p-2"
            />
            <button onClick={() => setIsOpen(false)} className="text-lg">&times;</button>
          </div>

          <div className="p-4">
            <h3 className="font-bold">Trending</h3>
            <ul className="mt-2">
              {["Kitten Heels", "Leopard", "Love", "Trainers", "Pearl Edit"].map((item, index) => (
                <li key={index} className="py-1 cursor-pointer hover:underline">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4">
            <h3 className="font-bold">Popular Products</h3>
            <div className="relative">
              <Swiper
                ref={swiperRef}
                slidesPerView={4}
                spaceBetween={15}
                freeMode={true}
                navigation={false} // Disabled default navigation to prevent double icons
                modules={[FreeMode, Navigation]}
                className="mt-2"
              >
                {products.map((product, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-center text-center">
                      <img src={product.image} alt={product.name} className="w-[100px] h-[100px] object-cover rounded p-2 bg-[#DFB83B]" />
                      <p className="text-sm font-semibold mt-2">{product.name}</p>
                      <p className="text-sm">{product.price}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="flex justify-end items-center mr-4 mt-6 gap-7">
                <button
                  className="custom-prev text-white text-sm p-1 rounded-full cursor-pointer"
                  onClick={() => swiperRef.current.swiper.slidePrev()}
                >
                  <i className="fa fa-chevron-left"></i>
                </button>
                <button
                  className="custom-next text-white text-sm p-1 rounded-full cursor-pointer"
                  onClick={() => swiperRef.current.swiper.slideNext()}
                >
                  <i className="fa fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
};

export default SearchOffCanvas;
