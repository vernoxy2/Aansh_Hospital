import React, { useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "./assets/logo.png"

// 🔥 Lazy load all pages
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Services = lazy(() => import("./pages/Services/Services"));
const Facilities = lazy(() => import("./pages/Facilities/Facilities"));
const Achievement = lazy(() => import("./pages/Achievement/Achievement"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Faq = lazy(() => import("./pages/FAQ/Faq"));
const NotFound = lazy(() => import("./pages/NotFound"));

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      delay: 100,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <>
      <Navbar />

      {/* 🔥 Suspense Wrapper */}
      <Suspense
        fallback={
            <div className="flex flex-col justify-center items-center h-screen text-xl space-y-5">

              <img src={Logo} alt="" loading="lazy" className="animate-pulse"/>
              <p className="text-primary font-semibold">Loading...</p>

            </div>
          }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

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
