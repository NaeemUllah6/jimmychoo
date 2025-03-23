import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const ShippingSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const countries = [
    { name: "Canada", currency: "$" },
    { name: "United States", currency: "$" },
    { name: "Mexico", currency: "$" },
    { name: "Guatemala", currency: "Q" },
    { name: "Honduras", currency: "L" },
    { name: "El Salvador", currency: "$" },
    { name: "Nicaragua", currency: "C$" },
    { name: "Costa Rica", currency: "₡" },
    { name: "Panama", currency: "B/." },
    { name: "Bahamas", currency: "$" },
    { name: "Cuba", currency: "₱" },
    { name: "Dominican Republic", currency: "RD$" },
    { name: "Haiti", currency: "G" },
    { name: "Jamaica", currency: "J$" },
    { name: "Trinidad and Tobago", currency: "TT$" },

    { name: "Argentina", currency: "$" },
    { name: "Bolivia", currency: "Bs" },
    { name: "Brazil", currency: "R$" },
    { name: "Chile", currency: "$" },
    { name: "Colombia", currency: "$" },
    { name: "Ecuador", currency: "$" },
    { name: "Guyana", currency: "$" },
    { name: "Paraguay", currency: "₲" },
    { name: "Peru", currency: "S/." },
    { name: "Suriname", currency: "$" },
    { name: "Uruguay", currency: "$" },
    { name: "Venezuela", currency: "Bs" },

    { name: "Albania", currency: "Lek" },
    { name: "Andorra", currency: "€" },
    { name: "Austria", currency: "€" },
    { name: "Belgium", currency: "€" },
    { name: "Bosnia and Herzegovina", currency: "KM" },
    { name: "Bulgaria", currency: "лв" },
    { name: "Croatia", currency: "€" },
    { name: "Cyprus", currency: "€" },
    { name: "Czech Republic", currency: "Kč" },
    { name: "Denmark", currency: "kr" },
    { name: "Estonia", currency: "€" },
    { name: "Finland", currency: "€" },
    { name: "France", currency: "€" },
    { name: "Germany", currency: "€" },
    { name: "Greece", currency: "€" },
    { name: "Hungary", currency: "Ft" },
    { name: "Iceland", currency: "kr" },
    { name: "Ireland", currency: "€" },
    { name: "Italy", currency: "€" },
    { name: "Latvia", currency: "€" },
    { name: "Lithuania", currency: "€" },
    { name: "Luxembourg", currency: "€" },
    { name: "Malta", currency: "€" },
    { name: "Netherlands", currency: "€" },
    { name: "Norway", currency: "kr" },
    { name: "Poland", currency: "zł" },
    { name: "Portugal", currency: "€" },
    { name: "Romania", currency: "lei" },
    { name: "Russia", currency: "₽" },
    { name: "Serbia", currency: "din" },
    { name: "Slovakia", currency: "€" },
    { name: "Slovenia", currency: "€" },
    { name: "Spain", currency: "€" },
    { name: "Sweden", currency: "kr" },
    { name: "Switzerland", currency: "CHF" },
    { name: "Ukraine", currency: "₴" },
    { name: "United Kingdom", currency: "£" },

    { name: "Algeria", currency: "دج" },
    { name: "Angola", currency: "Kz" },
    { name: "Benin", currency: "CFA" },
    { name: "Botswana", currency: "P" },
    { name: "Burkina Faso", currency: "CFA" },
    { name: "Burundi", currency: "FBu" },
    { name: "Cape Verde", currency: "CVE" },
    { name: "Cameroon", currency: "CFA" },
    { name: "Central African Republic", currency: "CFA" },
    { name: "Chad", currency: "CFA" },
    { name: "Comoros", currency: "CF" },
    { name: "Democratic Republic of the Congo", currency: "FC" },
    { name: "Djibouti", currency: "Fdj" },
    { name: "Egypt", currency: "E£" },
    { name: "Equatorial Guinea", currency: "CFA" },
    { name: "Eritrea", currency: "Nfk" },
    { name: "Eswatini", currency: "SZL" },
    { name: "Ethiopia", currency: "Br" },
    { name: "Gabon", currency: "CFA" },
    { name: "Gambia", currency: "D" },
    { name: "Ghana", currency: "₵" },
    { name: "Guinea", currency: "GNF" },
    { name: "Guinea-Bissau", currency: "CFA" },
    { name: "Ivory Coast", currency: "CFA" },
    { name: "Kenya", currency: "KSh" },
    { name: "Lesotho", currency: "L" },
    { name: "Liberia", currency: "L$" },
    { name: "Libya", currency: "LD" },
    { name: "Madagascar", currency: "Ar" },
    { name: "Malawi", currency: "MK" },
    { name: "Mali", currency: "CFA" },
    { name: "Mauritania", currency: "MRU" },
    { name: "Mauritius", currency: "Rs" },
    { name: "Morocco", currency: "DH" },
    { name: "Mozambique", currency: "MT" },
    { name: "Namibia", currency: "N$" },
    { name: "Niger", currency: "CFA" },
    { name: "Nigeria", currency: "₦" },
    { name: "Rwanda", currency: "RF" },
    { name: "São Tomé and Príncipe", currency: "Db" },
    { name: "Senegal", currency: "CFA" },
    { name: "Seychelles", currency: "SCR" },
    { name: "Sierra Leone", currency: "SLL" },
    { name: "Somalia", currency: "S" },
    { name: "South Africa", currency: "R" },
    { name: "South Sudan", currency: "SSP" },
    { name: "Sudan", currency: "SDG" },
    { name: "Tanzania", currency: "TSh" },
    { name: "Togo", currency: "CFA" },
    { name: "Tunisia", currency: "DT" },
    { name: "Uganda", currency: "USh" },
    { name: "Zambia", currency: "ZK" },
    { name: "Zimbabwe", currency: "ZWL" },
  ];



  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex gap-3 flex-wrap justify-between">
        <div className="bg-neutral-800 h-7 px-6 fixed top-0 w-full flex gap-3 items-center justify-between z-30">
          {/* <div className="items-center gap-4 hidden md:flex w-full">
          <i className="fa fa-location-dot text-[#DFB83B] text-xs"></i>
          <Link to="/locationLocator" className="text-xs text-[#DFB83B] hidden md:block">Store Locator</Link>
        </div> */}
          <div className="flex items-center gap-4 justify-center md:justify-start w-full">
            <p className="text-xs text-[#DFB83B]">Discover the Spring 2025 Collection</p>
            <i className="fa text-xs fa-chevron-right text-[#DFB83B]"></i>
          </div>
          <div className="hidden md:flex items-center justify-end gap-4 ps-5 border-white w-full">
            <p className="text-[#DFB83B]">|</p>
            <button
              onClick={() => setIsOpen(true)}
              className="text-xs text-[#DFB83B]"
            >
              United Kingdom (£)
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 transition-opacity z-50"
          onClick={() => setIsOpen(false)}>
        </div>
      )}

      <div
        className={`fixed top-0 right-0 w-110 h-full bg-neutral-700 shadow-lg p-6 z-50 transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl text-[#DFB83B]"
        >
          <IoClose />
        </button>

        <h2 className="text-lg font-semibold mb-3">Shipping To</h2>

        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search country..."
            className="w-full border px-4 py-2 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FiSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#DFB83B]" />
        </div>

        <div className="h-60 overflow-y-auto border rounded-md">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <div
                key={index}
                className="px-4 py-2 cursor-pointer"
              >
                {country.name} ({country.currency})
              </div>
            ))
          ) : (
            <p className="text-gray-500 p-4 text-center">No results found</p>
          )}
        </div>

        <h2 className="text-lg font-semibold mt-6">Language</h2>
        <div className="border px-4 py-2 mt-2 rounded-md">
          <select className="w-full outline-0" name="" id="">
            <option value="English">English</option>
            <option value="English">French</option>
            <option value="English">Spanish</option>
            <option value="English">Dutch</option>

          </select>
        </div>

        <button className="w-full bg-[#DFB83B] hover:bg-yellow-600 text-white text-center py-3 mt-6 rounded-md font-semibold cursor-not-allowed">
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  );
};

export default ShippingSidebar;
