import { useState } from "react";
import CarouselImage from "../assets/d-hp-box4.webp";
function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <i
        className={`hidden md:block fa fa-shopping-cart cursor-pointer transition-colors duration-300 ${
          isOpen ? "text-black" : "text-[#DFB83B]"
        }`}
        onClick={() => setIsOpen(true)}
      ></i>

      <div
        className={`fixed top-0 flex flex-col  w-full right-0 h-full max-w-[550px] bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center p-6">
          <button onClick={() => setIsOpen(false)} className="text-xl">&times;</button>
        </div>

        <div className=" flex flex-col justify-center items-center p-6 w-full mx-auto">
          <h2 className="text-lg font-semibold text-center">Your shopping bag is empty.</h2>
          <button
            className="px-20 py-3 bg-white border border-black text-black hover:text-white hover:bg-black  mt-4"
            onClick={() => setIsOpen(false)}
          >
            Continue Shopping
          </button>
        </div>
        <div className="w-fit mt-5">
            <p className="border-b-1 pb-4 font-bold text-black mb-4 mx-4">Especially for you</p>
        </div>
        <div className="flex items-center gap-1 px-4 overflow-auto">

            <img width={100} src={CarouselImage} alt="" />

            <img width={100} src={CarouselImage} alt="" />

            <img width={100} src={CarouselImage} alt="" />

            <img width={100} src={CarouselImage} alt="" />

            <img width={100} src={CarouselImage} alt="" />

            <img width={100} src={CarouselImage} alt="" />

        </div>
      </div>

      
    </div>
  );
}

export default ShoppingCart;
