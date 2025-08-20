import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

// Components
import ServicesHeader from "../../components/Services/ServicesHeader";
import Child from "../../components/Services/Child";
import OurService from "../../components/Home/OurService";
import ContactHero from "../../components/FAQ/ContactHero";

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

  // Scroll to in-page anchor when hash is present
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace(/^#/, "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div data-aos="fade-down"  className="overflow-hidden">
      {/* Hero/Header Section */}
      <ServicesHeader />

      {/* Main Content */}
      <section className="sm:py-5 space-y-12 xl:space-y-20">
        {/* In-page anchors for footer service links */}
        <div data-aos="fade-up">
          <Child />
        </div>
        <div id="paediatrics" className="h-0 scroll-mt-24" />
        <div id="neonatology" className="h-0 scroll-mt-24" />
        <div id="picu" className="h-0 scroll-mt-24" />
        <div id="super-specialities" className="h-0 scroll-mt-24" />
        <div id="obstetrics" className="h-0 scroll-mt-24" />

        <div data-aos="fade-up">
          <OurService />
        </div>
        <div data-aos="fade-up">
          <ContactHero />
        </div>
      </section>
    </div>
  );
};

export default Services;