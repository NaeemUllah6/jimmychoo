import { useState } from 'react';

const FilterPanel = ({ isOpen, onClose, onApply, onClear }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const categories = [
    'Accessories', 'Bags', 'Flat', 'Mules',
    'Platforms', 'Pumps', 'Sandal', 'Slingbacks',
    'Trainer', 'Wedges'
  ];

  const colors = ['Black', 'Blue', 'Brown', 'Gold', 'Green', 'Grey'];

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const toggleColor = (color) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color) 
        : [...prev, color]
    );
  };

  const handleClear = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    onClear();
  };

  return (
    <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-6">Filter by</h2>
        
        {/* Category Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Category</h3>
          <div className="grid grid-cols-2 gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`p-2 border rounded text-sm ${selectedCategories.includes(category) ? 'bg-black text-white' : 'bg-white text-black'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Color Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Colour</h3>
          <div className="space-y-2">
            {colors.map(color => (
              <label key={color} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedColors.includes(color)}
                  onChange={() => toggleColor(color)}
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                />
                <span>{color}</span>
              </label>
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
            onClick={() => onApply({ categories: selectedCategories, colors: selectedColors })}
            className="bg-black text-white px-4 py-2 rounded"
          >
            APPLY (114)
          </button>
        </div>
      </div>
    </div>
  );
};