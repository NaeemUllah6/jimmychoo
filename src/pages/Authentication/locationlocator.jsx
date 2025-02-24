
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LocationLocator = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 mt-[150px]">
      
      <div className="col-span-2 lg:col-span-1 p-6 bg-white overflow-y-auto border-r border-gray-300">
        <h2 className="text-xl font-bold">Find A Store</h2>
        <div className="mt-4">
          <label className="block text-gray-700 font-medium">Country</label>
          <select className="w-full p-2 border border-gray-300 rounded mt-1">
            <option>United Kingdom</option>
          </select>
        </div>
        <div className="mt-4 relative">
          <input
            type="text"
            placeholder="Address, city or postcode"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <span className="absolute right-3 top-3 text-gray-400">🔍</span>
        </div>

        <div className="mt-6 border-t pt-4">
          <h3 className="font-bold">Filter</h3>
          <div className="mt-2">
            <h4 className="font-medium">Store Type</h4>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {["Retail Store", "Outlet Store", "Department Store", "Flagship Store"].map((type) => (
                <label key={type} className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  {type}
                </label>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-medium">Collection</h4>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {["Bridal", "Made To Order", "Mens", "Womens"].map((collection) => (
                <label key={collection} className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  {collection}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <div className="col-span-2 lg:col-span-2 z-10">
        <MapContainer center={[33.6844, 73.0479]} zoom={5} className="w-full h-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default LocationLocator;
