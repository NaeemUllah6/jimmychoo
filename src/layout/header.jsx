import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import headerLogo from "../assets/logo2.png";
import SecondOffCanvas from "./endOffcanvas";
import ThirdOffcanvas from "./thirdOffcanvas";
import Fourthoffcanvas from './FourthOffcanvas'
const Drawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [subDrawerOpen, setSubDrawerOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        {
            name: "Men", path: "/men",
            subCategories: [
                { name: "Shirts", path: "/men" },
                { name: "Jeans", path: "/men" },
                { name: "Shoes", path: "/men" }
            ]
        },
        {
            name: "Women", path: "/women",
            subCategories: [
                { name: "Dresses", path: "/men" },
                { name: "Tops", path: "/men" },
                { name: "Accessories", path: "/men" }
            ]
        },
        {
            name: "Bridals", path: "/bridals",
            subCategories: [
                { name: "Wedding Dresses", path: "/men" },
                { name: "Jewelry", path: "/men" }
            ]
        },
        {
            name: "Gifts", path: "/gifts",
            subCategories: [
                { name: "Gift Cards", path: "/men" },
                { name: "Handmade", path: "/men" }
            ]
        },
        { name: "JC World", path: "/men" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 1);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
            <header className={`fixed top-7 left-0 w-full flex items-center px-6 h-20 transition-colors duration-300 z-30 ${isScrolled ? "bg-white text-black " : "bg-transparent text-[#DFB83B]"}`}>
                <div className="flex items-center justify-between w-full">
                    <div className='flex gap-8 items-center'>
                        <button
                            className={`text-xl flex items-center ${isScrolled ? "text-[#DFB83B]" : "text-[#DFB83B]"}`}
                            onClick={() => setIsOpen((prev) => !prev)}
                        >
                            <i className="fa fa-bars text-[#DFB83B]"></i>
                        </button>
                        <ThirdOffcanvas />
                    </div>

                    <img className="w-[100px] lg:w-[200px]" height={50} width={200} src={headerLogo} alt="Logo" />

                    <div className="flex items-center gap-9 z-20">
                        <Link to='/wishlist'><i className={`fa fa-heart ${isScrolled ? "text-[#DFB83B]" : "text-[#DFB83B]"}`}></i></Link>
                        <Link to='/login'>
                            <i className={`fa fa-user ${isScrolled ? "text-[#DFB83B]" : "text-[#DFB83B]"}`}></i>
                        </Link>
                        <Fourthoffcanvas />
                    </div>
                </div>
            </header>

            <div className={`fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto bg-white w-full md:w-80 transition-transform duration-500 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 hidden"}`}>
                <div className="flex justify-between items-center mb-4">
                    <img height={50} width={150} src={headerLogo} alt="Logo" />

                    <button
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-[#DFB83B] rounded-lg text-sm w-8 h-8 flex items-center justify-center"
                        onClick={closeAllDrawers}
                    >
                        <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>

                <nav className="flex flex-col  space-y-4">
                    {navLinks.map((link, index) => (
                        <button
                            key={index}
                            onClick={() => link.subCategories ? handleSubDrawer(link.name) : closeAllDrawers()}
                            className="text-[#DFB83B] transition text-left flex gap-3 justify-between items-center"
                        >
                            {link.name}
                            <i className={`fa fa-chevron-right float-right${link.selectedCategory ? 'rotate-90 text-black' : 'rotate-180'}`}></i>
                        </button>
                    ))}
                </nav>
            </div>

            {subDrawerOpen && (
                <div className={`fixed top-0 z-50 h-screen p-4 overflow-y-auto bg-white w-full md:w-60 transition-transform duration-500 border-l-2 border-[#DFB83B]`}>
                    <div className="flex justify-between items-center mb-4">
                        <h5 className="text-lg font-semibold text-black">{selectedCategory ? selectedCategory : "JC World"}</h5>
                        <button
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-[#DFB83B] rounded-lg text-sm w-8 h-8 flex items-center justify-center"
                        onClick={closeAllDrawers}
                    >
                        <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                    </div>

                    {selectedCategory && (
                        <nav className="flex flex-col space-y-3">
                            {navLinks.find(link => link.name === selectedCategory)?.subCategories.map((sub, idx) => (
                                <Link
                                    key={idx}
                                    to={sub.path}
                                    className="text-[#DFB83B] hover:text-black transition"
                                    onClick={closeAllDrawers}
                                >
                                    {sub.name}

                                </Link>

                            ))}
                        </nav>
                    )}

                    {!selectedCategory && (
                        <p className="text-gray-700">Welcome to JC World! Explore our latest collections and news.</p>
                    )}
                </div>
            )}

            {(isOpen || subDrawerOpen) && (
                <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeAllDrawers}></div>
            )}
        </>
    );
};

export default Drawer;
