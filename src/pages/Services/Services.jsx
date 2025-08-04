import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

// Components
import ServicesHeader from "../../components/Services/ServicesHeader";
import Child from "../../components/Services/Child";
import OurService from "../../components/Home/OurService";

const Services = () => {
  const location = useLocation();

  // Initialize AOS on mount
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Refresh AOS on route change
  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <div data-aos="fade-down"  className="overflow-hidden">
      {/* Hero/Header Section */}
      <ServicesHeader />

      {/* Main Content */}
      <section className="sm:py-5 space-y-12 xl:space-y-20">
        <div data-aos="fade-up">
          <Child />
        </div>

        <div data-aos="fade-up">
          <OurService />
        </div>
      </section>
    </div>
  );
};

export default Services;
