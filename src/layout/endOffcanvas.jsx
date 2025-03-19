import { useState } from "react";
// import { Link } from "react-router-dom";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-neutral-800 h-7 px-6 fixed top-0 w-full flex gap-3 items-center justify-between z-30">
        {/* <div className="items-center gap-4 hidden md:flex w-full">
          <i className="fa fa-location-dot text-[#DFB83B] text-xs"></i>
          <Link to="/locationLocator" className="text-xs text-[#DFB83B] hidden md:block">Store Locator</Link>
        </div> */}
        <div className="flex items-center gap-4 justify-start w-full">
          <p className="text-xs text-[#DFB83B]">Discover the Spring 2025 Collection</p>
          <i className="fa text-xs fa-chevron-right text-[#DFB83B]"></i>
        </div>
        <div className="hidden md:flex items-center justify-end gap-4 ps-5 border-white w-full">
          <p className="text-[#DFB83B]">|</p>
          <p className="text-xs text-[#DFB83B] cursor-pointer" onClick={() => setIsOpen(true)}>
            United Kingdom (£)
          </p>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-60 bg-opacity-90 z-40"></div>
      )}

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-neutral-800 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Select Country</h2>
          <button onClick={() => setIsOpen(false)} className="text-lg">&times;</button>
        </div>
        <div className="p-4">
          <p className="py-2 border-b">United Kingdom (£)</p>
          <p className="py-2 border-b">United States ($)</p>
          <p className="py-2 border-b">Europe (€)</p>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-30" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
};

export default TopBar;
