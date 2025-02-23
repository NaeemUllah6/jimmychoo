import { Link } from "react-router-dom";
import WomenCards from '../components/Woment-components/cards'
const filterOptions = [
    { name: "Filter By", link: "/" },
    { name: "Category", link: "/" },
    { name: "Color", link: "/" },
    { name: "Size", link: "/" },
    { name: "Heel Height", link: "/" },
    { name: "Material", link: "/" }
];

const Women = () => {
    return (
<div>
<div className="mt-28 sticky top-[108px] px-10 border-t border-gray-200 py-4 grid grid-cols-1 lg:grid-cols-3 w-full justify-between items-center bg-white z-10">
      <div className="flex flex-wrap gap-3 items-center">
          {filterOptions.map((option, index) => (
              <Link key={index} className={`text-base  text-[#DFB83B] ${index === 0 ? 'font-bold' : 'font-medium'}`} to={option.link}>
                  {option.name}
              </Link>
          ))}
      </div>
      <div>
          <p className="text-base font-medium text-[#DFB83B]">805 Products</p>
      </div>
      <div>
          <p className="text-base font-medium text-[#DFB83B]">Sort By</p>
      </div>
  </div>
  <div>
    <WomenCards/>
  </div>
</div>
        
    );
};

export default Women;
