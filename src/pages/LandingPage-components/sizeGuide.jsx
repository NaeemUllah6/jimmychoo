import React from "react";

const sizeGuideData = {
  womensShoes: {
    headers: ["IT", "UK", "US", "JP", "AU", "CN"],
    sizes: [
      [34, 1, 4, 21, 2, "220/75"],
      [34.5, 1.5, 4.5, 21.5, 2.5, "225/75"],
      [35, 2, 5, 22, 3, "230/75"],
      [35.5, 2.5, 5.5, 22.5, 3.5, "235/75"],
      [36, 3, 6, 23, 4, "240/75"],
      [36.5, 3.5, 6.5, 23.5, 4.5, "245/75"],
      [37, 4, 7, 24, 5, "250/75"],
      [37.5, 4.5, 7.5, 24.5, 5.5, "255/75"],
      [38, 5, 8, 25, 6, "260/75"],
      [38.5, 5.5, 8.5, 25.5, 6.5, "265/75"],
      [39, 6, 9, 26, 7, "270/75"],
      [39.5, 6.5, 9.5, 26.5, 7.5, "275/75"],
      [40, 7, 10, 27, 8, "280/75"],
    ],
  },
  mensShoes: {
    headers: ["IT/EU", "UK", "US", "JP", "AU"],
    sizes: [
      [39, 5, 6, 24, 5],
      [39.5, 5.5, 6.5, 24.5, 5.5],
      [40, 6, 7, 25, 6],
      [40.5, 6.5, 7.5, 25.5, 6.5],
      [41, 7, 8, 26, 7],
      [41.5, 7.5, 8.5, 26.5, 7.5],
      [42, 8, 9, 27, 8],
      [42.5, 8.5, 9.5, 27.5, 8.5],
      [43, 9, 10, 28, 9],
      [43.5, 9.5, 10.5, 28.5, 9.5],
      [44, 10, 11, 29, 10],
      [44.5, 10.5, 11.5, 29.5, 10.5],
      [45, 11, 12, 30, 11],
    ],
  },
};

const SizeGuideTable = ({ title, data }) => {
  return (
    <div className="mt-30">
      <h2 className="text-xl font-bold my-4">{title}</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {data.headers.map((header, index) => (
              <th key={index} className="border border-gray-300 p-2 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.sizes.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border border-gray-300 p-2 text-left"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SizeGuide = () => {
  return (
    <div className="p-6">
      <SizeGuideTable title="Women's Shoes" data={sizeGuideData.womensShoes} />
      <SizeGuideTable title="Men's Shoes" data={sizeGuideData.mensShoes} />
    </div>
  );
};

export default SizeGuide;
