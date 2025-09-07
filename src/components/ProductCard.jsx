import { useState } from "react";
import { FaBoxOpen, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const [openProductViewModal, setOpenProductViewModal] = useState(false);
    const buttonLoader = false;
    const [selectedViewProduct, setSelectedViewProduct] = useState(null);
    const isAvailable = product.stock && Number(product.stock) > 0;

    const handleProductClick = (product) => {
        setSelectedViewProduct(product);
        setOpenProductViewModal(true);
    }

    return (
        <div className="border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300">
            <div onClick={()=> {handleProductClick(product)}} className="w-full overflow-hidden aspect-[3/2]">
                <img src={product.image} alt={product.name} className="w-full h-full cursor-pointer transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="p-4">
                <h2 onClick={() => {handleProductClick(product)}} className="text-lg font-semibold mb-2 cursor-pointer">{product.name}</h2>
                <div className="min-h-20 max-h-20">
                    <p className="text-gray-600 text-sm mb-4 overflow-hidden">{product.description}</p>
                </div>
                <div className="flex items-center justify-between">
                    {product.specialPrice ? (
                        <div className="flex flex-col pointer-events-none">
                            <span className="text-gray-400 line-through">
                                ${Number(product.price).toFixed(2)}
                            </span>
                            <span className="text-xl font-bold text-slate-700">
                                ${Number(product.specialPrice).toFixed(2)}
                            </span>
                        </div>
                    ) : (
                        <span className="text-gray-700  pointer-events-none">
                            <br/>
                            <span className="text-xl font-bold text-slate-700">
                                ${Number(product.price).toFixed(2)}
                            </span>
                        </span>
                    )}
                    <button onClick={() => {}} 
                            className={`bg-blue-500 ${isAvailable ? "opacity-100 hover:bg-blue-600 cursor-pointer" : "opacity-50 cursor-not-allowed"} text-white px-4 py-2 rounded-lg items-center transition-colors duration-300 w-40 flex justify-center`} 
                            disabled={!isAvailable || buttonLoader}
                    >
                        {isAvailable ? <FaShoppingCart className="mr-2" /> : <FaBoxOpen className="mr-2" />}
                        {isAvailable ? "Add to Cart" : "Out of Stock"}
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;