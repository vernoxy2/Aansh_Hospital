import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Facilities from "./pages/Facilities/Facilities";
import Achievement from "./pages/Achievement/Achievement";
// import Career from "./pages/Career/Career";
import Contact from "./pages/Contact/Contact";
import Faq from "./pages/FAQ/Faq";
import AOS from "aos";
import "aos/dist/aos.css";
import NotFound from "./pages/NotFound";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // only animate once
      delay: 100, // global delay (can be overridden per element)
      easing: "ease-in-out", // optional: animation easing
    });
  }, []);

  useEffect(() => {
    AOS.refresh(); // ensures it re-triggers when navigating
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
         {/* Catch-all 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
