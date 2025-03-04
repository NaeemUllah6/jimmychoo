import { Link } from "react-router-dom";

const pagesHeader = () => {
    const filterOptions = [
        { name: "Filter By", link: "/" },
        { name: "Category", link: "/" },
        { name: "Color", link: "/" },
        { name: "Size", link: "/" },
        { name: "Heel Height", link: "/" },
        { name: "Material", link: "/" }
    ];
    
  return (
<div className="mt-28 sticky top-[108px] px-10 border-t border-gray-200 py-4 grid grid-cols-1 lg:grid-cols-3 w-full justify-between items-center bg-white z-10">
      <div className="flex flex-wrap w-full gap-3 items-center">
          {filterOptions.map((option, index) => (
              <Link key={index} className={`text-base  text-[#DFB83B] ${index === 0 ? 'font-bold' : 'font-medium'}`} to={option.link}>
                  {option.name}
              </Link>
          ))}
      </div>
      <div className="text-start lg:text-center">
          <p className="text-base font-medium text-[#DFB83B]">805 Products</p>
      </div>
      <div className="text-start lg:text-end">
          <p className="text-base font-medium text-[#DFB83B]">Sort By</p>
      </div>
  </div>
  )
}

export default pagesHeader
