import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import GetItemType from "./getItemType";

const PagesHeader = () => {
  const filterOptions = [
    { name: "Filter By", link: "/" },
    { name: "Category", link: "/" },
    { name: "Color", link: "/" },
    { name: "Size", link: "/" },
    { name: "Heel Height", link: "/" },
    { name: "Material", link: "/" },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > scrollPosition + 1) {
        setIsScrolledDown(true);
      } else if (currentScroll < scrollPosition - 1) {
        setIsScrolledDown(false);
      }
      setScrollPosition(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  return (
<>
    <div
      className={`mt-28 sticky top-[108px] px-6 md:px-10 border-t border-gray-200 py-4 grid grid-cols-1 lg:grid-cols-3 w-full justify-between items-center bg-neutral-700 z-10 transition-transform duration-300 gap-2 ${
        isScrolledDown ? "-translate-y-20" : "translate-y-0"
      }`}
    >
      <div className="flex flex-wrap w-full gap-2 items-center">
        {filterOptions.map((option, index) => (
          <Link
            key={index}
            className={`text-base text-[#DFB83B] hidden md:block ${
              index === 0 ? "font-bold" : "font-medium"
            }`}
            to={option.link}
          >
            {option.name}
          </Link>
        ))}
      </div>
      <div className="text-start lg:text-center">
        <p className="text-base font-medium text-[#DFB83B]">805 Products</p>
      </div>
      <div className="text-start lg:text-end">
        <p className="text-base font-medium text-[#DFB83B] hidden md:block">Sort By</p>
      </div>
    </div>
</>
  );
};

export default PagesHeader;
