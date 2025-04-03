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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedNewColors, setSelectedNewColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedHeelHeights, setSelectedHeelHeights] = useState([]);

  // Filter options
  const categories = [
    'Accessories', 'Bags', 'Flat', 'Mules',
    'Platforms', 'Pumps', 'Sandal', 'Slingbacks',
    'Trainer', 'Wedges'
  ];

  const originalColors = ['Black', 'Blue', 'Brown', 'Gold', 'Green', 'Grey'];
  const newColors = [
    'Black', 'Blue', 'Brown', 'Gold',
    'Green', 'Grey', 'Metallic', 'Multi Colour',
    'Neutral', 'Pink', 'Silver', 'White'
  ];

  const sizes = [
    '34', '34.5', '35', '35.5', '36', '36.5',
    '37', '37.5', '38', '38.5', '39', '39.5',
    '40', '40.5', '41', '41.5', '42', '43',
    '44', '45', 'L', 'M', 'One Size', 'S'
  ];

  const heelHeights = ['Flat', 'High Heel', 'Low Heel', 'Mid Heel'];

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

  // Toggle functions
  const toggleSelection = (state, setState, item) => {
    setState(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item) 
        : [...prev, item]
    );
  };

  const handleClear = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setSelectedNewColors([]);
    setSelectedSizes([]);
    setSelectedHeelHeights([]);
    console.log('Filters cleared');
  };

  const handleApply = () => {
    console.log('Applied filters:', {
      categories: selectedCategories,
      colors: [...selectedColors, ...selectedNewColors],
      sizes: selectedSizes,
      heelHeights: selectedHeelHeights
    });
    setIsFilterOpen(false);
  };

  return (
    <>
      <div
        className={`mt-28 sticky top-[108px] px-6 md:px-10 border-t border-gray-200 py-4 flex w-full justify-between items-center bg-neutral-700 z-10 transition-transform duration-300 gap-2 ${
          isScrolledDown ? "-translate-y-20" : "translate-y-0"
        }`}
      >

        <div className="flex flex-wrap w-full gap-2 items-center">
          {filterOptions.map((option, index) => (
            <button 
            onClick={() => setIsFilterOpen(true)}
              key={index}
              className={`text-base text-[#DFB83B] hidden md:block ${
                index === 0 ? "font-bold" : "font-medium"
              }`}
              to={option.link}
            >
              {option.name}
            </button>
          ))}
         
        </div>
        <div className="flex justify-end w-full">
          <p className="text-base font-medium text-[#DFB83B]">Sort By</p>
        </div>
      </div>

      {/* Overlay */}
      {isFilterOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsFilterOpen(false)}
        />
      )}

      {/* Filter panel */}
      <div className={`fixed inset-y-0 left-0 w-[40%] bg-white shadow-lg transform ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-6">Filter by</h2>
          
          {/* Category Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Category</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => toggleSelection(selectedCategories, setSelectedCategories, category)}
                  className={`p-2 border rounded text-sm ${
                    selectedCategories.includes(category) 
                      ? 'bg-black text-white' 
                      : 'bg-white text-black'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Original Color Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Colour</h3>
            <div className="space-y-2 flex gap-5 flex-wrap">
              {originalColors.map(color => (
                <label key={color} className="flex items-center space-x-2 border p-2">
                  <input
                    type="checkbox"
                    checked={selectedColors.includes(color)}
                    onChange={() => toggleSelection(selectedColors, setSelectedColors, color)}
                    className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  />
                  <span>{color}</span>
                </label>
              ))}
            </div>
          </div>

          {/* New Color Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">More Colors</h3>
            <div className="grid grid-cols-4 gap-2">
              {newColors.map(color => (
                <label key={color} className="flex items-center space-x-2 p-2 border">
                  <input
                    type="checkbox"
                    checked={selectedNewColors.includes(color)}
                    onChange={() => toggleSelection(selectedNewColors, setSelectedNewColors, color)}
                    className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  />
                  <span>{color}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Size Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Size</h3>
            <div className="grid grid-cols-4 gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => toggleSelection(selectedSizes, setSelectedSizes, size)}
                  className={`p-2 border rounded text-sm ${
                    selectedSizes.includes(size) 
                      ? 'bg-black text-white' 
                      : 'bg-white text-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Heel Height Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Heel Height</h3>
            <div className="grid grid-cols-2 gap-2">
              {heelHeights.map(height => (
                <button
                  key={height}
                  onClick={() => toggleSelection(selectedHeelHeights, setSelectedHeelHeights, height)}
                  className={`p-2 border rounded text-sm ${
                    selectedHeelHeights.includes(height) 
                      ? 'bg-black text-white' 
                      : 'bg-white text-black'
                  }`}
                >
                  {height}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={handleClear}
              className="font-bold underline"
            >
              CLEAR
            </button>
            <button 
              onClick={handleApply}
              className="bg-black text-white px-4 py-2 rounded"
            >
              APPLY (114)
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagesHeader;