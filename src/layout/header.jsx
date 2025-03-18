import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import headerLogo from "../assets/logo2.png";
import SecondOffCanvas from "./endOffcanvas";
import ThirdOffcanvas from "./thirdOffcanvas";
import Fourthoffcanvas from './FourthOffcanvas';

const Drawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [subDrawerOpen, setSubDrawerOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollDirection, setScrollDirection] = useState("up");
    
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > prevScrollY.current) {
                // Scrolling Down
                setScrollDirection("down");
            } else {
                // Scrolling Up
                setScrollDirection("up");
            }

            prevScrollY.current = currentScrollY;
            setIsScrolled(currentScrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Men", path: "/men", subCategories: [{ name: "Shirts", path: "/men" }, { name: "Jeans", path: "/men" }, { name: "Shoes", path: "/men" }] },
        { name: "Women", path: "/women", subCategories: [{ name: "Dresses", path: "/women" }, { name: "Tops", path: "/women" }, { name: "Accessories", path: "/women" }] },
        { name: "Bridals", path: "/bridals", subCategories: [{ name: "Wedding Dresses", path: "/bridals" }, { name: "Jewelry", path: "/bridals" }] },
        { name: "Gifts", path: "/gifts", subCategories: [{ name: "Gift Cards", path: "/gifts" }, { name: "Handmade", path: "/gifts" }] },
        { name: "JC World", path: "/jc-world" }
    ];

    const handleSubDrawer = (category) => {
        setSelectedCategory(category);
        setSubDrawerOpen(true);
    };

    const closeAllDrawers = () => {
        setIsOpen(false);
        setSubDrawerOpen(false);
    };

    return (
        <>
            <SecondOffCanvas />
            <header
                className={`fixed top-0 left-0 w-full flex items-center px-6 h-20 transition-transform duration-300 z-30
                    ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0 mt-[28px]"} 
                    ${isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-[#DFB83B]"}`}
            >
                <div className="flex items-center justify-between w-full ">
                    <div className='flex gap-8 items-center'>
                        <button className="text-xl flex items-center text-[#DFB83B]" onClick={() => setIsOpen(true)}>
                            <i className="fa fa-bars"></i>
                        </button>
                        <ThirdOffcanvas />
                    </div>

                    <img className="w-[100px] lg:w-[200px]" src={headerLogo} alt="Logo" />

                    <div className="flex items-center gap-9 z-20">
                        <Link to='/wishlist'><i className="fa fa-heart text-[#DFB83B]"></i></Link>
                        <Link to='/login'><i className="fa fa-user text-[#DFB83B]"></i></Link>
                        <Fourthoffcanvas />
                    </div>
                </div>
            </header>

            {/* Sidebar Drawer */}
            <div className={`fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto bg-white w-full md:w-80 transition-transform duration-500 
                ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 hidden"}`}>
                <div className="flex justify-between items-center mb-4">
                    <img height={50} width={150} src={headerLogo} alt="Logo" />
                    <button className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-[#DFB83B] rounded-lg text-sm w-8 h-8 flex items-center justify-center"
                        onClick={closeAllDrawers}>
                        <i className="fa fa-times"></i>
                    </button>
                </div>

                <nav className="flex flex-col space-y-4">
                    {navLinks.map((link, index) => (
                        <button key={index} onClick={() => link.subCategories ? handleSubDrawer(link.name) : closeAllDrawers()}
                            className="text-[#DFB83B] transition text-left flex gap-3 justify-between items-center">
                            {link.name}
                            {link.subCategories && <i className="fa fa-chevron-right"></i>}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Subcategory Drawer */}
            {subDrawerOpen && (
                <div className={`fixed top-0 z-50 h-screen p-4 md:left-80 overflow-y-auto bg-white w-full md:w-80 transition-transform duration-500 border-l-2 border-[#DFB83B]`}>
                    <div className="flex justify-between items-center mb-4">
                        <h5 className="text-lg font-semibold text-black">{selectedCategory}</h5>
                        <button className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-[#DFB83B] rounded-lg text-sm w-8 h-8 flex md:hidden items-center justify-center"
                            onClick={closeAllDrawers}>
                            <i className="fa fa-times"></i>
                        </button>
                    </div>

                    <nav className="flex flex-col space-y-3">
                        {navLinks.find(link => link.name === selectedCategory)?.subCategories.map((sub, idx) => (
                            <Link key={idx} to={sub.path} className="text-[#DFB83B] hover:text-black transition"
                                onClick={closeAllDrawers}>
                                {sub.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}

            {/* Overlay */}
            {(isOpen || subDrawerOpen) && (
                <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeAllDrawers}></div>
            )}
        </>
    );
};

export default Drawer;
