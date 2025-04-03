import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./layout/header";
import Home from "./home";
import Men from "./pages/Men";
import Women from "./pages/women";
import Bridals from "./pages/bridals";
import JcWorld from "./pages/jc-world";
import Footer from "./layout/footer";
import Login from "./pages/authentication";
import NewsletterSignup from "./pages/LandingPage-components/signup";
import Wishlist from "./pages/cartOption/wishlist";
import Signup from "./pages/Authentication/signup";
import LocationLocator from './pages/Authentication/locationlocator'
import AddtoCart from "./pages/cartOption/addtoCart";
import FaQ from "./faqs";
import loaderIcon from './assets/footerLogo.png'
import ContactUs from "./pages/LandingPage-components/contactus";
import PrivacyPolicy from "./pages/LandingPage-components/PrivacyPolicy";
import SizeGuide from "./pages/LandingPage-components/sizeGuide";
import Aboutus from "./pages/LandingPage-components/Aboutus";

function Loader() {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
            {/* <div className="w-12 h-12 border-4 border-gray-300 border-t-[#DFB83B] rounded-full animate-spin"></div> */}
            <img className="h-100 w-100" src={loaderIcon} alt="" />
        </div>
    );
}

function Layout() {
    const location = useLocation();
    const hideFooterRoutes = ["/login", "/signup"];

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="">
            <div className="z-30">
                <Header />
            </div>
            <div className="max-w-1440px mx-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/men" element={<Men />} />
                    <Route path="/women" element={<Women />} />
                    <Route path="/bridals" element={<Bridals />} />
                    <Route path="/jc-world" element={<JcWorld />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/locationLocator" element={<LocationLocator />} />
                    <Route path="/addtoCart" element={<AddtoCart />} />
                    <Route path="/faqs" element={<FaQ />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                    <Route path="/sizeGuide" element={<SizeGuide />} />
                    <Route path="/aboutus" element={<Aboutus />} />
                </Routes>
            </div>


            {!hideFooterRoutes.includes(location.pathname) && <NewsletterSignup />}
            <Footer />
        </div>
    );
}
function App() {
    return (
        <Router>
            <Layout />
        </Router>
    );
}
export default App;
