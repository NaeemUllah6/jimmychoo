import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import headerLogo from '../assets/logo2.png'

const Drawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Men", path: "/men" },
        { name: "Women", path: "/women" },
        { name: "Bridals", path: "/bridals" },
        { name: "Gifts", path: "/Gifts" },
        { name: "JC World", path: "/js-world" }
    ];

    // Detect scroll position
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 1);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Black Top Bar */}
            <div className="bg-black h-7 px-6 fixed top-0 w-full flex gap-3 items-center justify-between z-50">
                <div className="items-center gap-4 hidden md:flex w-full">
                    <i className="fa fa-location-dot text-[#DFB83B] text-xs"></i>
                    <p className="text-xs text-[#DFB83B] hidden md:block">Store Locator</p>
                </div>
                <div className="flex items-center gap-4 justify-center w-full">
                    <p className="text-xs text-[#DFB83B]">Discover the Spring 2025 Collection</p>
                    <i className="fa text-xs fa-chevron-right text-[#DFB83B]"></i>
                </div>
                <div className="hidden md:flex items-center justify-end gap-4 ps-5 border-white w-full">
                    <p className="text-[#DFB83B]">|</p>
                    <p className="text-xs text-[#DFB83B]">United Kingdom (£)</p>
                </div>
            </div>

            {/* Header with scroll effect */}
            <header className={`fixed top-7 left-0 w-full flex items-center px-6 h-20 transition-colors duration-300 z-50 ${isScrolled ? "bg-white text-black " : "bg-transparent text-[#DFB83B]"}`}>
                <div className="flex items-center justify-between w-full">
                    {/* Left Section */}
                    <div className="flex items-center">
                        <button
                            className={`text-xl flex items-center  ${isScrolled ? "text-black" : "text-[#DFB83B]"}`}
                            onClick={() => setIsOpen((prev) => !prev)}
                        >
                            <i className="fa fa-bars"></i>
                            {/* <p className="ps-3 font-medium text-base hidden md:block">Menu</p> */}
                        </button>
                        <button className="flex items-center  ms-10">
                            <i className={`fa fa-magnifying-glass ${isScrolled ? "text-black" : "text-[#DFB83B]"}`}></i>
                            {/* <p className="ps-3 font-medium text-base hidden md:block">Search</p> */}
                        </button>
                    </div>

                    {/* Logo */}
                    <div>
                        <img className="w-[100px] lg:w-[200px]" height={50} width={200} src={headerLogo} alt="" />
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-9">
                        <i className={`fa fa-heart ${isScrolled ? "text-black" : "text-[#DFB83B]"}`}></i>
                        <Link to='/login'>
                            <i className={`fa fa-user ${isScrolled ? "text-black" : "text-[#DFB83B]"}`}></i>
                        </Link>
                        <i className={`!hidden md:block fa fa-shopping-cart ${isScrolled ? "text-black" : "text-[#DFB83B]"}`}></i>
                    </div>
                </div>
            </header>

            {/* Drawer Menu */}
            <div
                className={`fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto bg-white w-80 transition-transform duration-500 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 hidden"}`}
            >
                <div className="flex justify-between items-center mb-4">
                    {/* <h5 className="text-base font-semibold text-gray-500">
                        <svg className="w-4 h-4 inline-block mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        Info
                    </h5> */}
                    <div>
                        <img height={50} width={150} src={headerLogo} alt="" />
                    </div>

                    <button
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-[#DFB83B] rounded-lg text-sm w-8 h-8 flex items-center justify-center"
                        onClick={() => setIsOpen(false)}
                    >
                        <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>

                <nav className="flex flex-col space-y-4">
                    {navLinks.map((link, index) => (
                        <Link key={index} to={link.path} className=" text-[#DFB83B] transition">
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Overlay for Drawer */}
            {isOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsOpen(false)}></div>
            )}
        </>
    );
};

export default Drawer;
