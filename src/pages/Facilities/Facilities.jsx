import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

// Components
import FacilitiesHeader from "../../components/Facilities/FacilitiesHeader";
import OurHospital from "../../components/Facilities/OurHospital";

const Facilities = () => {
  const location = useLocation();

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Refresh AOS on route change
  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <div data-aos="fade-down"  className="overflow-hidden">
      {/* Header/Hero Section */}
      <FacilitiesHeader />

      {/* Facilities Content */}
      <section className="py-10 lg:py-16" data-aos="fade-up">
        <OurHospital />
      </section>
    </div>
  );
};

export default Facilities;
