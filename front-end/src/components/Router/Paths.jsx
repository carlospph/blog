import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from '../Pages/Services/Services.jsx';
import Nofound from '../Pages/Nofound/Nofound.jsx';
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

const Paths = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Nofound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Paths
