import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./layout/header";
import Home from "./home";
import Men from "./pages/Men";
import Women from "./pages/women";
import Bridals from "./pages/bridals";
import JcWorld from "./pages/jc-world";
import Footer from "./layout/footer";
import Login from "./pages/authentication"
import NewsletterSignup from "./pages/LandingPage-components/signup";
import Wishlist from "./pages/cartOption/wishlist";
import Signup from "./pages/Authentication/signup";

function Layout() {
    const location = useLocation();
    const hideFooterRoutes = ["/login", "/signup"];

    return (
        <div>
            <Header />
            <div className="max-w-1440px mx-auto ">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/men" element={<Men />} />
                    <Route path="/women" element={<Women />} />
                    <Route path="/bridals" element={<Bridals />} />
                    <Route path="/jc-world" element={<JcWorld />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/wishlist" element={<Wishlist/>} />
                    <Route path="/singup" element={<Signup/>} />
                </Routes>
            </div>

            {/* Hide Footer & NewsletterSignup on specific routes */}
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
