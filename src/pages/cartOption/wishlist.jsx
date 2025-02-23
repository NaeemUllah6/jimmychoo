"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import carsouselImg from '../../assets/d-hp-box2.webp'
import { Link } from "react-router-dom";

const items = [
  { id: 1, name: "Diamond Maxi F II", price: "£1,125", image: carsouselImg },
  { id: 2, name: "Staz Sling Back 70", price: "£775", image: carsouselImg },
  { id: 3, name: "Sacora 100", price: "£1,495", image: carsouselImg },
  { id: 4, name: "Bon Bon", price: "£3,550", image: carsouselImg },
  { id: 4, name: "Bon Bon", price: "£3,550", image: carsouselImg },
  { id: 4, name: "Bon Bon", price: "£3,550", image: carsouselImg },
  { id: 4, name: "Bon Bon", price: "£3,550", image: carsouselImg },
  { id: 4, name: "Bon Bon", price: "£3,550", image: carsouselImg },
  { id: 4, name: "Bon Bon", price: "£3,550", image: carsouselImg },
  { id: 4, name: "Bon Bon", price: "£3,550", image: carsouselImg },
  { id: 4, name: "Bon Bon", price: "£3,550", image: carsouselImg },
  { id: 4, name: "Bon Bon", price: "£3,550", image: carsouselImg },
  { id: 4, name: "Bon Bon", price: "£3,550", image: carsouselImg },
  { id: 4, name: "Bon Bon", price: "£3,550", image: carsouselImg },
  { id: 4, name: "Bon Bon", price: "£3,550", image: carsouselImg },

];

export default function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (

    <div className="bg-gray-50 pt-[150px]">
      <div className="w-full max-w-7xl whitespace-nowrap flex-wrap  mx-auto  mb-10 px-4">
        <div className="bg-white w-full py-6 mb-6">
          <div className="flex flex-wrap gap-2 m-w-[1000px] justify-center mx-auto" >
            <Link to="/login" className="font-bold underline" >Register</Link>
            <p>or</p>
            <Link to="/login" className="font-bold underline" >Sign In</Link>
            <p>To save items for more than 60 days</p>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold">Wishlist</p>
        </div>
        <div className="my-6">
          <div className="flex flex-col flex-wrap whitespace-nowrap items-center justify-center">
            <p>Your Wishlist items Will be saved here</p>
            <div className="flex gap-3">
              <button className="border border-black px-7  py-2 mt-5 hover:text-white hover:bg-black">SHOP WOMENS</button>
              <button className="border border-black px-7 py-2  mt-5 hover:text-white hover:bg-black">SHOP MENS</button>
            </div>
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-2">You may also like</h2>
        <div className="w-[20%] border-t-[2px] border-black mb-6"></div>

        <div className="relative">
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            loop={false}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            modules={[Navigation]}
            className="w-full"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 25 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
              1280: { slidesPerView: 5, spaceBetween: 35 },
            }}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-full h-[350px] flex items-center justify-center">
                    <img src={item.image} alt={item.name} className="w-auto h-full object-contain" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="prev-btn absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-200 transition"
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            className="next-btn absolute right-[-30px] top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-200 transition"
            onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        <div className="relative mt-6 w-full h-[2px] bg-gray-300">
          <div
            className="absolute top-0 left-0 h-full bg-black transition-all duration-300"
            style={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
