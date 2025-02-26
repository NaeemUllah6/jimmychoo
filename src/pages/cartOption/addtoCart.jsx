import { useState } from "react";
import Cart1 from '../../assets/cart1.webp'
import Cart2 from '../../assets/cart2.webp'
import Cart3 from '../../assets/cart3.webp'
import Cart4 from '../../assets/cart4.webp'
const AddToCart = () => { 
    const [selectedSize, setSelectedSize] = useState(null);

    const productData = {
        name: "Bing Pump Flat",
        description: "Latte Nappa Leather Flats",
        price: "£825",
        color: "Latte/Silver",
        sizes: [
            34, 34.5, 35, 35.5, 36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5, 41, 41.5, 42, 43
        ],
        images: [
            Cart1, Cart2, Cart3, Cart4
        ],
    };

    return (
        <div className=" mt-[110px] grid grid-cols-1 md:grid-cols-2 ">
            
            <div className="w-full h-full p-4">
                {productData.images.map((img, index) => (
                    <img key={index} src={img} alt={`Product ${index + 1}`} className="w-full mb-4" />
                ))}
            </div>

            
            <div className="w-full p-6 sticky top-[100px] h-fit bg-white shadow-lg">
                <h1 className="text-2xl font-bold">{productData.name}</h1>
                <p className="text-gray-600">{productData.description}</p>
                <p className="text-xl font-semibold mt-2">{productData.price}</p>
                <p className="text-gray-500 mt-1"><strong>Colour:</strong> {productData.color}</p>

                <div className="mt-4">
                    <h3 className="text-md font-semibold mb-2">Size:</h3>
                    <div className="grid grid-cols-4 gap-2">
                        {productData.sizes.map((size) => (
                            <button
                                key={size}
                                className={`p-2 border ${selectedSize === size ? "bg-black text-white" : "border-gray-300"} rounded`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                <button className="mt-6 w-full p-3 bg-black text-white font-semibold rounded">
                    SELECT SIZE
                </button>
            </div>
        </div>
    );
};

export default AddToCart; 
