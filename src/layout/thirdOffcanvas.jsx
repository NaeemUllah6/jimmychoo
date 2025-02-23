import { useState, useEffect } from "react";
import OffcanvasImg from "../assets/d-hp-box3.webp";
const SearchOffCanvas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <i className={`fa fa-magnifying-glass ${isScrolled ? "text-black" : "text-[#DFB83B]"}`}></i>
      </button>

      <div
        className={`fixed top-0 left-0 h-full max-w-[550px] bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
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
          <div className="flex overflow-x-auto space-x-4 mt-2">
            {[
              { name: "Diamond Light Flex F", price: "£450", image: OffcanvasImg },
              { name: "Cinch M", price: "£1,495", image: OffcanvasImg },
              { name: "Aurelie 85", price: "£750", image: OffcanvasImg },
              { name: "JC Pearl", price: "£185", image: OffcanvasImg },
              { name: "JC Pearl", price: "£185", image: OffcanvasImg },
              { name: "JC Pearl", price: "£185", image: OffcanvasImg },
            ].map((product, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover" />
                <p className="text-sm">{product.name}</p>
                <p className="font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SearchOffCanvas;
